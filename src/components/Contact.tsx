import Reveal from './Reveal';
import { Icon, SectionHeading } from './ui';
import { CONTACT, SOCIALS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

export default function Contact() {
  return (
    <section id="contact" className="section section--hairline grid-bg">
      <div className="shell">
        <SectionHeading
          eyebrow="08 — Contact"
          title={
            <>
              GET IN
              <br />
              <span style={{ color: PALETTE.blue }}>TOUCH</span>
            </>
          }
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 20,
            marginTop: 44,
          }}
        >
          <Reveal>
            <div
              className="panel"
              style={{
                height: '100%',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 26,
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: PALETTE.dim,
                  }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 10,
                    fontSize: 17,
                    fontWeight: 500,
                    wordBreak: 'break-all',
                  }}
                >
                  <Icon name="mail" size={15} />
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: PALETTE.dim,
                  }}
                >
                  Phone
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s+/g, '')}`}
                      className="link-underline"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: 16,
                        width: 'fit-content',
                      }}
                    >
                      <Icon name="phone" size={15} />
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: PALETTE.dim,
                  }}
                >
                  Address
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    margin: '10px 0 0',
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: PALETTE.cream,
                  }}
                >
                  <span style={{ paddingTop: 2, color: PALETTE.muted }}>
                    <Icon name="pin" size={15} />
                  </span>
                  {CONTACT.location}
                </p>
              </div>

              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: PALETTE.dim,
                  }}
                >
                  Follow
                </p>
                <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
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
                        name={
                          s.label === 'LinkedIn'
                            ? 'linkedin'
                            : s.label === 'Instagram'
                              ? 'instagram'
                              : 'x'
                        }
                        size={14}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="panel"
              style={{ height: '100%', minHeight: 340, padding: 0, overflow: 'hidden' }}
            >
              <iframe
                title={`Map — ${CONTACT.location}`}
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  minHeight: 340,
                  filter: 'grayscale(0.4) contrast(1.05)',
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
