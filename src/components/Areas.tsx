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

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(272px, 100%), 1fr))',
            gap: 18,
            listStyle: 'none',
            margin: '52px 0 0',
            padding: 0,
          }}
        >
          {AREAS.map((area, i) => (
            <Reveal as="li" key={area.term} delay={i * 70}>
              <Bezel>
                <article
                  style={{
                    height: '100%',
                    padding: '28px 26px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                  }}
                >
                  <span className="chip chip--gold" aria-hidden>
                    {area.notation}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 19,
                      fontWeight: 600,
                      letterSpacing: '-0.2px',
                      color: 'var(--cream)',
                    }}
                  >
                    {area.term}
                  </h3>
                  <p
                    style={{
                      margin: 0,
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
          ))}
        </ul>
      </div>
    </section>
  );
}
