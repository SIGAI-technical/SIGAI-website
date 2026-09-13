'use client';

import { useEffect, useState } from 'react';

/** 3x3 board — the mark is sliced into cubie tiles that flip into place. */
const TILES = Array.from({ length: 9 }, (_, i) => ({
  col: i % 3,
  row: Math.floor(i / 3),
  /** Diagonal stagger reads as an assembling cube rather than a wave. */
  delay: 90 + ((i % 3) + Math.floor(i / 3)) * 85,
}));

const HOLD_MS = 2250;
const EXIT_MS = 780;

/**
 * First-load intro. The overlay is server-rendered but stays `display:none`
 * until the inline script in <head> sets `data-intro` — so the page content is
 * always in the DOM for crawlers, repeat visits never flash, and users who
 * prefer reduced motion never see it at all.
 */
export default function Intro() {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== '1') return;

    // Lock scroll only while the curtain is actually up.
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const toExit = setTimeout(() => setExiting(true), HOLD_MS);
    const toDone = setTimeout(() => {
      delete root.dataset.intro;
      document.body.style.overflow = previous;
    }, HOLD_MS + EXIT_MS);

    return () => {
      clearTimeout(toExit);
      clearTimeout(toDone);
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div className="intro" data-exit={exiting ? '1' : undefined} aria-hidden>
      <div className="intro__stage">
        <div className="intro__board">
          {TILES.map((t, i) => (
            <span
              key={i}
              className="intro__tile"
              style={{
                backgroundPosition: `${t.col * 50}% ${t.row * 50}%`,
                animationDelay: `${t.delay}ms`,
              }}
            />
          ))}
        </div>

        <div className="intro__word">
          <span className="intro__name">SIGAI</span>
          <span className="intro__rule" />
          <span className="intro__sub">DJS ACM</span>
        </div>
      </div>

      <span className="intro__meter" />
    </div>
  );
}
