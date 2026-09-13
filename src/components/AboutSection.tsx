import * as React from 'react';
import Link from 'next/link';
import { SOCIALS } from '@/lib/content';
import { SocialIcon } from './ui';

/**
 * AboutSection component matching index_8.html:
 * Integrates "Who we are", "Our vision" with threads, and the "Come build with SIGAI" invite banner.
 */
export default function AboutSection() {
  return (
    <>
      <div id="about" className="anchor-target" />

      {/* WHO WE ARE */}
      <div className="band band--about">
        <div className="section">
          <div className="shell">
            <div className="popup">
              <span className="eyebrow">About us</span>
              <h2 className="section-title">
                Who we <span className="mark">are</span>
              </h2>
              <span className="rule rule--draw" aria-hidden="true" />
            </div>

            <div className="popup" style={{ ['--popup-delay' as string]: '60ms' }}>
              <p className="about__lead">
                DJS ACM SIGAI (Special Interest Group on Artificial Intelligence) is a student
                chapter founded by Dwarkadas J. Sanghvi College of Engineering students in the
                Artificial Intelligence and Machine Learning (AI&amp;ML) department.
              </p>
            </div>

            <div className="about__body">
              <div className="popup" style={{ ['--popup-delay' as string]: '80ms' }}>
                <p className="about__rest">
                  SIGAI is affiliated with the Association for Computing Machinery (ACM), a U.S.-based
                  non-profit dedicated to education in the computing field. Our student chapter&apos;s
                  mission is to promote and support the development and application of AI principles
                  and techniques throughout the computing industry.
                </p>
              </div>

              <div
                className="popup"
                style={{
                  ['--popup-delay' as string]: '140ms',
                  ['--popup-angle' as string]: '18deg',
                }}
              >
                <figure className="about__figure">
                  <div className="ph">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 8a5 5 0 1 1 0-10A5 5 0 0 1 12 17ZM1 7h3.5l2-2h11l2 2H23a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
                    </svg>
                    <span>DJS ACM SIGAI Student Chapter</span>
                  </div>
                  <figcaption className="about__caption">DJS ACM SIGAI, DJSCE Mumbai</figcaption>
                </figure>
              </div>
            </div>

            <div className="popup" style={{ ['--popup-delay' as string]: '100ms' }}>
              <dl className="facts">
                <div>
                  <dt>Chapter</dt>
                  <dd>DJS ACM SIGAI</dd>
                </div>
                <div>
                  <dt>Department</dt>
                  <dd>Artificial Intelligence &amp; Machine Learning</dd>
                </div>
                <div>
                  <dt>Affiliation</dt>
                  <dd>Association for Computing Machinery (ACM)</dd>
                </div>
                <div>
                  <dt>College</dt>
                  <dd>SVKM&apos;s Dwarkadas J. Sanghvi College of Engineering</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* OUR VISION */}
      <div className="band band--areas">
        <div className="section">
          <div className="shell">
            <div className="popup">
              <span className="eyebrow">Our vision</span>
              <h2 className="section-title">
                Knowledge, skills, and a <span className="mark">community</span>
              </h2>
              <p className="section-lede">
                We strive to enable students to gain knowledge, skills and develop as a community by
                introducing them to the rapidly expanding and increasingly interdisciplinary field of
                Artificial Intelligence, Machine Learning and Deep Learning through seminars,
                skill-building workshops, and events throughout the year.
              </p>
            </div>

            <div className="popup" style={{ ['--popup-delay' as string]: '90ms' }}>
              <ol className="threads" style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}>
                <li>
                  <span className="threads__n">01</span>
                  <span className="threads__t">Seminars that start from first principles</span>
                </li>
                <li>
                  <span className="threads__n">02</span>
                  <span className="threads__t">Skill-building workshops through the year</span>
                </li>
                <li>
                  <span className="threads__n">03</span>
                  <span className="threads__t">Events that put the ideas to work</span>
                </li>
                <li>
                  <span className="threads__n">04</span>
                  <span className="threads__t">A community of students around the field</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* COME BUILD WITH SIGAI INVITE */}
      <div className="band band--invite">
        <section className="section invite-section">
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
    </>
  );
}
