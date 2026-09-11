'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { EVENTS } from '@/lib/content';

export default function EventDetailPage() {
  const params = useParams();

  const id = params.id as string;

  const event = EVENTS.find((item) => item.id === id);

  const [activeImage, setActiveImage] = useState(0);

  if (!event) {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--ink)',
          color: 'var(--cream)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              color: 'var(--blue-soft)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: 11,
            }}
          >
            Event not found
          </p>

          <Link
            href="/events"
            className="link-underline"
            style={{ marginTop: 20, display: 'inline-block' }}
          >
            Back to events
          </Link>
        </div>
      </main>
    );
  }

  const gallery = event.gallery ?? [];

  const allImages = event.image
    ? [event.image, ...gallery]
    : gallery;

  const nextImage = () => {
    setActiveImage((current) =>
      current === allImages.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? allImages.length - 1 : current - 1,
    );
  };

  return (
    <main className="event-detail">

      {/* HERO */}
      <section className="event-detail__hero">

        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="event-detail__hero-image"
          />
        )}

        <div className="event-detail__hero-gradient" />

        <div className="event-detail__hud">
          <span>SIG.AI // EVENT</span>
          <span>ID_{event.index}</span>
          <span>{event.year}</span>
        </div>

        <div className="event-detail__hero-content">

          <div className="event-detail__year">
            <span />
            {event.year}
          </div>

          <h1>
            {event.title}
          </h1>

          <div className="event-detail__hero-line" />

        </div>
      </section>


      {/* BODY */}
      <section className="event-detail__body">

        <div className="event-detail__timeline" />

        {/* TAGS */}
        <div className="event-detail__content">

          <div className="event-detail__pills">

            <span>SIGAI</span>

            <span>{event.year}</span>

            <span>Event #{event.index}</span>

          </div>


          {/* FULL DESCRIPTION */}
          <p className="event-detail__description">
            {event.description}
          </p>

        </div>


        {/* GALLERY */}
        {allImages.length > 0 && (
          <div className="event-detail__gallery">

            <div className="event-detail__gallery-heading">

              <span>GALLERY</span>

              <div />

              <small>
                {allImages.length} frames
              </small>

            </div>


            {/* THUMBNAILS */}
            <div className="event-detail__thumbnails">

              {allImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={
                    index === activeImage
                      ? 'event-detail__thumbnail active'
                      : 'event-detail__thumbnail'
                  }
                >
                  <Image
                    src={src}
                    alt={`${event.title} image ${index + 1}`}
                    fill
                    sizes="220px"
                  />

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}

            </div>


            {/* MAIN GALLERY IMAGE */}
            <div className="event-detail__viewer">

              <Image
                src={allImages[activeImage]}
                alt={`${event.title} gallery image`}
                fill
                sizes="(max-width: 900px) 100vw, 1000px"
                className="event-detail__viewer-image"
              />

              {/* Corner brackets */}
              <div className="event-detail__corner top-left" />
              <div className="event-detail__corner top-right" />
              <div className="event-detail__corner bottom-left" />
              <div className="event-detail__corner bottom-right" />

              {/* Previous */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  className="event-detail__gallery-arrow left"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              {/* Next */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  className="event-detail__gallery-arrow right"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              )}

              <div className="event-detail__counter">
                {String(activeImage + 1).padStart(2, '0')}
                {' / '}
                {String(allImages.length).padStart(2, '0')}
              </div>

            </div>

          </div>
        )}


        {/* BACK */}
        <div className="event-detail__back">

          <Link href="/events">
            <span />
            BACK TO EVENTS
          </Link>

        </div>

      </section>

    </main>
  );
}
