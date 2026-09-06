import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

/** Standard eyebrow + title + optional lede block that opens each section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'start',
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'start' | 'center';
}) {
  return (
    <Reveal>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          textAlign: align === 'center' ? 'center' : 'left',
        }}
      >
        <span className="eyebrow">
          {eyebrow}
        </span>
        <h2 className="section-title">{title}</h2>
        {lede ? <p className="section-lede">{lede}</p> : null}
        <div className="rule" style={{ marginTop: 28 }} aria-hidden />
      </div>
    </Reveal>
  );
}

/**
 * Masthead for an inner route: owns the page's single <h1>, so the sections
 * below render their content without repeating a heading.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <header
      style={{
        paddingTop: 'clamp(56px, 8vw, 104px)',
        paddingBottom: 'clamp(12px, 2vw, 24px)',
      }}
    >
      <div className="shell">
        <Reveal>
          <span className="eyebrow">
            {eyebrow}
          </span>
          <h1 className="page-title">{title}</h1>
          {lede ? <p className="section-lede">{lede}</p> : null}
          <div className="rule" style={{ marginTop: 30 }} aria-hidden />
        </Reveal>
      </div>
    </header>
  );
}

/**
 * Outer tray + inner core, so cards read as machined hardware. Children render
 * inside the core.
 */
export function Bezel({
  children,
  className = '',
  style,
  onMouseMove,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={`bezel${className ? ` ${className}` : ''}`}
      style={{ height: '100%', ...style }}
      onMouseMove={onMouseMove}
    >
      <div className="bezel__core sheen">{children}</div>
    </div>
  );
}

/**
 * Visible stand-in for artwork that will be supplied later. Labelled so nobody
 * mistakes an empty slot for a finished design.
 */
export function Placeholder({
  label,
  height,
  radius = 6,
  ratio,
}: {
  label: string;
  height?: number | string;
  radius?: number;
  ratio?: string;
}) {
  return (
    <div className="ph" style={{ height, aspectRatio: ratio, borderRadius: radius }} aria-hidden>
      <span style={{ padding: '0 12px' }}>{label}</span>
    </div>
  );
}

const ICON = {
  linkedin:
    'M4.98 3.5a2 2 0 1 1-.02 4 2 2 0 0 1 .02-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z',
  instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm6.99-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0Z',
  x: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.09l-4.77-6.23L5.43 21H2.4l7.06-8.07L2.25 3h6.24l4.31 5.7L17.53 3Zm-1.06 16.2h1.67L7.63 4.71H5.83L16.47 19.2Z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.13L4.4 7H19.6L12 13.13ZM4 17h16V9.2l-8 6.4-8-6.4V17Z',
  phone:
    'M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z',
  pin: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Z',
  arrow: 'M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z',
  users:
    'M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 1a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 12Zm0 2c-2.67 0-8 1.34-8 4v3h9.5v-2.5c0-1.1.5-2.6 2.02-3.72A14.6 14.6 0 0 0 8 14Zm8 0c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4Z',
  calendar:
    'M7 2v2h10V2h2v2h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V2h2ZM4 9v11h16V9H4Zm2 2h4v4H6v-4Z',
} as const;

export type IconName = keyof typeof ICON;

export function Icon({ name, size = 15 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d={ICON[name]} />
    </svg>
  );
}

/** Pill button with the trailing icon nested in its own circle. */
export function Button({
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'gold' | 'ghost';
  icon?: IconName;
  external?: boolean;
}) {
  const className = `btn btn--${variant}`;
  const body = (
    <>
      {children}
      <span className="btn__icon" aria-hidden>
        <Icon name={icon} size={13} />
      </span>
    </>
  );

  // Internal routes go through Link for client-side navigation; mailto/tel and
  // external URLs stay plain anchors.
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {body}
    </a>
  );
}
