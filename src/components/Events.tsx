'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import Reveal from './Reveal';
import { Bezel, Placeholder, SectionHeading } from './ui';
import { EVENTS, EVENT_YEARS, type SigEvent } from '@/lib/content';

export default function Events({ showHeading = true }: { showHeading?: boolean }) {
  const groups = useMemo(() => {
    const byYear = new Map<string, SigEvent[]>();

    for (const event of EVENTS) {
      const list = byYear.get(event.year) ?? [];
      list.push(event);
      byYear.set(event.year, list);
    }

    return EVENT_YEARS
      .map((year) => ({
        year,
        events: byYear.get(year) ?? [],
      }))
      .filter((group) => group.events.length > 0);
  }, []);

  return (
    <section id="events" className="section">
      <div className="shell">

        {showHeading && (
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
        )}

        {/* Upcoming */}
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

                    <p
                      style={{
                        margin: '6px 0 0',
                        fontSize: 15,
                        color: 'var(--cream)',
                      }}
                    >
                      No upcoming events announced yet.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="link-underline"
                  style={{ fontSize: 14 }}
                >
                  Follow SIGAI for announcements
                </Link>
              </div>
            </Bezel>
          </div>
        </Reveal>

        {/* EVENT ARCHIVE */}
        {groups.map((group, groupIndex) => (
          <Reveal
            key={group.year}
            delay={120 + groupIndex * 40}
          >
            <div className="events__year">

              {/* YEAR HEADER */}
              <div className="events__year-head">
                <h3 className="events__year-title">
                  {group.year}
                </h3>

                <div
                  className="events__year-rule"
                  aria-hidden
                />

                <span className="events__count">
                  {group.events.length}{' '}
                  {group.events.length === 1 ? 'event' : 'events'}
                </span>
              </div>

              {/* ONE CARD PER ROW */}
              <div className="events__archive-list">

                {group.events.map((event, index) => (
                  <Reveal
                    key={event.id}
                    delay={index * 70}
                  >
                    <Link
                      href={`/events/${event.id}`}
                      className="events__archive-link"
                    >
                      <Bezel>
                        <article className="events__archive-card">

                          {/* IMAGE */}
                          <div className="events__archive-media">

                            {event.image ? (
                              <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                sizes="(max-width: 700px) 100vw, 1100px"
                                style={{
                                  objectFit: 'cover',
                                }}
                              />
                            ) : (
                              <Placeholder
                                label={`${event.title} — image to be added`}
                                ratio="16 / 9"
                                radius={0}
                              />
                            )}

                            <div className="events__archive-overlay" />

                            <span className="events__card-year">
                              {event.year}
                            </span>

                            <span className="events__card-index">
                              {event.index}
                            </span>
                          </div>

                          {/* CONTENT */}
                          <div className="events__archive-content">

                            <div>
                              <span className="events__archive-series">
                                {event.series}
                              </span>

                              <h3 className="events__archive-title">
                                {event.title}
                              </h3>

                              <p className="events__archive-description">
                                {event.description}
                              </p>
                            </div>

                            <div className="events__archive-footer">
                              <span>
                                {event.year}
                              </span>

                              <span className="events__explore">
                                EXPLORE
                                <span aria-hidden> →</span>
                              </span>
                            </div>

                          </div>

                        </article>
                      </Bezel>
                    </Link>
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