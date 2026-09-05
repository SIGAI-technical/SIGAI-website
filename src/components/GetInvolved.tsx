import Reveal from './Reveal';
import { Icon } from './ui';
import { CONTACT, SOCIALS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="section section--hairline">
      <div className="shell">
        <Reveal>
          <div
            className="panel"
            style={{
              padding: 'clamp(34px, 5vw, 64px)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 22,
            }}
          >
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              07 — Get involved
            </span>

            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 'clamp(17px, 2.4vw, 30px)',
                lineHeight: 1.55,
                letterSpacing: '-0.5px',
                color: PALETTE.cream,
              }}
            >
              COME BUILD WITH
              <br />
              <span style={{ color: PALETTE.blue }}>SIGAI</span>
            </h2>

            <p
              style={{
                maxWidth: '54ch',
                margin: 0,
                fontSize: 16,
                lineHeight: 1.8,
                color: PALETTE.muted,
                textWrap: 'pretty',
              }}
            >
              Come to the seminars and workshops, take part in the events, or just reach out — the
              chapter is open to students who want to explore AI, ML and Deep Learning together.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
                justifyContent: 'center',
                marginTop: 4,
              }}
            >
              <a href={`mailto:${CONTACT.email}`} className="btn btn--primary">
                EMAIL SIGAI
                <Icon name="mail" size={13} />
              </a>
              <a href="#events" className="btn btn--ghost">
                SEE THE EVENTS
                <Icon name="arrow" size={13} />
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 10,
                justifyContent: 'center',
                marginTop: 6,
              }}
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SIGAI on ${s.label}`}
                >
                  <Icon
                    name={s.label === 'LinkedIn' ? 'linkedin' : s.label === 'Instagram' ? 'instagram' : 'x'}
                    size={14}
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
