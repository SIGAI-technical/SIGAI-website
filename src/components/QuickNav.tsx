import * as React from 'react';
import Link from 'next/link';

/**
 * QuickNav index component from index_8.html:
 * Numbered editorial rows with hairline rules, figures in the margin,
 * and hover animations.
 */
export default function QuickNav() {
  return (
    <section className="quicknav" aria-label="Explore SIGAI">
      <div className="shell">
        <div className="index__head popup">
          <span className="eyebrow">Index</span>
          <p className="index__note">Three places to go from here.</p>
        </div>

        <nav className="index" aria-label="Sections">
          <Link
            className="index__row popup"
            href="/events"
            data-tone="gold"
            style={{
              ['--popup-delay' as string]: '0ms',
              ['--popup-angle' as string]: '14deg',
            }}
          >
            <span className="index__no" aria-hidden="true">
              01
            </span>
            <span className="index__main">
              <span className="index__title">Everything we have run</span>
              <span className="index__desc">
                Clockout, Genesis and Synergy — eight events across three academic years, from
                orientation seminars through to a campus-wide hunt.
              </span>
              <span className="index__cta">
                Browse the archive{' '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                </svg>
              </span>
            </span>
            <span className="index__fig" aria-hidden="true">
              <b data-count="8">8</b>
              <span>Events</span>
            </span>
          </Link>

          <Link
            className="index__row popup"
            href="/team"
            data-tone="blue"
            style={{
              ['--popup-delay' as string]: '80ms',
              ['--popup-angle' as string]: '14deg',
            }}
          >
            <span className="index__no" aria-hidden="true">
              02
            </span>
            <span className="index__main">
              <span className="index__title">The people behind it</span>
              <span className="index__desc">
                Faculty coordinators and the student core, published year by year since 2023.
              </span>
              <span className="index__cta">
                Meet the team{' '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                </svg>
              </span>
            </span>
            <span className="index__fig" aria-hidden="true">
              <b data-count="22">22</b>
              <span>On the core</span>
            </span>
          </Link>

          <Link
            className="index__row popup"
            href="/about"
            data-tone="teal"
            style={{
              ['--popup-delay' as string]: '160ms',
              ['--popup-angle' as string]: '14deg',
            }}
          >
            <span className="index__no" aria-hidden="true">
              03
            </span>
            <span className="index__main">
              <span className="index__title">Who we are</span>
              <span className="index__desc">
                Founded by DJSCE students — explore our story, vision, and how we foster community
                around artificial intelligence.
              </span>
              <span className="index__cta">
                Read our story{' '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                </svg>
              </span>
            </span>
            <span className="index__fig" aria-hidden="true">
              <b data-count="2023">2023</b>
              <span>Founded</span>
            </span>
          </Link>
        </nav>
      </div>
    </section>
  );
}
