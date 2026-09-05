import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { Bezel, Icon, SectionHeading } from './ui';
import { CONTACT, SOCIALS } from '@/lib/content';

const SOCIAL_ICON = { LinkedIn: 'linkedin', Instagram: 'instagram', X: 'x' } as const;

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p
        style={{
          margin: 0,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--dim)',
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="contact" className="section">
      <div className="shell">
        {showHeading ? (
          <SectionHeading
            eyebrow="Reach the chapter"
            title={
              <>
                GET IN
                <br />
                <span className="mark">TOUCH</span>
              </>
            }
          />
        ) : null}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 20,
            marginTop: 48,
          }}
        >
          <Reveal>
            <Bezel>
              <div
                style={{
                  height: '100%',
                  padding: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 28,
                }}
              >
                <Field label="Email">
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
                </Field>

                <Field label="Phone">
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
                </Field>

                <Field label="Address">
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      margin: '10px 0 0',
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: 'var(--cream)',
                    }}
                  >
                    <span style={{ paddingTop: 2, color: 'var(--muted)' }}>
                      <Icon name="pin" size={15} />
                    </span>
                    {CONTACT.location}
                  </p>
                </Field>

                <Field label="Follow">
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
                        <Icon name={SOCIAL_ICON[s.label]} size={14} />
                      </a>
                    ))}
                  </div>
                </Field>
              </div>
            </Bezel>
          </Reveal>

          <Reveal delay={100}>
            <Bezel>
              <iframe
                title={`Map — ${CONTACT.location}`}
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  display: 'block',
                  border: 0,
                  width: '100%',
                  height: '100%',
                  minHeight: 360,
                  filter: 'grayscale(0.45) contrast(1.05) brightness(0.92)',
                }}
              />
            </Bezel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
