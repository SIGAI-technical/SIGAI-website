import * as React from 'react';
import Link from 'next/link';
import { CONTACT, NAV_LINKS, ORG, SOCIALS } from '@/lib/content';

/**
 * Footer component directly matching index_8.html:
 * Uses clean CSS classes that automatically adapt to light & dark theme.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer__mark">
        <span aria-hidden="true">SIGAI</span>
        <p>{ORG.tagline}</p>
      </div>

      <div className="shell footer__grid">
        <p className="footer__blurb">
          {ORG.expansion}. The {ORG.chapterDescriptor} of {ORG.college}, affiliated with the{' '}
          {ORG.parentBody}.
        </p>

        <nav aria-label="Footer">
          <p className="footer__label">Links</p>
          <ul className="footer__list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer__label">Contact</p>
          <ul className="footer__list">
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s+/g, '')}`} className="link-underline">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className="link-underline" style={{ wordBreak: 'break-all' }}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__label">Follow</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`SIGAI on ${s.label}`}
              >
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell footer__base">
        <span>{ORG.copyright}</span>
        <span>{ORG.collegeFull}</span>
      </div>
    </footer>
  );
}
