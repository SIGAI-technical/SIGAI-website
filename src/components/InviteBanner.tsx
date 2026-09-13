import * as React from 'react';
import Link from 'next/link';
import { SOCIALS } from '@/lib/content';
import { SocialIcon } from './ui';

/**
 * Invite banner ("Come build with SIGAI"):
 * Displays action buttons and social links using SVG icon symbols (LinkedIn, Instagram, X).
 */
export default function InviteBanner() {
  return (
    <div className="band band--invite">
      <section className="section invite-section" aria-label="Join SIGAI">
        <div className="shell">
          <div className="popup">
            <div className="invite">
              <div className="invite__grid">
                <div className="invite__copy">
                  <span className="eyebrow">Open to every student</span>
                  <h2 className="invite__title">
                    Come build with <span className="mark">SIGAI</span>
                  </h2>
                  <p className="invite__body">
                    Come to the seminars and workshops, take part in the events, or just reach out.
                    The chapter is open to all students who want to explore AI, ML and Deep Learning
                    together.
                  </p>
                </div>

                <div className="invite__actions">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                    <span className="magnetic">
                      <a className="btn btn--gold" href="mailto:djs.sigai@gmail.com">
                        Email SIGAI
                        <span className="btn__icon" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.13L4.4 7H19.6L12 13.13ZM4 17h16V9.2l-8 6.4-8-6.4V17Z" />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <span className="magnetic">
                      <Link className="btn btn--ghost" href="/events">
                        See the events
                        <span className="btn__icon" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.2 5.4 20 12l-6.8 6.6-1.4-1.44L16.2 13H4v-2h12.2l-4.4-4.16 1.4-1.44Z" />
                          </svg>
                        </span>
                      </Link>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`SIGAI on ${s.label}`}
                      >
                        <SocialIcon name={s.label} size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
