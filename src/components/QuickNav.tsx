'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import Reveal from './Reveal';
import { Bezel, Icon, type IconName } from './ui';
import { CORES, EVENTS, EVENT_YEARS } from '@/lib/content';

interface Card {
  href: string;
  title: string;
  body: string;
  icon: IconName;
  tone?: 'gold' | 'blue';
  /** The lead card spans both columns on wide screens. */
  wide?: boolean;
  stat?: string;
}

const CARDS: Card[] = [
  {
    href: '/events',
    title: 'The event archive',
    body: `Clockout, Genesis and Synergy — ${EVENTS.length} events across ${EVENT_YEARS.length} academic years, from orientation seminars to a campus-wide hunt.`,
    icon: 'calendar',
    tone: 'gold',
    wide: true,
    stat: String(EVENTS.length).padStart(2, '0'),
  },
  {
    href: '/team',
    title: 'The people',
    body: `Faculty coordinators and the student core, across ${CORES.length} published years.`,
    icon: 'users',
    tone: 'blue',
    stat: String(CORES[0].committee.length + CORES[0].faculty.length),
  },
  {
    href: '/domains',
    title: 'What we explore',
    body: 'AI, machine learning, deep learning — and the mechanics underneath.',
    icon: 'arrow',
  },
];

export default function QuickNav() {
  /** Cursor-tracked spotlight on the card border. */
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);

  return (
    <section aria-label="Explore SIGAI" className="quicknav">
      <div className="shell quicknav__grid">
        {CARDS.map((c, i) => (
          <Reveal key={c.href} delay={i * 90} className={c.wide ? 'quicknav__wide' : undefined}>
            <Link href={c.href} style={{ display: 'block', height: '100%' }}>
              <Bezel className="spotlight" onMouseMove={onMove}>
                <div className={`quicknav__card${c.wide ? ' quicknav__card--wide' : ''}`}>
                  <span className={`tile${c.tone ? ` tile--${c.tone}` : ''}`} aria-hidden>
                    <Icon name={c.icon} size={22} />
                  </span>

                  <div style={{ flex: 1 }}>
                    <h3 className="quicknav__title">{c.title}</h3>
                    <p className="quicknav__body">{c.body}</p>
                  </div>

                  {c.stat ? (
                    <span className="quicknav__stat" aria-hidden>
                      {c.stat}
                    </span>
                  ) : null}
                </div>
              </Bezel>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
