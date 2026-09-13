import * as React from 'react';
import Link from 'next/link';
import { CONTACT, SOCIALS } from '@/lib/content';
import { SocialIcon } from './ui';

interface ContactRow {
  icon: string;
  label: string;
  value: string;
  href: string;
  tone: string;
  wrap?: boolean;
}

const CONTACT_ROWS: ContactRow[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'djs.sigai@gmail.com',
    href: 'mailto:djs.sigai@gmail.com',
    tone: 'blue',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 9545629801',
    href: 'tel:+919545629801',
    tone: 'amber',
  },
  {
    icon: 'phone',
    label: 'Alternate',
    value: '+91 9867720041',
    href: 'tel:+919867720041',
    tone: 'amber',
  },
  {
    icon: 'pin',
    label: 'Find us',
    value: 'Dwarkadas J. Sanghvi College of Engineering',
    href: 'https://maps.google.com/?q=Dwarkadas+J+Sanghvi+College+of+Engineering',
    tone: 'teal',
    wrap: true,
  },
];

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function renderIcon(iconName: string) {
  switch (iconName) {
    case 'mail':
      return <MailIcon />;
    case 'phone':
      return <PhoneIcon />;
    case 'pin':
      return <PinIcon />;
    default:
      return <MailIcon />;
  }
}

/**
 * ContactStrip component matching Section 12 & 16 in index_8.html:
 * Features tilted interactive contact tiles with spotlight and icons.
 */
export default function ContactStrip() {
  return (
    <div className="band band--contact">
      <section className="section contact-strip">
        <div className="shell">
          <ul className="contact-grid" id="contactGrid">
            {CONTACT_ROWS.map((r, i) => (
              <li
                key={r.label + r.value}
                className="popup"
                style={{
                  ['--popup-delay' as string]: `${i * 80}ms`,
                  ['--popup-angle' as string]: '18deg',
                }}
              >
                <a
                  href={r.href}
                  className="contact-link"
                  target={r.href.startsWith('http') ? '_blank' : undefined}
                  rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="tilt" data-tilt="6" data-spotlight style={{ height: '100%' }}>
                    <div className="tilt__inner">
                      <span className="contact-card">
                        <span className={`tile tile--${r.tone} tilt__pop`} aria-hidden="true">
                          {renderIcon(r.icon)}
                        </span>
                        <span className="contact-card__label">{r.label}</span>
                        <span
                          className="contact-card__value"
                          style={r.wrap ? undefined : { whiteSpace: 'nowrap' }}
                        >
                          {r.value}
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="popup" style={{ ['--popup-delay' as string]: '140ms' }}>
            <div className="contact-strip__socials">
              <span className="contact-strip__socialslabel">Follow the chapter</span>
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
                    <SocialIcon name={s.label} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
