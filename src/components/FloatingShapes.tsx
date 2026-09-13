import * as React from 'react';

interface Shape {
  x: number;
  y: number;
  s: number;
  d: number;
  tone: 'blue' | 'amber' | 'teal';
  spin: number;
  rx: number;
  ry: number;
}

const SHAPES: Shape[] = [
  { x: -2, y: 10, s: 46, d: 0.85, tone: 'blue', spin: 24, rx: -18, ry: 32 },
  { x: 100, y: 6, s: 30, d: 0.55, tone: 'amber', spin: 38, rx: 24, ry: -14 },
  { x: 97, y: 30, s: 58, d: 1, tone: 'blue', spin: 30, rx: -26, ry: 18 },
  { x: -1, y: 40, s: 26, d: 0.4, tone: 'teal', spin: 44, rx: 12, ry: -28 },
  { x: 101, y: 58, s: 38, d: 0.72, tone: 'amber', spin: 27, rx: -20, ry: 26 },
  { x: -3, y: 68, s: 52, d: 0.92, tone: 'teal', spin: 33, rx: 22, ry: -20 },
  { x: 99, y: 86, s: 32, d: 0.5, tone: 'blue', spin: 41, rx: -14, ry: 30 },
  { x: 0, y: 92, s: 40, d: 0.66, tone: 'amber', spin: 29, rx: 18, ry: -24 },
];

const FACES = ['fx', 'fy', 'fz', 'fxb', 'fyb', 'fzb'] as const;

/**
 * Floating 3D cubes drifting gently down the sides of the viewport.
 * Rendered using pure CSS 3D transforms for maximum efficiency.
 */
export default function FloatingShapes() {
  return (
    <div id="shapes" className="shapes" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className={`shape shape--${s.tone}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            ['--s' as string]: `${s.s}px`,
            ['--d' as string]: s.d,
            ['--spin' as string]: `${s.spin}s`,
            ['--rx' as string]: `${s.rx}deg`,
            ['--ry' as string]: `${s.ry}deg`,
            ['--offset' as string]: `-${i * 1.7}s`,
          }}
        >
          <div className="shape__box">
            {FACES.map((face) => (
              <span key={face} className={`shape__face shape__face--${face}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
