import Link from 'next/link';
import { Icon } from './ui';
import { CONTACT, NAV_LINKS, ORG, SOCIALS } from '@/lib/content';

const SOCIAL_ICON = { LinkedIn: 'linkedin', Instagram: 'instagram', X: 'x' } as const;

const LABEL: React.CSSProperties = {
  margin: 0,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--dim)',
};

const LINK: React.CSSProperties = { fontSize: 14, color: 'var(--muted)' };

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(8,11,22,0.72)',
        /* Gradient top border (blue→gold→blue) via a top padding + bg trick. */
        borderTop: '0',
        backgroundImage:
          'linear-gradient(90deg, transparent 0%, rgba(43,95,255,0.75) 20%, rgba(245,197,24,0.75) 50%, rgba(43,95,255,0.75) 80%, transparent 100%), linear-gradient(rgba(8,11,22,0.72), rgba(8,11,22,0.72))',
        backgroundSize: '100% 1px, 100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top, 0 0',
        paddingTop: 1,
      }}
    >
      {/* A typographic close, not another card row: the wordmark carries the
          brand, the tagline sits beside it doing the one job a footer intro
          needs to do. */}
      <div className="shell footer__mark">
        <span aria-hidden>SIGAI</span>
        <p>{ORG.tagline}</p>
      </div>

      <div className="shell footer__grid">
        <p style={{ margin: 0, maxWidth: '38ch', fontSize: 14, lineHeight: 1.75, color: 'var(--muted)' }}>
          {ORG.expansion}. The {ORG.chapterDescriptor} of {ORG.college}, affiliated with the{' '}
          {ORG.parentBody}.
        </p>

        <nav aria-label="Footer">
          <p style={LABEL}>Links</p>
          <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline" style={LINK}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p style={LABEL}>Contact</p>
          <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s+/g, '')}`} className="link-underline" style={LINK}>
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-underline"
                style={{ ...LINK, wordBreak: 'break-all' }}
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p style={LABEL}>Follow</p>
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
                <Icon name={SOCIAL_ICON[s.label]} size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)' }}>
        <div
          className="shell"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            paddingBlock: 20,
            fontSize: 12.5,
            color: 'var(--dim)',
          }}
        >
          <span>{ORG.copyright}</span>
          <span>{ORG.collegeFull}</span>
        </div>
      </div>
    </footer>
  );
}
