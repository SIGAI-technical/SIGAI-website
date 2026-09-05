import Reveal from './Reveal';
import { Bezel, Button, Icon } from './ui';
import { CONTACT, SOCIALS } from '@/lib/content';

const SOCIAL_ICON = { LinkedIn: 'linkedin', Instagram: 'instagram', X: 'x' } as const;

export default function GetInvolved() {
  return (
    <section id="get-involved" className="section">
      <div className="shell">
        <Reveal>
          <Bezel>
            <div
              style={{
                padding: 'clamp(38px, 6vw, 76px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 24,
              }}
            >
              <span className="eyebrow">
                Open to every student
              </span>

              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(17px, 2.5vw, 31px)',
                  lineHeight: 1.55,
                  letterSpacing: '-0.5px',
                  color: 'var(--cream)',
                }}
              >
                COME BUILD WITH
                <br />
                <span className="mark">SIGAI</span>
              </h2>

              <p
                style={{
                  maxWidth: '54ch',
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'var(--muted)',
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
                <Button href={`mailto:${CONTACT.email}`} variant="gold" icon="mail">
                  EMAIL SIGAI
                </Button>
                <Button href="/events" variant="ghost">
                  SEE THE EVENTS
                </Button>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 6 }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`SIGAI on ${s.label}`}
                  >
                    <Icon name={SOCIAL_ICON[s.label]} size={14} />
                  </a>
                ))}
              </div>
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
