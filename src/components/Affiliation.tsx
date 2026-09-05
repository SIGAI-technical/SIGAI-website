import Reveal from './Reveal';
import { Bezel, Placeholder } from './ui';
import { ORG } from '@/lib/content';

const BODIES = [
  {
    tag: 'Institution',
    name: ORG.college,
    body: `SIGAI was founded by ${ORG.college} students in the ${ORG.department} department, and operates as the college's ${ORG.chapterDescriptor}.`,
  },
  {
    tag: 'Parent body',
    name: ORG.parentBody,
    body: 'ACM is a U.S.-based non-profit dedicated to education in the computing field. SIGAI is affiliated with it as a special interest group on Artificial Intelligence.',
  },
];

export default function Affiliation() {
  return (
    <section className="section" aria-labelledby="affiliation-title">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">
            Who we answer to
          </span>
          <h2 id="affiliation-title" className="section-title">
            DJSCE <span className="mark">×</span> ACM
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 20,
            marginTop: 44,
          }}
        >
          {BODIES.map((b, i) => (
            <Reveal key={b.tag} delay={i * 90}>
              <Bezel>
                <article
                  style={{
                    height: '100%',
                    padding: 28,
                    display: 'flex',
                    gap: 20,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ width: 76, flexShrink: 0 }}>
                    <Placeholder label="Logo" ratio="1 / 1" radius={14} />
                  </div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <span className="chip chip--gold">{b.tag}</span>
                    <h3
                      style={{
                        margin: '14px 0 0',
                        fontSize: 17,
                        fontWeight: 600,
                        lineHeight: 1.45,
                        color: 'var(--cream)',
                      }}
                    >
                      {b.name}
                    </h3>
                    <p
                      style={{
                        margin: '10px 0 0',
                        fontSize: 14.5,
                        lineHeight: 1.7,
                        color: 'var(--muted)',
                        textWrap: 'pretty',
                      }}
                    >
                      {b.body}
                    </p>
                  </div>
                </article>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
