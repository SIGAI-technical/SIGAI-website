import Reveal from './Reveal';
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

        {/* Two hairline-divided rows, not two card boxes — the facing page
            already makes this point with cards, this one doesn't need to. */}
        <dl
          style={{
            margin: '44px 0 0',
            padding: 0,
            borderTop: '1px solid var(--line)',
          }}
        >
          {BODIES.map((b, i) => (
            <Reveal key={b.tag} delay={i * 90} as="div">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 220px) 1fr',
                  gap: 'clamp(16px, 3vw, 40px)',
                  padding: 'clamp(22px, 3vw, 30px) 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <dt style={{ margin: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 9.5,
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {b.tag}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      marginTop: 8,
                      fontSize: 17,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: 'var(--cream)',
                    }}
                  >
                    {b.name}
                  </span>
                </dt>
                <dd
                  style={{
                    margin: 0,
                    maxWidth: '60ch',
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: 'var(--muted)',
                    textWrap: 'pretty',
                  }}
                >
                  {b.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
