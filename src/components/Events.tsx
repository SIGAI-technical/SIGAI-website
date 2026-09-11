'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import Reveal from './Reveal';
import { Bezel, Icon, Placeholder, SectionHeading } from './ui';
import { EVENTS, EVENT_YEARS, type SigEvent } from '@/lib/content';
import Link from 'next/link';

export default function Events({ showHeading = true }: { showHeading?: boolean }) {
  // Grouped newest year first, matching the source site's archive order.
  const groups = useMemo(() => {
    const byYear = new Map<string, SigEvent[]>();
    for (const e of EVENTS) {
      const list = byYear.get(e.year) ?? [];
      list.push(e);
      byYear.set(e.year, list);
    }
    return EVENT_YEARS.map((year) => ({ year, events: byYear.get(year) ?? [] })).filter(
      (g) => g.events.length > 0,
    );
  }, []);

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

        {/*
          Grouped by academic year, most recent first — each year gets its own
          heading + divider and a two-up grid of cards, mirroring the archive
          page on the original site rather than a single filterable grid.
        */}
        {groups.map((group, gi) => (
          <Reveal key={group.year} delay={120 + gi * 40}>
            <div className="events__year">
              <div className="events__year-head">
                <h3 className="events__year-title">{group.year}</h3>
                <div className="events__year-rule" aria-hidden />
                <span className="events__count">
                  {group.events.length} {group.events.length === 1 ? 'event' : 'events'}
                </span>
              </div>

              <div className="events__year-grid">
                {group.events.map((e, i) => (
                  <Reveal key={e.id} delay={(i % 2) * 60}>
                    <Bezel>
                      <article style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div className="events__card-media">
                          {e.image ? (
                            <Image
                              src={e.image}
                              alt={e.title}
                              fill
                              sizes="(max-width: 700px) 100vw, 50vw"
                              style={{ objectFit: 'cover' }}
                            />
                          ) : (
                            <Placeholder
                              label={`${e.title} — image to be added`}
                              ratio="16 / 10"
                              radius={0}
                            />
                          )}
                          <span className="events__card-year">{e.year}</span>
                          <span className="events__card-index">{e.index}</span>
                        </div>

                        <div
                          style={{
                            padding: '24px 24px 26px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                            flex: 1,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10.5,
                              fontWeight: 600,
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              color: 'var(--muted)',
                            }}
                          >
                            {e.series}
                          </span>

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
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                              overflow: 'hidden',
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
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
