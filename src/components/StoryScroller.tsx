'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from './ui';

interface Slide {
  title: string;
  body: string;
  image: string;
  alt: string;
  badge: string;
}

/** Authentic chapter story slides with official committee and event photos */
const SLIDES: Slide[] = [
  {
    title: 'Core Committee',
    body: 'The executive student leadership team driving DJS ACM SIGAI — spearheading AI research culture, flagship hackathons, and technical initiatives across DJSCE.',
    image: '/images/CORE.jpeg',
    alt: 'DJS ACM SIGAI Core Committee',
    badge: 'Core Committee',
  },
  {
    title: 'Chapter Committee',
    body: 'Passionate student teams across technical, design, marketing, and logistics working collaboratively to create impactful hands-on learning experiences.',
    image: '/images/chapter-committee.jpeg',
    alt: 'DJS ACM SIGAI Chapter Committee',
    badge: 'Chapter Committee',
  },
  {
    title: 'Applied Intelligence',
    body: 'Introducing students to rapidly advancing domains — computer vision, natural language processing, IPD seminars, and state-of-the-art neural architectures.',
    image: '/images/ipd-seminar.jpeg',
    alt: 'IPD Seminar - Applied Artificial Intelligence',
    badge: 'IPD Seminar',
  },
  {
    title: 'Seminars & Workshops',
    body: 'Knowledge and skills are built through intensive code-alongs, skill-building workshops, and speaker series breaking down ML engineering from first principles.',
    image: '/events/seminar.png',
    alt: 'First-Principles Technical Seminars & Workshops',
    badge: 'Seminars & Workshops',
  },
  {
    title: 'Develop as a Community',
    body: 'SIGAI exists to promote and support the development and application of AI principles — growing a vibrant community of curious builders and researchers.',
    image: '/events/Clockout3.0/clockout3_cover.jpg',
    alt: 'Campus Hackathons and Flagship Quests',
    badge: 'Campus Hackathons',
  },
];

export default function StoryScroller() {
  const [active, setActive] = React.useState(0);

  // Auto-advance slides unconditionally every 4 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  return (
    <div className="band band--story">
      <section className="story-section" aria-label="What SIGAI is">
        <div className="shell story__grid">
          {/* Narrative Column */}
          <div className="story__left">
            <div className="story__stage">
              {SLIDES.map((s, i) => (
                <article key={s.badge} className="story__slide" data-on={i === active}>
                  <h2 className="story__title">{s.title}</h2>
                  <p className="story__body">{s.body}</p>
                </article>
              ))}
            </div>

            {/* Controls & CTA */}
            <div className="story__actions">
              <Button href="/about" variant="gold">
                MORE ABOUT SIGAI
              </Button>

              <div className="story__nav-controls">
                <div className="story__dots" role="tablist" aria-label="Story slides">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.badge}
                      type="button"
                      className={`story__dot ${i === active ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                      aria-label={`Slide ${i + 1}: ${s.title}`}
                      role="tab"
                      aria-selected={i === active}
                    />
                  ))}
                </div>

                <div className="story__arrows">
                  <button
                    type="button"
                    className="story__arrow-btn"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="story__arrow-btn"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Frame: Pure images with defined border */}
          <div className="story__right" aria-hidden="true">
            <div className="story__frame">
              {SLIDES.map((s, i) => (
                <div
                  key={s.badge}
                  className={`story__slide-visual ${i === active ? 'is-active' : ''}`}
                >
                  <div className="story__image-wrap">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      priority={i <= 1}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="story__badge">
                      <span>{s.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
