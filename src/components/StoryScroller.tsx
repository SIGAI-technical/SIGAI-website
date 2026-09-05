'use client';

import * as React from 'react';
import { Button, Placeholder } from './ui';

/**
 * Scroll-driven story panel.
 *
 * Adapted from the `interactive-scrolling-story-component` block. Changes:
 *  - The original scrolls an inner `overflow-y-auto` container, which traps the
 *    page scroll and breaks anchor links and keyboard paging. This tracks the
 *    *page* scroll against a tall section instead, so the page scrolls normally.
 *  - Untyped `useRef(null)` and `e.target.src` don't compile under TS; both are
 *    properly typed here.
 *  - Palette follows the site rather than the block's hardcoded yellow-on-black.
 *  - Pagination bars are real buttons with labels; the slide region announces
 *    changes politely.
 */

interface Slide {
  eyebrow: string;
  title: string;
  body: string;
}

/** Every line here comes from the chapter's own About and Vision copy. */
const SLIDES: Slide[] = [
  {
    eyebrow: 'The chapter',
    title: 'A student chapter for AI',
    body: 'DJS ACM SIGAI was founded by Dwarkadas J. Sanghvi College of Engineering students in the AI & ML department, affiliated with the Association for Computing Machinery.',
  },
  {
    eyebrow: 'The field',
    title: 'AI, ML and Deep Learning',
    body: 'The chapter introduces students to a rapidly expanding and increasingly interdisciplinary field — from neural networks and backpropagation through to transformers.',
  },
  {
    eyebrow: 'The work',
    title: 'Seminars and workshops',
    body: 'Knowledge and skills are built through a series of seminars, skill-building workshops and other events spread across the academic year.',
  },
  {
    eyebrow: 'The invitation',
    title: 'Develop as a community',
    body: 'SIGAI exists to promote and support the development and application of AI principles and techniques — and to grow a community of students around them.',
  },
];

export default function StoryScroller() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        // How far through the tall track the sticky panel currently sits.
        const travelled = -rect.top;
        const total = section.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(0.999, Math.max(0, travelled / total));
        setActive(Math.floor(p * SLIDES.length));
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

  const goTo = (i: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const total = section.offsetHeight - window.innerHeight;
    const top = section.offsetTop + (total * (i + 0.5)) / SLIDES.length;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="story"
      style={{ ['--slides' as string]: SLIDES.length }}
      aria-label="What SIGAI is"
    >
      <div className="story__pin">
        <div className="shell story__grid">
          <div className="story__left">
            <div className="story__bars" role="group" aria-label="Jump to a chapter">
              {SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  className="story__bar"
                  data-on={i === active}
                  aria-label={`Go to: ${s.title}`}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <div className="story__stage">
              {SLIDES.map((s, i) => (
                <article key={s.title} className="story__slide" data-on={i === active}>
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2 className="story__title">{s.title}</h2>
                  <p className="story__body">{s.body}</p>
                </article>
              ))}
            </div>

            <div className="story__cta">
              <Button href="/about" variant="gold">
                MORE ABOUT SIGAI
              </Button>
            </div>
          </div>

          <div className="story__right" aria-hidden>
            <div className="story__frame">
              <div
                className="story__reel"
                style={{ transform: `translate3d(0, -${active * 100}%, 0)` }}
              >
                {SLIDES.map((s) => (
                  <div key={s.title} className="story__cell">
                    <Placeholder label={`${s.eyebrow} — image to be added`} height="100%" radius={0} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
