'use client';

import { useEffect, useMemo, useRef } from 'react';
import {
  buildCubies,
  dotLayer,
  restTransform,
  rotatePos,
  CUBIE,
  HALF,
  PALETTE,
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
  /** Edge of the square frame. The stage itself is fixed; the hero scales it. */
  size?: number;
  logoSrc: string;
  /** One full tumble of the whole cube. */
  tumbleSeconds?: number;
  /** Duration of a single layer turn. */
  moveMs?: number;
  solving?: boolean;
}

export default function GlitchCube({
  size = STAGE,
  logoSrc,
  tumbleSeconds = 34,
  moveMs = 620,
  solving = true,
}: GlitchCubeProps) {
  const cubies = useMemo(() => buildCubies(logoSrc), [logoSrc]);
  const dots = useMemo(
    () => ({ back: dotLayer(2024, 5, 26, 3.5), front: dotLayer(8891, 3, 14, 4.5) }),
    [],
  );

  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!solving) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // The cubies are mutated in place across turns; start from solved every mount.
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
      // Bail without re-arming, so the loop genuinely stops off-screen.
      if (!visible || document.hidden) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
      const t = now - phaseStart;

      if (!turning) {
        // Longer pauses at the start and at the halfway point, where the cube
        // sits scrambled, so both resting states get a beat to be seen.
        const wait =
          index === 0 ? holdMs * 2 : index === SEQUENCE.length / 2 ? holdMs : 120;
        if (t >= wait) {
          turning = true;
          phaseStart = now;
        }
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
        // Bake the finished quarter turn into the cubie's resting transform.
        cubies.forEach((c) => {
          if (c.pos[m.ax] !== m.layer) return;
          c.pos = rotatePos(c.pos, m.axis, 90 * m.dir);
          c.base = `rotate${m.axis}(${90 * m.dir}deg) ${c.base}`;
          c.tf = c.base;
        });
        turning = false;
        phaseStart = now;
        index = (index + 1) % SEQUENCE.length;

        // Back at solved: collapse the accumulated rotate chain so the
        // transform strings don't grow without bound.
        if (index === 0) {
          cubies.forEach((c, i) => {
            c.base = c.tf = restTransform(c.pos);
            const el = nodes.current[i];
            if (el) el.style.transform = c.tf;
          });
        }
      }
    };

    // Only run the solve loop while the cube is actually on screen: it drives
    // 26 cubies (156 faces) of 3D transforms and is wasted work off-screen,
    // which matters most on phones.
    let visible = true;
    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { rootMargin: '120px' },
    );
    if (frameRef.current) io.observe(frameRef.current);

    // Background tabs shouldn't animate either.
    const onVisibility = () => {
      if (!document.hidden && visible) start();
      else stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    start();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [cubies, moveMs, solving]);

  return (
    <div
      ref={frameRef}
      style={{
        position: 'relative',
        width: size,
        height: size,
        maxWidth: '100%',
        background: PALETTE.ink,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: dots.back, opacity: 0.95 }} />

      <div
        className="cube-drift"
        style={{ position: 'relative', width: STAGE, height: STAGE, perspective: 1800 }}
      >
        <div
          className="cube-tumble"
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            animationDuration: `${tumbleSeconds}s`,
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
                ref={(el) => {
                  nodes.current[i] = el;
                }}
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

      <div
        style={{ position: 'absolute', inset: 0, background: dots.front, pointerEvents: 'none' }}
      />
    </div>
  );
}
