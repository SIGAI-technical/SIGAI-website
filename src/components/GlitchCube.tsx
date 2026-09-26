'use client';

import { useEffect, useMemo, useRef } from 'react';
import {
  buildCubies,
  restTransform,
  rotatePos,
  CUBIE,
  HALF,
  SEQUENCE,
  STAGE,
  type Face,
} from '@/lib/cube';

/** Where each face sits on a cubie, pushed out to the cubie's surface. */
const FACE_TRANSFORM: Record<Face, string> = {
  up: `rotateX(90deg) translateZ(${HALF}px)`,
  down: `rotateX(-90deg) translateZ(${HALF}px)`,
  front: `translateZ(${HALF}px)`,
  back: `rotateY(180deg) translateZ(${HALF}px)`,
  right: `rotateY(90deg) translateZ(${HALF}px)`,
  left: `rotateY(-90deg) translateZ(${HALF}px)`,
};

const FACES = Object.keys(FACE_TRANSFORM) as Face[];

interface GlitchCubeProps {
  size?: number;
  logoSrc: string;
  tumbleSeconds?: number;
  moveMs?: number;
  solving?: boolean;
}

export default function GlitchCube({
  size = STAGE,
  logoSrc,
  moveMs = 620,
  solving = true,
}: GlitchCubeProps) {
  const cubies = useMemo(() => buildCubies(logoSrc), [logoSrc]);

  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);
  const tumbleRef = useRef<HTMLDivElement>(null);

  // ─── Solve-loop (layer turns) ──────────────────────────────────────────────
  useEffect(() => {
    if (!solving) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    cubies.forEach((c, i) => {
      c.pos = [...c.pos] as [number, number, number];
      c.base = c.tf = restTransform(c.pos);
      const el = nodes.current[i];
      if (el) el.style.transform = c.tf;
    });

    let raf = 0;
    let index = 0;
    let turning = false;
    let phaseStart = performance.now();
    const holdMs = 900;
    const dur = Math.max(180, moveMs);

    const tick = (now: number) => {
      if (!visible || document.hidden) { raf = 0; return; }
      raf = requestAnimationFrame(tick);
      const t = now - phaseStart;

      if (!turning) {
        const wait =
          index === 0 ? holdMs * 2 : index === SEQUENCE.length / 2 ? holdMs : 120;
        if (t >= wait) { turning = true; phaseStart = now; }
        return;
      }

      const m = SEQUENCE[index];
      const p = Math.min(1, t / dur);
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const ang = 90 * m.dir * e;

      cubies.forEach((c, i) => {
        if (c.pos[m.ax] !== m.layer) return;
        c.tf = `rotate${m.axis}(${ang.toFixed(2)}deg) ${c.base}`;
        const el = nodes.current[i];
        if (el) el.style.transform = c.tf;
      });

      if (p >= 1) {
        cubies.forEach((c) => {
          if (c.pos[m.ax] !== m.layer) return;
          c.pos = rotatePos(c.pos, m.axis, 90 * m.dir);
          c.base = `rotate${m.axis}(${90 * m.dir}deg) ${c.base}`;
          c.tf = c.base;
        });
        turning = false;
        phaseStart = now;
        index = (index + 1) % SEQUENCE.length;

        if (index === 0) {
          cubies.forEach((c, i) => {
            c.base = c.tf = restTransform(c.pos);
            const el = nodes.current[i];
            if (el) el.style.transform = c.tf;
          });
        }
      }
    };

    let visible = true;
    const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const stop  = () => { if (raf) cancelAnimationFrame(raf); raf = 0; };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start(); else stop();
      },
      { rootMargin: '120px' },
    );
    if (frameRef.current) io.observe(frameRef.current);

    const onVisibility = () => {
      if (!document.hidden && visible) start(); else stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    start();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [cubies, moveMs, solving]);

  // ─── JS-driven orbit rotation (replaces CSS tumble) ────────────────────────
  useEffect(() => {
    const el = tumbleRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Static pose for reduced-motion users.
      el.style.transform = 'rotateX(-16deg) rotateY(-26deg) rotateZ(-2deg)';
      return;
    }

    // Remove the CSS animation entirely — JS owns the transform from here.
    el.style.animation = 'none';

    // ── Shared mutable state (no React state = no re-renders) ─────────────
    let rotX = -16;   // current X rotation (deg)
    let rotY = -26;   // current Y rotation (deg)
    let velX = 0;     // angular velocity from drag
    let velY = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;

    // Auto-drift parameters — mimic the original tumble keyframes as a slow
    // oscillation so the cube still feels alive when not being dragged.
    let autoT = 0; // time accumulator (seconds)
    const AUTO_SPEED = 1 / 34; // one full oscillation cycle per 34 s

    function autoRotation(t: number) {
      // Smooth figure-eight oscillation matching the original keyframe intent.
      const tX = -16 + 14 * Math.sin(t * Math.PI * 2);           // ±14° in X
      const tY = -26 + 30 * Math.sin(t * Math.PI * 2 * 0.75);    // ±30° in Y
      const tZ = -2  +  4 * Math.sin(t * Math.PI * 2 * 1.25);    // ±4° in Z
      return { tX, tY, tZ };
    }

    let lastTimestamp = 0;

    function tick(timestamp: number) {
      raf = requestAnimationFrame(tick);
      const dt = lastTimestamp ? (timestamp - lastTimestamp) / 1000 : 0;
      lastTimestamp = timestamp;

      if (dragging) {
        // While dragging: apply accumulated velocity directly, no auto-drift.
        rotX += velX;
        rotY += velY;
        rotX = Math.max(-85, Math.min(85, rotX));
        // Damp velocity each frame so micro-jitter doesn't stack.
        velX *= 0.6;
        velY *= 0.6;
        el.style.transform =
          `rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg) rotateZ(-2deg)`;
        return;
      }

      // Not dragging: decelerate and blend toward auto-drift.
      const speed = Math.abs(velX) + Math.abs(velY);

      if (speed > 0.02) {
        // ── Inertia phase: decelerate with smooth friction ──────────────────
        velX *= 0.88;
        velY *= 0.88;
        rotX += velX;
        rotY += velY;
        rotX = Math.max(-85, Math.min(85, rotX));
        // Sync the auto-drift phase so it picks up from the current angle
        // when inertia ends — prevents a snap.
        const { tX, tY } = autoRotation(autoT);
        const dX = rotX - tX;
        const dY = rotY - tY;
        // Nudge autoT toward where we are (gradient descent on phase).
        autoT -= (dX * 0.0002 + dY * 0.0001);
        autoT += AUTO_SPEED * dt;
        el.style.transform =
          `rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg) rotateZ(-2deg)`;
      } else {
        // ── Auto-drift phase: smooth oscillation, lerp toward it ──────────
        autoT += AUTO_SPEED * dt;
        const { tX, tY, tZ } = autoRotation(autoT);
        // Lerp the current rotation toward the target auto pose.
        const lerpFactor = 1 - Math.pow(0.02, dt); // frame-rate independent
        rotX += (tX - rotX) * lerpFactor;
        rotY += (tY - rotY) * lerpFactor;
        el.style.transform =
          `rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg) rotateZ(${tZ.toFixed(3)}deg)`;
        velX = 0;
        velY = 0;
      }
    }

    raf = requestAnimationFrame(tick);

    // ── Pointer handlers ────────────────────────────────────────────────────
    function onPointerDown(e: PointerEvent) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velX = 0;
      velY = 0;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
    }

    function onPointerMove(e: PointerEvent) {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      // Inverted velocity so drag direction pulls the cube opposite to pointer motion (sensitivity ~0.18 deg/px).
      velY -= dx * 0.18;
      velX -= dy * 0.18;
    }

    function onPointerUp(e: PointerEvent) {
      if (!dragging) return;
      dragging = false;
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = 'grab';
    }

    el.style.cursor = 'grab';
    el.style.touchAction = 'none';
    el.style.userSelect = 'none';

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      style={{
        position: 'relative',
        width: size,
        height: size,
        maxWidth: '100%',
        background: 'transparent',
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="cube-drift"
        style={{ position: 'relative', width: STAGE, height: STAGE, perspective: 1800 }}
      >
        <div
          ref={tumbleRef}
          className="cube-tumble"
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: STAGE / 2,
              top: STAGE / 2,
              width: 0,
              height: 0,
              transformStyle: 'preserve-3d',
            }}
          >
            {cubies.map((c, i) => (
              <div
                key={i}
                ref={(el) => { nodes.current[i] = el; }}
                style={{
                  position: 'absolute',
                  left: -HALF,
                  top: -HALF,
                  width: CUBIE,
                  height: CUBIE,
                  transformStyle: 'preserve-3d',
                  transform: c.tf,
                }}
              >
                {FACES.map((f) => (
                  <div
                    key={f}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transform: FACE_TRANSFORM[f],
                      background: c.faces[f],
                      borderRadius: 14,
                      backfaceVisibility: 'hidden',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
