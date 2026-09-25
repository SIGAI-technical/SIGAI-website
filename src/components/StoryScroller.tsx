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
    title: 'Start With the Fundamentals',
    body: 'SIGAI creates spaces for students to understand the ideas behind artificial intelligence — from mathematical foundations and core ML concepts to the architectures shaping modern AI.',
    image: '/events/seminar.png',
    alt: 'First Principles - Fundamentals Workshop',
    badge: 'FIRST PRINCIPLES',
  },
  {
    title: 'Explore — Research & Emerging AI',
    body: 'Creating opportunities to explore research papers, emerging architectures, generative AI, and ideas that extend beyond the classroom.',
    image: '/images/ipd-seminar.jpeg',
    alt: 'Research and Emerging AI',
    badge: 'RESEARCH & EMERGING AI',
  },
  {
    title: 'Learn by Doing',
    body: 'Workshops and technical sessions turn concepts into practical experience — giving students the opportunity to experiment with tools, techniques, and approaches used in modern AI.',
    image: '/events/ipd-seminar/IMG_1442.jpg',
    alt: 'Hands-on Learning Workshop',
    badge: 'WORKSHOPS',
  },
  {
    title: 'Compete. Collaborate. Solve.',
    body: 'Hackathons and technical challenges bring students together to tackle problems under real constraints, collaborate across disciplines, and put their knowledge to the test.',
    image: '/events/Clockout3.0/clockout3_cover.jpg',
    alt: 'Hackathons and Technical Challenges',
    badge: 'HACKATHONS',
  },
];

export default function StoryScroller() {
  const [active, setActive] = React.useState(0);

  // Clamp active index safely within bounds
  const slideIndex = active >= SLIDES.length ? 0 : active;

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
                <article key={s.badge} className="story__slide" data-on={i === slideIndex}>
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
                      className={`story__dot ${i === slideIndex ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                      aria-label={`Slide ${i + 1}: ${s.title}`}
                      role="tab"
                      aria-selected={i === slideIndex}
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
                  className={`story__slide-visual ${i === slideIndex ? 'is-active' : ''}`}
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
