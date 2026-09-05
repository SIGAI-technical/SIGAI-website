import Reveal from './Reveal';
import { SectionHeading } from './ui';
import { AREAS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

export default function Areas() {
  return (
    <section id="areas" className="section section--hairline grid-bg">
      <div className="shell">
        <SectionHeading
          eyebrow="02 — Areas of interest"
          title={
            <>
              WHAT WE&apos;RE
              <br />
              <span style={{ color: PALETTE.blue }}>EXPLORING</span>
            </>
          }
          lede="The ground SIGAI covers, in the chapter's own terms — the fields named in its mission and vision, and the concepts its events keep returning to."
        />

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(272px, 100%), 1fr))',
            gap: 18,
            listStyle: 'none',
            margin: '48px 0 0',
            padding: 0,
          }}
        >
          {AREAS.map((area, i) => (
            <Reveal as="li" key={area.term} delay={i * 70}>
              <article
                className="panel panel--sheen"
                style={{
                  height: '100%',
                  padding: '26px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 11,
                    letterSpacing: '0.5px',
                    color: PALETTE.blue,
                  }}
                >
                  {area.notation}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: PALETTE.cream,
                  }}
                >
                  {area.term}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: PALETTE.muted,
                    textWrap: 'pretty',
                  }}
                >
                  {area.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
