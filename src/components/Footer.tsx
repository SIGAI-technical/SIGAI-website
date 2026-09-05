import Image from 'next/image';
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
    <footer style={{ borderTop: '1px solid var(--line)', background: 'rgba(8,11,22,0.72)' }}>
      <div
        className="shell"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: 40,
          paddingBlock: 'clamp(48px, 6vw, 76px)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image
              src="/logo-mark-cream.png"
              alt=""
              width={40}
              height={52}
              style={{ width: 'auto', height: 44 }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 15,
                  lineHeight: 1,
                  color: 'var(--cream)',
                }}
              >
                SIGAI
              </p>
              <p style={{ ...LABEL, marginTop: 7 }}>DJS ACM</p>
            </div>
          </div>

          <p
            style={{
              margin: '20px 0 0',
              maxWidth: '34ch',
              fontSize: 14,
              lineHeight: 1.7,
              color: 'var(--muted)',
            }}
          >
            {ORG.expansion} — the {ORG.chapterDescriptor} of {ORG.college}, affiliated with the{' '}
            {ORG.parentBody}.
          </p>
        </div>

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
          <p style={LABEL}>Follow Us</p>
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
