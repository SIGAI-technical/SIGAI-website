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
    <section
      id="events"
      className="section"
      style={!showHeading ? { paddingTop: 0 } : undefined}
    >
      <div className="shell">

        {showHeading && (
          <SectionHeading
            eyebrow="Four years of events"
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

        {/* EVENT ARCHIVE */}
        {groups.map((group, groupIndex) => (
          <Reveal
            key={group.year}
            delay={120 + groupIndex * 40}
          >
            <div
              className="events__year"
              style={groupIndex === 0 ? { marginTop: showHeading ? 36 : 8 } : undefined}
            >

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