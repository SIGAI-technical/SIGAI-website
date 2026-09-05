'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { Icon, SectionHeading } from './ui';
import { CORES, type Member } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Prof\.)\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

function MemberCard({ member }: { member: Member }) {
  const links = [
    member.linkedin ? { name: 'linkedin' as const, href: member.linkedin, label: 'LinkedIn' } : null,
    member.instagram
      ? { name: 'instagram' as const, href: member.instagram, label: 'Instagram' }
      : null,
  ].filter((l): l is NonNullable<typeof l> => l !== null);

  return (
    <article
      className="panel panel--sheen"
      style={{ height: '100%', padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}
    >
      {/* Portrait placeholder — real photography to be dropped in later. */}
      <div
        className="ph"
        aria-hidden
        style={{ aspectRatio: '1 / 1', borderRadius: 8, fontSize: 22, letterSpacing: '1px' }}
      >
        <span style={{ fontFamily: 'var(--display)', fontSize: 15, color: PALETTE.muted }}>
          {initials(member.name)}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
        <h4
          style={{
            margin: 0,
            fontSize: 15.5,
            fontWeight: 600,
            lineHeight: 1.35,
            color: PALETTE.cream,
          }}
        >
          {member.name}
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: PALETTE.blue,
          }}
        >
          {member.role}
        </p>
      </div>

      {links.length ? (
        <div style={{ display: 'flex', gap: 8 }}>
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on ${l.label}`}
            >
              <Icon name={l.name} size={14} />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Team() {
  const [year, setYear] = useState(CORES[0].year);
  const core = CORES.find((c) => c.year === year) ?? CORES[0];

  return (
    <section id="team" className="section section--hairline">
      <div className="shell">
        <SectionHeading
          eyebrow="05 — Team"
          title={
            <>
              THE PEOPLE
              <br />
              BEHIND <span style={{ color: PALETTE.blue }}>SIGAI</span>
            </>
          }
          lede="Faculty coordinators and the student core committee, across every year the chapter has published."
        />

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Select core committee year"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 40 }}
          >
            {CORES.map((c) => {
              const on = c.year === year;
              return (
                <button
                  key={c.year}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setYear(c.year)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: 6,
                    border: `1px solid ${on ? PALETTE.blue : PALETTE.line}`,
                    background: on ? PALETTE.blue : 'transparent',
                    color: on ? PALETTE.cream : PALETTE.muted,
                    fontFamily: 'var(--display)',
                    fontSize: 11,
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
                  }}
                >
                  CORE {c.year}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3
            style={{
              margin: '44px 0 0',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '2.6px',
              textTransform: 'uppercase',
              color: PALETTE.dim,
            }}
          >
            Faculty Coordinators
          </h3>
        </Reveal>

        <ul
          key={`faculty-${year}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(210px, 100%), 1fr))',
            gap: 16,
            listStyle: 'none',
            margin: '18px 0 0',
            padding: 0,
          }}
        >
          {core.faculty.map((m, i) => (
            <Reveal as="li" key={`${year}-${m.name}`} delay={i * 60}>
              <MemberCard member={m} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3
            style={{
              margin: '52px 0 0',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '2.6px',
              textTransform: 'uppercase',
              color: PALETTE.dim,
            }}
          >
            Core Committee · {core.committee.length} members
          </h3>
        </Reveal>

        <ul
          key={`core-${year}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(210px, 100%), 1fr))',
            gap: 16,
            listStyle: 'none',
            margin: '18px 0 0',
            padding: 0,
          }}
        >
          {core.committee.map((m, i) => (
            <Reveal as="li" key={`${year}-${m.name}`} delay={Math.min(i, 7) * 55}>
              <MemberCard member={m} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
