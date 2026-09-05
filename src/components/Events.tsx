'use client';

import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { Icon, Placeholder, SectionHeading } from './ui';
import { EVENTS, EVENT_YEARS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

type Filter = 'all' | (typeof EVENT_YEARS)[number];

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...EVENT_YEARS.map((y) => ({ id: y as Filter, label: y })),
];

export default function Events() {
  const [filter, setFilter] = useState<Filter>('all');

  const shown = useMemo(
    () => (filter === 'all' ? EVENTS : EVENTS.filter((e) => e.year === filter)),
    [filter],
  );

  return (
    <section id="events" className="section section--hairline grid-bg">
      <div className="shell">
        <SectionHeading
          eyebrow="04 — Events"
          title={
            <>
              WHAT SIGAI
              <br />
              HAS <span style={{ color: PALETTE.blue }}>RUN</span>
            </>
          }
          lede={`${EVENTS.length} events across ${EVENT_YEARS.length} academic years — seminars, orientations and campus-wide competitions.`}
        />

        {/* No upcoming events are listed on the source site, so this stays an
            explicit empty slot rather than an invented entry. */}
        <Reveal delay={80}>
          <div
            className="panel"
            style={{
              marginTop: 44,
              padding: '22px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span
                className="status-dot"
                aria-hidden
                style={{ width: 6, height: 6, background: PALETTE.yellow, flexShrink: 0 }}
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: PALETTE.dim,
                  }}
                >
                  Upcoming
                </p>
                <p style={{ margin: '6px 0 0', fontSize: 15, color: PALETTE.cream }}>
                  No upcoming events announced yet.
                </p>
              </div>
            </div>
            <a href="#contact" className="link-underline" style={{ fontSize: 14 }}>
              Follow SIGAI for announcements
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Filter events by academic year"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 40 }}
          >
            {FILTERS.map((f) => {
              const on = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(f.id)}
                  style={{
                    padding: '9px 16px',
                    borderRadius: 6,
                    border: `1px solid ${on ? PALETTE.blue : PALETTE.line}`,
                    background: on ? PALETTE.blue : 'transparent',
                    color: on ? PALETTE.cream : PALETTE.muted,
                    fontFamily: 'inherit',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(310px, 100%), 1fr))',
            gap: 20,
            listStyle: 'none',
            margin: '28px 0 0',
            padding: 0,
          }}
        >
          {shown.map((e, i) => (
            <Reveal as="li" key={e.id} delay={Math.min(i, 5) * 70}>
              <article
                className="panel panel--sheen"
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Placeholder label={`${e.title} — image to be added`} ratio="16 / 10" radius={0} />

                <div
                  style={{
                    padding: '22px 22px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <span className="chip">{e.year}</span>
                    <span className="chip">{e.series}</span>
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--display)',
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: PALETTE.cream,
                    }}
                  >
                    {e.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: PALETTE.muted,
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
                      letterSpacing: '2.2px',
                      textTransform: 'uppercase',
                      color: PALETTE.dim,
                    }}
                  >
                    {/* No dates are published for these events. */}
                    Academic year {e.year}
                    <Icon name="arrow" size={12} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
