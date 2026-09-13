'use client';

import * as React from 'react';
import { AREAS, type Area } from '@/lib/content';

/**
 * Focus areas 3D flip card showcase from index_8.html.
 * Clicking a card flips it over in 3D to reveal its description.
 */
export default function AreasShowcase() {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  return (
    <ul className="flipgrid" id="flipgrid">
      {AREAS.map((a: Area, i: number) => {
        const isFlipped = flippedIndex === i;
        const len =
          a.notation.length > 8 ? 'long' : a.notation.length > 4 ? 'medium' : 'short';

        return (
          <li
            key={a.term}
            className="popup"
            style={{
              ['--popup-delay' as string]: `${i * 70}ms`,
              ['--popup-angle' as string]: '20deg',
            }}
          >
            <button
              type="button"
              className="flip"
              data-tone={a.tone || 'blue'}
              data-on={isFlipped ? 'true' : 'false'}
              aria-pressed={isFlipped}
              aria-label={`${a.term}. ${a.blurb}`}
              onClick={() => toggleFlip(i)}
            >
              <span className="flip__inner">
                <span className="flip__face flip__front">
                  <span className="flip__notation" data-len={len}>
                    {a.notation}
                  </span>
                  <span className="flip__term">{a.term}</span>
                  <span className="flip__hint">
                    Turn over
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8Z" />
                    </svg>
                  </span>
                </span>
                <span
                  className="flip__face flip__back"
                  aria-hidden={!isFlipped}
                >
                  <span className="flip__blurb">{a.blurb}</span>
                  <span className="flip__term flip__term--back">{a.term}</span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
