'use client';

import * as React from 'react';
import Link from 'next/link';
import CubeStage from './CubeStage';

/**
 * Hero component directly matching index_8.html:
 * Features the headline, lede, action buttons, animated count-up facts,
 * and the interactive 3D Glitch Cube stage with drag hint.
 */
export default function Hero({ logoSrc }: { logoSrc: string }) {
  return (
    <div className="band band--hero">
      <section className="hero" id="home">
        <div className="shell hero__grid">
          <div className="hero__copy">

            <div
              className="popup"
              style={{
                ['--popup-delay' as string]: '60ms',
                ['--popup-angle' as string]: '12deg',
              }}
            >
              <p className="hero-welcome">
                Welcome to <span>DJS ACM SIGAI</span>
              </p>
            </div>

            <div
              className="popup"
              style={{
                ['--popup-delay' as string]: '90ms',
                ['--popup-angle' as string]: '18deg',
              }}
            >
              <h1 className="hero-title">
                If your mind can think,
                <br />
                <span className="mark">so can mine.</span>
              </h1>
            </div>

            <div
              className="popup"
              style={{
                ['--popup-delay' as string]: '140ms',
                ['--popup-angle' as string]: '10deg',
              }}
            >
              <div className="rule" aria-hidden="true" />
            </div>

            <div
              className="popup"
              style={{
                ['--popup-delay' as string]: '170ms',
                ['--popup-angle' as string]: '12deg',
              }}
            >
              <p className="hero-lede">
                <strong>DJS ACM SIGAI</strong> is the Special Interest Group on Artificial
                Intelligence — the official student chapter of Dwarkadas J. Sanghvi College of
                Engineering, affiliated with the Association for Computing Machinery (ACM). We run
                seminars, workshops and events that take students from first principles through to
                the work happening now.
              </p>
            </div>

            <div
              className="popup"
              style={{
                ['--popup-delay' as string]: '210ms',
                ['--popup-angle' as string]: '14deg',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <span className="magnetic">
                  <Link className="btn btn--primary" href="/events">
                    Explore our events
                    <span className="btn__icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                      </svg>
                    </span>
                  </Link>
                </span>
                <span className="magnetic">
                  <Link className="btn btn--ghost" href="/about">
                    About the chapter
                    <span className="btn__icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                      </svg>
                    </span>
                  </Link>
                </span>
              </div>
            </div>


          </div>

          <div
            className="popup"
            style={{
              ['--popup-delay' as string]: '120ms',
              ['--popup-angle' as string]: '20deg',
              minWidth: 0,
            }}
          >
            <div className="cube-pad">
              <CubeStage logoSrc={logoSrc} />
              <span className="cube-hint" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 3a1.5 1.5 0 0 1 3 0v6h.5V4.5a1.5 1.5 0 0 1 3 0V9h.5V6.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-2.5a1.5 1.5 0 0 1 3 0V13h.5V3Z" />
                </svg>
                Drag to spin it
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
