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
            <div className="getinvolved__grid" style={{ padding: 'clamp(32px, 5vw, 60px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: '58ch' }}>
                <span className="eyebrow">Open to every student</span>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(19px, 2.7vw, 32px)',
                    lineHeight: 1.5,
                    letterSpacing: '-0.5px',
                    color: 'var(--cream)',
                  }}
                >
                  COME BUILD WITH <span className="mark">SIGAI</span>
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: 15.5,
                    lineHeight: 1.8,
                    color: 'var(--muted)',
                    textWrap: 'pretty',
                  }}
                >
                  Come to the seminars and workshops, take part in the events, or just reach out.
                  The chapter is open to students who want to explore AI, ML and Deep Learning
                  together.
                </p>
              </div>

              <div className="getinvolved__actions">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                  <Button href={`mailto:${CONTACT.email}`} variant="gold" icon="mail">
                    EMAIL SIGAI
                  </Button>
                  <Button href="/events" variant="ghost">
                    SEE THE EVENTS
                  </Button>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
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
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
