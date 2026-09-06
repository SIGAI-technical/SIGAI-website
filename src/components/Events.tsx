'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import ArrangingGrid from './ArrangingGrid';
import Reveal from './Reveal';
import { Bezel, Icon, Placeholder, SectionHeading } from './ui';
import { EVENTS, EVENT_YEARS } from '@/lib/content';

type Filter = 'all' | (typeof EVENT_YEARS)[number];

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...EVENT_YEARS.map((y) => ({ id: y as Filter, label: y })),
];

export default function Events({ showHeading = true }: { showHeading?: boolean }) {
  const [filter, setFilter] = useState<Filter>('all');

  const shown = useMemo(
    () => (filter === 'all' ? EVENTS : EVENTS.filter((e) => e.year === filter)),
    [filter],
  );

  return (
    <section id="events" className="section">
      <div className="shell">
        {showHeading ? (
          <SectionHeading
            eyebrow="Three years of events"
            title={
              <>
                WHAT SIGAI
                <br />
                HAS <span className="mark">RUN</span>
              </>
            }
            lede={`${EVENTS.length} events across ${EVENT_YEARS.length} academic years — seminars, orientations and campus-wide competitions.`}
          />
        ) : null}

        {/* No upcoming events are listed on the source site, so this stays an
            explicit empty slot rather than an invented entry. */}
        <Reveal delay={80}>
          <div style={{ marginTop: showHeading ? 48 : 8 }}>
            <Bezel>
              <div
                style={{
                  padding: '24px 26px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 16,
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span
                    className="live-dot"
                    aria-hidden
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background: 'var(--gold)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--dim)',
                      }}
                    >
                      Upcoming
                    </p>
                    <p style={{ margin: '6px 0 0', fontSize: 15, color: 'var(--cream)' }}>
                      No upcoming events announced yet.
                    </p>
                  </div>
                </div>
                <Link href="/contact" className="link-underline" style={{ fontSize: 14 }}>
                  Follow SIGAI for announcements
                </Link>
              </div>
            </Bezel>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="events__bar">
            {/* Toggle buttons, not a tablist: there are no tabpanels to own. */}
            <div
              role="group"
              aria-label="Filter events by academic year"
              className="events__filters"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className="tab"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <p className="events__count" aria-live="polite">
              {shown.length} {shown.length === 1 ? 'event' : 'events'}
            </p>
          </div>
        </Reveal>

        {/*
          The cards start gathered in a fanned stack and arrange themselves
          into this grid as the section scrolls into view.
        */}
        <ArrangingGrid className="events__grid" resetKey={filter}>
          {shown.map((e) => (
            <Bezel key={e.id}>
              <article style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Placeholder label={`${e.title} — image to be added`} ratio="16 / 10" radius={0} />

                <div
                  style={{
                    padding: '24px 24px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: 10.5,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ color: 'var(--cream)' }}>{e.year}</span>
                    <span style={{ color: 'var(--dim)' }} aria-hidden>
                      /
                    </span>
                    <span style={{ color: 'var(--muted)' }}>{e.series}</span>
                    <span className="events__n" aria-hidden>
                      {e.index}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--display)',
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: 'var(--cream)',
                    }}
                  >
                    {e.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: 'var(--muted)',
                      textWrap: 'pretty',
                      flex: 1,
                    }}
                  >
                    {e.description}
                  </p>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 4,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--dim)',
                    }}
                  >
                    {/* No dates are published for these events. */}
                    Academic year {e.year}
                    <Icon name="arrow" size={12} />
                  </span>
                </div>
              </article>
            </Bezel>
          ))}
        </ArrangingGrid>
      </div>
    </section>
  );
}
