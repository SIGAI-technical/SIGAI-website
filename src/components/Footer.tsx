import Image from 'next/image';
import { Icon } from './ui';
import { CONTACT, NAV_LINKS, ORG, SOCIALS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

const LABEL: React.CSSProperties = {
  margin: 0,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '2.4px',
  textTransform: 'uppercase',
  color: PALETTE.dim,
};

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${PALETTE.line}`, background: PALETTE.panelDeep }}>
      <div
        className="shell"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: 40,
          paddingBlock: 'clamp(44px, 6vw, 68px)',
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
                  color: PALETTE.cream,
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
              color: PALETTE.muted,
            }}
          >
            {ORG.expansion} — {ORG.chapterLine.toLowerCase()} at {ORG.college}, affiliated with the{' '}
            {ORG.parentBody}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p style={LABEL}>Links</p>
          <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>
            <li>
              <a href="#home" className="link-underline" style={{ fontSize: 14, color: PALETTE.muted }}>
                Home
              </a>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline"
                  style={{ fontSize: 14, color: PALETTE.muted }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p style={LABEL}>Contact</p>
          <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:${p.replace(/\s+/g, '')}`}
                  className="link-underline"
                  style={{ fontSize: 14, color: PALETTE.muted }}
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-underline"
                style={{ fontSize: 14, color: PALETTE.muted, wordBreak: 'break-all' }}
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

      <div style={{ borderTop: `1px solid ${PALETTE.line}` }}>
        <div
          className="shell"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            paddingBlock: 20,
            fontSize: 12.5,
            color: PALETTE.dim,
          }}
        >
          <span>{ORG.copyright}</span>
          <span>{ORG.collegeFull}</span>
        </div>
      </div>
    </footer>
  );
}
