'use client';

import { useEffect, useRef, useState } from 'react';

type ReadingTheme = 'dark' | 'light';

export default function ReadingThemeToggle() {
  const topButtonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<ReadingTheme>('dark');
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const page = topButtonRef.current?.closest<HTMLElement>('.reading-page');
    if (!page) return;
    let saved: string | null = null;
    try { saved = localStorage.getItem('sigai-reading-theme'); } catch {}
    if (saved === 'light') {
      page.dataset.readingTheme = 'light';
      setTheme('light');
    }

    const onScroll = () => setDocked(window.scrollY > 180);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = () => {
    const next: ReadingTheme = theme === 'dark' ? 'light' : 'dark';
    const page = topButtonRef.current?.closest<HTMLElement>('.reading-page');
    if (page) page.dataset.readingTheme = next;
    setTheme(next);
    try { localStorage.setItem('sigai-reading-theme', next); } catch {}
  };

  const icon = (
    <span className="reading-theme-toggle__icon" aria-hidden="true">
      <svg className="reading-theme-toggle__moon" viewBox="0 0 24 24" fill="none"><path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8a8.5 8.5 0 1 0 11.7 11.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
      <svg className="reading-theme-toggle__sun" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
    </span>
  );
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} reading mode`;
  return (
    <>
      <button ref={topButtonRef} type="button" className="reading-theme-toggle reading-theme-toggle--top" data-reading-mode={theme} onClick={toggle} aria-label={label} title={label}>{icon}</button>
      <button type="button" className="reading-theme-toggle reading-theme-toggle--float" data-visible={docked} data-reading-mode={theme} onClick={toggle} aria-label={label} aria-hidden={!docked} tabIndex={docked ? 0 : -1} title={label}>{icon}</button>
    </>
  );
}
