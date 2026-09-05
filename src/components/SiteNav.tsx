'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const [lifted, setLifted] = useState(false);

  // Highlight whichever section is currently crossing the upper third.
  useEffect(() => {
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-88px 0px -62% 0px', threshold: 0 },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet once the viewport is wide enough for the full bar.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    const sync = () => mq.matches && setOpen(false);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(5,6,11,0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${lifted ? PALETTE.lineSoft : PALETTE.line}`,
        transition: 'border-color 220ms ease',
      }}
    >
      <nav
        className="shell"
        aria-label="Primary"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          paddingBlock: 16,
        }}
      >
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: 13 }}
          aria-label={`${'SIGAI'} — home`}
        >
          {/* Pixel-visor mark: a cream bar with two blue "eyes". */}
          <span
            aria-hidden
            style={{
              width: 38,
              height: 38,
              background: PALETTE.blue,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 24,
                height: 11,
                background: PALETTE.cream,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              <span style={{ width: 4, height: 4, background: PALETTE.blue }} />
              <span style={{ width: 4, height: 4, background: PALETTE.blue }} />
            </span>
          </span>

          <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              style={{
                fontFamily: 'var(--display)',
                fontSize: 15,
                letterSpacing: '0.5px',
                lineHeight: 1,
                color: PALETTE.cream,
              }}
            >
              SIGAI
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '2.6px',
                textTransform: 'uppercase',
                color: PALETTE.dim,
                lineHeight: 1,
              }}
            >
              DJS ACM
            </span>
          </span>
        </a>

        <div
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 6 }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              data-active={active === href.slice(1)}
              aria-current={active === href.slice(1) ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
          <a href="#get-involved" className="nav-cta" style={{ marginLeft: 8 }}>
            Join us
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="shell"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            paddingBottom: 18,
            borderTop: `1px solid ${PALETTE.line}`,
            paddingTop: 14,
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              data-active={active === href.slice(1)}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#get-involved"
            className="nav-cta"
            style={{ marginTop: 10, textAlign: 'center' }}
            onClick={() => setOpen(false)}
          >
            Join us
          </a>
        </div>
      ) : null}
    </header>
  );
}
