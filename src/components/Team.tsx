'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { Bezel, Icon, SectionHeading } from './ui';
import { CORES, type Member } from '@/lib/content';

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
    <Bezel>
      <article
        style={{ height: '100%', padding: 20, display: 'flex', flexDirection: 'column', gap: 15 }}
      >
        {/* Portrait placeholder — real photography to be dropped in later. */}
        <div className="ph" aria-hidden style={{ aspectRatio: '1 / 1', borderRadius: 6 }}>
          <span style={{ fontFamily: 'var(--display)', fontSize: 15, color: 'var(--muted)' }}>
            {initials(member.name)}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 15.5,
              fontWeight: 600,
              lineHeight: 1.35,
              color: 'var(--cream)',
            }}
          >
            {member.name}
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
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
    </Bezel>
  );
}

export default function Team({ showHeading = true }: { showHeading?: boolean }) {
  const [year, setYear] = useState(CORES[0].year);
  const core = CORES.find((c) => c.year === year) ?? CORES[0];

  const groupStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(206px, 100%), 1fr))',
    gap: 16,
    listStyle: 'none',
    margin: '18px 0 0',
    padding: 0,
  };

  const groupLabel: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--dim)',
  };

  return (
    <section id="team" className="section">
      <div className="shell">
        {showHeading ? (
          <SectionHeading
            eyebrow="Faculty and student core"
            title={
              <>
                THE PEOPLE
                <br />
                BEHIND <span className="mark">SIGAI</span>
              </>
            }
            lede="Faculty coordinators and the student core committee, across every year the chapter has published."
          />
        ) : null}

        <Reveal delay={80}>
          {/* Toggle buttons, not a tablist: there are no tabpanels to own. */}
          <div
            role="group"
            aria-label="Select core committee year"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 26,
              marginTop: 44,
              borderBottom: '1px solid var(--line)',
            }}
          >
            {CORES.map((c) => (
              <button
                key={c.year}
                type="button"
                className="tab"
                aria-pressed={c.year === year}
                onClick={() => setYear(c.year)}
              >
                Core {c.year}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 style={{ ...groupLabel, margin: '48px 0 0' }}>Faculty Coordinators</h3>
        </Reveal>

        <ul key={`faculty-${year}`} style={groupStyle}>
          {core.faculty.map((m, i) => (
            <Reveal as="li" key={`${year}-${m.name}`} delay={i * 60}>
              <MemberCard member={m} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 style={{ ...groupLabel, margin: '56px 0 0' }}>
            Core Committee · {core.committee.length} members
          </h3>
        </Reveal>

        <ul key={`core-${year}`} style={groupStyle}>
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
