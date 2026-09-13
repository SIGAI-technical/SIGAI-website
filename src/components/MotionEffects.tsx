'use client';

import * as React from 'react';

/**
 * Mounts lightweight motion primitives from index_8.html with zero layout thrashing:
 *  - Pop-up reveals on viewport enter (.popup)
 *  - 3D card tilt with cached rect bounds (.tilt)
 *  - Magnetic control pull on pointer proximity (.magnetic)
 *  - Count-up animated numbers ([data-count])
 */
export default function MotionEffects() {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // 1. Pop-Up Reveals
    const popups = document.querySelectorAll<HTMLElement>('.popup');
    if (calm || typeof IntersectionObserver === 'undefined') {
      popups.forEach((el) => el.classList.add('is-open'));
    } else {
      const ioPop = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-open');
              ioPop.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0 }
      );
      popups.forEach((el) => ioPop.observe(el));
    }

    // 2. Count-Up
    const counts = document.querySelectorAll<HTMLElement>('[data-count]');
    if (!calm && typeof IntersectionObserver !== 'undefined' && counts.length) {
      const ioCount = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            ioCount.unobserve(el);

            const target = parseInt(el.getAttribute('data-count') || '0', 10);
            if (isNaN(target)) return;
            const t0 = performance.now();
            const DURATION = 1100;

            el.style.fontVariantNumeric = 'tabular-nums';
            el.textContent = '0';

            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / DURATION);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = String(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.5 }
      );
      counts.forEach((el) => ioCount.observe(el));
    }

    // 3. 3D Tilt with Cached Bounding Rects (Prevents Layout Thrashing)
    if (!calm && !touch) {
      const tilts = document.querySelectorAll<HTMLElement>('.tilt');
      tilts.forEach((el) => {
        if (el.hasAttribute('data-tilt-ready')) return;
        el.setAttribute('data-tilt-ready', '');
        const deg = parseFloat(el.getAttribute('data-tilt') || '5');
        const spot = el.hasAttribute('data-spotlight');
        let frame = 0;
        let r: DOMRect | null = null;
        el.style.setProperty('--tilt-deg', `${deg}deg`);

        const updateRect = () => {
          r = el.getBoundingClientRect();
        };

        el.addEventListener('pointerenter', () => {
          updateRect();
          el.setAttribute('data-lit', 'true');
        });

        el.addEventListener('pointermove', (e: PointerEvent) => {
          if (frame) return;
          const cx = e.clientX;
          const cy = e.clientY;
          frame = requestAnimationFrame(() => {
            frame = 0;
            if (!r || !r.width || !r.height) return;
            const x = cx - r.left;
            const y = cy - r.top;
            el.style.setProperty('--tx', ((x / r.width) * 2 - 1).toFixed(3));
            el.style.setProperty('--ty', ((y / r.height) * 2 - 1).toFixed(3));
            if (spot) {
              el.style.setProperty('--mx', `${x}px`);
              el.style.setProperty('--my', `${y}px`);
            }
          });
        });

        el.addEventListener('pointerleave', () => {
          if (frame) {
            cancelAnimationFrame(frame);
            frame = 0;
          }
          r = null;
          el.removeAttribute('data-lit');
          el.style.setProperty('--tx', '0');
          el.style.setProperty('--ty', '0');
        });
      });
    }

    // 4. Magnetic Buttons (Targeted Hover Tracking Without Global Reflow)
    if (!calm && !touch) {
      const STRENGTH = 9;
      const magnetics = document.querySelectorAll<HTMLElement>('.magnetic');
      magnetics.forEach((el) => {
        let frame = 0;
        let r: DOMRect | null = null;

        el.addEventListener('pointerenter', () => {
          r = el.getBoundingClientRect();
          el.setAttribute('data-pulled', 'true');
        });

        el.addEventListener('pointermove', (e: PointerEvent) => {
          if (frame) return;
          const cx = e.clientX;
          const cy = e.clientY;
          frame = requestAnimationFrame(() => {
            frame = 0;
            if (!r || !r.width) return;
            const dx = cx - (r.left + r.width / 2);
            const dy = cy - (r.top + r.height / 2);
            const nx = Math.max(-1, Math.min(1, dx / (r.width / 2)));
            const ny = Math.max(-1, Math.min(1, dy / (r.height / 2)));
            el.style.setProperty('--mag-x', `${(nx * STRENGTH).toFixed(2)}px`);
            el.style.setProperty('--mag-y', `${(ny * STRENGTH).toFixed(2)}px`);
          });
        });

        el.addEventListener('pointerleave', () => {
          if (frame) cancelAnimationFrame(frame);
          frame = 0;
          r = null;
          el.style.setProperty('--mag-x', '0px');
          el.style.setProperty('--mag-y', '0px');
          el.removeAttribute('data-pulled');
        });
      });
    }
  }, []);

  return null;
}
