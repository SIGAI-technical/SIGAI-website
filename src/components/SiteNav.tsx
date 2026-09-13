'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
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

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('sigai-theme');
    const initial =
      saved === 'dark' || saved === 'light'
        ? saved
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    document.documentElement.setAttribute('data-theme', initial);
    requestAnimationFrame(() => {
      setTheme(initial);
    });
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('sigai-theme', next);

    const btn = e.currentTarget;
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => { ready?: Promise<void> };
    };

    if (!doc.startViewTransition) {
      document.documentElement.setAttribute('data-theme', next);
      return;
    }

    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const end = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const vt = doc.startViewTransition(() => {
      document.documentElement.setAttribute('data-theme', next);
    });
    vt.ready
      ?.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${end}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 620,
            easing: 'cubic-bezier(.16,1,.3,1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      })
      .catch(() => {});
  };

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <span className="site-header__progress" ref={progressRef} aria-hidden />

      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="SIGAI — home">
          <span className="brand__plate" aria-hidden>
            <Image
              src="/logo-mark-navy.png"
              alt=""
              width={40}
              height={52}
              priority
              className="brand__logo-light"
              style={{ width: 'auto', height: 27 }}
            />
            <Image
              src="/logo-mark-cream.png"
              alt=""
              width={40}
              height={52}
              priority
              className="brand__logo-dark"
              style={{ width: 'auto', height: 27 }}
            />
          </span>

          <span className="brand__name">
            <b>SIGAI</b>
            <span>DJS ACM</span>
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
        </nav>

        <button
          className="theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Switch theme"
          onClick={toggleTheme}
        >
          <svg className="ico-sun" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-13a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM4 13H2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm18 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2ZM5.64 6.64 4.22 5.22a1 1 0 0 1 1.42-1.42L7.05 5.2A1 1 0 0 1 5.64 6.64Zm12.72 12.72-1.41-1.41a1 1 0 0 1 1.41-1.42l1.42 1.42a1 1 0 0 1-1.42 1.41ZM4.22 18.78a1 1 0 0 1 0-1.42l1.42-1.41A1 1 0 0 1 7.05 17.2l-1.41 1.41a1 1 0 0 1-1.42 0ZM16.95 7.05a1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 1 1 1.42 1.42L18.36 7.05a1 1 0 0 1-1.41 0Z" />
          </svg>
          <svg className="ico-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.4 14.3A9 9 0 1 1 9.7 2.6a1 1 0 0 1 1.28 1.28 7 7 0 0 0 9.14 9.14 1 1 0 0 1 1.28 1.28Z" />
          </svg>
        </button>

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
        </div>
      ) : null}
    </header>
  );
}
