'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import GlitchCube from './GlitchCube';
import { STAGE } from '@/lib/cube';

/**
 * The cube is authored at a fixed 660px square. Rather than reflow it, we scale
 * the whole stage down to whatever width the column gives us and collapse the
 * wrapper's height to match.
 */
export default function CubeStage({ logoSrc }: { logoSrc: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const measure = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const next = Math.min(1, el.clientWidth / STAGE);
    setScale((prev) => (Math.abs(next - prev) > 0.002 ? next : prev));
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, [measure]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        minWidth: 0,
        width: '100%',
        maxWidth: STAGE,
        margin: '0 auto',
        height: Math.round(STAGE * scale),
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: STAGE,
          height: STAGE,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
        }}
      >
        <GlitchCube size={STAGE} logoSrc={logoSrc} />
      </div>
    </div>
  );
}
