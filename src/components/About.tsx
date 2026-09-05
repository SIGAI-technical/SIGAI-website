import Reveal from './Reveal';
import { Placeholder, SectionHeading } from './ui';
import { ABOUT, ORG } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

/** Facts drawn straight from the source site's About copy. */
const FACTS = [
  { k: 'Institution', v: ORG.college },
  { k: 'Department', v: ORG.department },
  { k: 'Affiliation', v: ORG.parentBody },
];

export default function About() {
  return (
    <section id="about" className="section section--hairline">
      <div className="shell">
        <SectionHeading
          eyebrow="01 — About SIGAI"
          title={
            <>
              A STUDENT CHAPTER
              <br />
              BUILT AROUND <span style={{ color: PALETTE.blue }}>AI</span>
            </>
          }
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(32px, 4vw, 56px)',
            alignItems: 'start',
            marginTop: 48,
          }}
        >
          <div>
            <Reveal>
              <p
                style={{
                  margin: 0,
                  fontSize: 'clamp(15px, 1.2vw, 17px)',
                  lineHeight: 1.85,
                  color: PALETTE.muted,
                  textWrap: 'pretty',
                }}
              >
                {ABOUT.body}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <dl
                style={{
                  display: 'grid',
                  gap: 0,
                  margin: '34px 0 0',
                  borderTop: `1px solid ${PALETTE.line}`,
                }}
              >
                {FACTS.map(({ k, v }) => (
                  <div
                    key={k}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(110px, 0.4fr) 1fr',
                      gap: 16,
                      padding: '16px 0',
                      borderBottom: `1px solid ${PALETTE.line}`,
                    }}
                  >
                    <dt
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '2.2px',
                        textTransform: 'uppercase',
                        color: PALETTE.dim,
                        paddingTop: 3,
                      }}
                    >
                      {k}
                    </dt>
                    <dd style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: PALETTE.cream }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Placeholder label="About visual — image to be added" ratio="4 / 3" radius={10} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
