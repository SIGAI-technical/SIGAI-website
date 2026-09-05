import Reveal from './Reveal';
import { Placeholder } from './ui';
import { ORG } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

const BODIES = [
  {
    tag: 'Institution',
    name: ORG.college,
    body: `SIGAI was founded by ${ORG.college} students in the ${ORG.department} department, and operates as ${ORG.chapterLine.replace(/^DJSCE's /, "the college's ").toLowerCase()}.`,
  },
  {
    tag: 'Parent body',
    name: ORG.parentBody,
    body: 'ACM is a U.S.-based non-profit dedicated to education in the computing field. SIGAI is affiliated with it as a special interest group on Artificial Intelligence.',
  },
];

export default function Affiliation() {
  return (
    <section className="section section--hairline grid-bg" aria-labelledby="affiliation-title">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">06 — Affiliation</span>
          <h2 id="affiliation-title" className="section-title">
            DJSCE <span style={{ color: PALETTE.dim }}>×</span> ACM
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 20,
            marginTop: 40,
          }}
        >
          {BODIES.map((b, i) => (
            <Reveal key={b.tag} delay={i * 90}>
              <article
                className="panel panel--sheen"
                style={{
                  height: '100%',
                  padding: 26,
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ width: 76, flexShrink: 0 }}>
                  <Placeholder label="Logo" ratio="1 / 1" radius={8} />
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <span className="chip">{b.tag}</span>
                  <h3
                    style={{
                      margin: '14px 0 0',
                      fontSize: 17,
                      fontWeight: 600,
                      lineHeight: 1.45,
                      color: PALETTE.cream,
                    }}
                  >
                    {b.name}
                  </h3>
                  <p
                    style={{
                      margin: '10px 0 0',
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: PALETTE.muted,
                      textWrap: 'pretty',
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
