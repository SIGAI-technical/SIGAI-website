'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './ui';
import { NAV_LINKS } from '@/lib/content';

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const railRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isActive = useCallback(
    // "/" must match exactly — every path startsWith("/").
    (href: string) =>
      href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );

  /**
   * Slide the single indicator under the active link. Driven by CSS vars so the
   * animation stays on transform, and it simply hides when no link matches.
   */
  const moveIndicator = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const active = NAV_LINKS.find((l) => isActive(l.href));
    const el = active ? linkRefs.current[active.href] : null;

    if (!el) {
      rail.style.setProperty('--o', '0');
      rail.style.setProperty('--sx', '0');
      return;
    }

    rail.style.setProperty('--x', `${el.offsetLeft}px`);
    rail.style.setProperty('--w', `${el.offsetWidth}px`);
    rail.style.setProperty('--sx', '1');
    rail.style.setProperty('--o', '1');
  }, [isActive]);

  useEffect(() => {
    moveIndicator();

    const ro = new ResizeObserver(moveIndicator);
    if (railRef.current) ro.observe(railRef.current);

    // Link widths shift once the display font swaps in, so measure again then.
    let live = true;
    document.fonts?.ready.then(() => {
      if (live) moveIndicator();
    });

    return () => {
      live = false;
      ro.disconnect();
    };
  }, [moveIndicator]);

  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      // Coalesce to one write per frame; scroll fires far more often than that.
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setScrolled(y > 12);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, y / max) : 0;
        progressRef.current?.style.setProperty('--p', String(p));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Close the sheet once the viewport is wide enough for the full bar.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const sync = () => mq.matches && setOpen(false);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // A full-screen sheet shouldn't scroll the page behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <span className="site-header__progress" ref={progressRef} aria-hidden />

      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="SIGAI — home">
          <span className="brand__plate" aria-hidden>
            <Image
              src="/logo-mark-cream.png"
              alt=""
              width={40}
              height={52}
              priority
              style={{ width: 'auto', height: 27, display: 'block' }}
            />
          </span>

          <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span
              style={{
                fontFamily: 'var(--display)',
                fontSize: 14,
                letterSpacing: '0.5px',
                lineHeight: 1,
                color: 'var(--cream)',
              }}
            >
              SIGAI
            </span>
            <span
              style={{
                fontSize: 8.5,
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                lineHeight: 1,
              }}
            >
              DJS ACM
            </span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div className="nav-rail" ref={railRef}>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                ref={(el) => {
                  linkRefs.current[href] = el;
                }}
                className="nav-link"
                data-active={isActive(href)}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <span className="nav-rail__indicator" aria-hidden />
          </div>

          <Link href="/contact" className="btn btn--gold">
            JOIN
            <span className="btn__icon" aria-hidden>
              <Icon name="arrow" size={12} />
            </span>
          </Link>
        </nav>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="mobile-sheet"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className="sheet" id="mobile-sheet">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              style={{ ['--i' as string]: `${60 + i * 55}ms` }}
              aria-current={isActive(href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{ ['--i' as string]: `${60 + NAV_LINKS.length * 55}ms`, color: 'var(--gold)' }}
            onClick={() => setOpen(false)}
          >
            JOIN US
          </Link>
        </div>
      ) : null}
    </header>
  );
}
