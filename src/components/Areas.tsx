import Reveal from './Reveal';
import { Bezel, SectionHeading } from './ui';
import { AREAS } from '@/lib/content';

export default function Areas({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="areas" className="section">
      <div className="shell">
        {showHeading ? (
          <SectionHeading
            eyebrow="AI · ML · Deep Learning"
            title={
              <>
                WHAT WE&apos;RE
                <br />
                <span className="mark">EXPLORING</span>
              </>
            }
            lede="The ground SIGAI covers, in the chapter's own terms — the fields named in its mission and vision, and the concepts its events keep returning to."
          />
        ) : null}

        <ul className="areas__grid">
          {AREAS.map((area, i) => {
            // The flagship term leads at double width and a larger notation;
            // the rest fall into a plainer, denser row — not six equal tiles.
            const lead = i === 0;
            return (
              <Reveal
                as="li"
                key={area.term}
                delay={i * 70}
                className={lead ? 'areas__item areas__item--lead' : 'areas__item'}
              >
                <Bezel>
                  <article
                    style={{
                      height: '100%',
                      padding: lead ? 'clamp(30px, 4vw, 44px)' : '24px 22px 26px',
                      display: 'flex',
                      flexDirection: lead ? 'row' : 'column',
                      alignItems: lead ? 'flex-end' : 'stretch',
                      justifyContent: lead ? 'space-between' : 'flex-start',
                      flexWrap: 'wrap',
                      gap: lead ? 24 : 10,
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: lead ? 10 : 8 }}>
                      <span
                        aria-hidden
                        style={{
                          fontFamily: 'var(--display)',
                          fontSize: lead ? 13 : 10,
                          letterSpacing: '0.08em',
                          color: 'var(--dim)',
                        }}
                      >
                        {area.notation}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: lead ? 'clamp(22px, 2.6vw, 32px)' : 18,
                          fontWeight: 600,
                          letterSpacing: '-0.3px',
                          color: 'var(--cream)',
                        }}
                      >
                        {area.term}
                      </h3>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        maxWidth: lead ? '46ch' : 'none',
                        fontSize: 14.5,
                        lineHeight: 1.7,
                        color: 'var(--muted)',
                        textWrap: 'pretty',
                      }}
                    >
                      {area.blurb}
                    </p>
                  </article>
                </Bezel>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
