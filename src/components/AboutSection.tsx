"use client";
import * as React from 'react';
import Image from 'next/image';
import { AREAS } from '@/lib/content';

/**
 * AboutSection component:
 * Balanced, elegant presentation of DJS ACM SIGAI's identity, credentials,
 * four vision pillars, core focus domains, and chapter navigation.
 */
export default function AboutSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <>
      <div id="about" className="anchor-target" />

      {/* WHO WE ARE */}
      <div className="band band--about" style={!showHeading ? { paddingTop: 0 } : undefined}>
        <div className="section">
          <div className="shell">
            {showHeading && (
              <div className="popup">
                <h2 className="section-title">
                  Who we <span className="mark">are</span>
                </h2>
                <span className="rule rule--draw" aria-hidden="true" />
              </div>
            )}

            {/* Rebalanced 2-column layout: Narrative on left, balanced showcase card on right */}
            <div className="about__grid">
              <div className="about__narrative popup" style={{ ['--popup-delay' as string]: '60ms' }}>
                <p className="about__lead-text">
                  DJS ACM SIGAI is the official student chapter for Artificial Intelligence and
                  Machine Learning at SVKM&apos;s Dwarkadas J. Sanghvi College of Engineering.
                </p>
                <p className="about__body-text">
                  Affiliated with the Association for Computing Machinery (ACM), SIGAI brings
                  students together to learn, explore, and engage with artificial intelligence
                  beyond the classroom. We organize seminars, workshops, hackathons, and other
                  technical events that connect foundational concepts with current developments in AI.
                </p>
                <p className="about__body-text">
                  Our activities range from mathematical foundations and machine learning fundamentals to neural architectures and generative AI, helping students understand both the foundations and the latest developments in the field.
                </p>
              </div>

              {/* Balanced chapter visual card */}
              <div
                className="about__card popup"
                style={{
                  ['--popup-delay' as string]: '120ms',
                }}
              >
                <div className="about__card-media">
                  <Image
                    src="/images/ipd-seminar.jpeg"
                    alt="DJS ACM SIGAI IPD Seminar - Applied Artificial Intelligence"
                    fill
                    sizes="(max-width: 960px) 100vw, 480px"
                    priority
                  />
                </div>
                <div className="about__card-specs">
                  <div className="about__spec-item">
                    <span className="about__spec-label">Chapter</span>
                    <span className="about__spec-val">ACM SIGAI</span>
                  </div>
                  <div className="about__spec-item">
                    <span className="about__spec-label">Founded</span>
                    <span className="about__spec-val">Academic Year 2023</span>
                  </div>
                  <div className="about__spec-item">
                    <span className="about__spec-label">Department</span>
                    <span className="about__spec-val">AI &amp; ML</span>
                  </div>
                  <div className="about__spec-item">
                    <span className="about__spec-label">Community</span>
                    <span className="about__spec-val">Student-Led &amp; Driven</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rebalanced Chapter Credentials: Modern glass cards */}
            <div className="facts-grid popup" style={{ ['--popup-delay' as string]: '160ms' }}>
              <div className="facts-card">
                <div className="facts-card__top">
                  <span className="facts-card__label">Chapter</span>
                  <span className="facts-card__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="facts-card__val">DJS ACM SIGAI</h3>
                  <p className="facts-card__sub">Special Interest Group on Artificial Intelligence</p>
                </div>
              </div>

              <div className="facts-card">
                <div className="facts-card__top">
                  <span className="facts-card__label">Department</span>
                  <span className="facts-card__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="facts-card__val">AI &amp; ML</h3>
                  <p className="facts-card__sub">Department of Artificial Intelligence &amp; Machine Learning</p>
                </div>
              </div>

              <div className="facts-card">
                <div className="facts-card__top">
                  <span className="facts-card__label">Affiliation</span>
                  <span className="facts-card__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="facts-card__val">ACM Global</h3>
                  <p className="facts-card__sub">Association for Computing Machinery, Chapter #188916</p>
                </div>
              </div>

              <div className="facts-card">
                <div className="facts-card__top">
                  <span className="facts-card__label">Institution</span>
                  <span className="facts-card__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18" />
                      <path d="M5 21V7l7-4 7 4v14" />
                      <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="facts-card__val">DJSCE Mumbai</h3>
                  <p className="facts-card__sub">SVKM&apos;s Dwarkadas J. Sanghvi College of Engineering</p>
                </div>
              </div>
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
              <p className="section-lede" style={{ maxWidth: '68ch' }}>
                We organize seminars, workshops, challenges, and conversations that help students learn AI beyond the classroom and connect with their peers.
              </p>
            </div>

            {/* Asymmetric editorial layout for vision cards */}
            <div className="vision-asym popup" style={{ ['--popup-delay' as string]: '90ms', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* LEARN – largest element */}
              <div className="vision-item" style={{ fontSize: '1.8rem' }}>
                <div className="vision-header">
                  <span className="vision-number">01</span>
                  <span className="vision-concept">LEARN</span>
                </div>
                <h3 className="vision-card__title">First-Principles Seminars</h3>
                <p className="vision-card__desc">Technical sessions that break down AI and machine learning concepts from the fundamentals, helping students build understanding rather than simply use tools.</p>
                <hr className="vision-divider" />
                <span className="vision-arrow">→</span>
              </div>

              {/* EXPLORE – offset right */}
              <div className="vision-card" style={{ marginLeft: '4rem' }}>
                <span className="vision-card__num">02 / EXPLORE</span>
                <h3 className="vision-card__title">Research & Emerging AI</h3>
                <p className="vision-card__desc">Sessions and discussions that introduce students to research papers, emerging architectures, generative AI, and ideas shaping the field.</p>
              </div>

              {/* COMPETE – medium size */}
              <div className="vision-card" style={{ marginTop: '-1rem' }}>
                <span className="vision-card__num">03 / COMPETE</span>
                <h3 className="vision-card__title">Hackathons & Challenges</h3>
                <p className="vision-card__desc">Hackathons, technical challenges, and campus events that give students opportunities to apply their knowledge, solve problems, and collaborate under real constraints.</p>
              </div>

              {/* CONNECT – smaller, aligned right */}
              <div className="vision-card" style={{ alignSelf: 'flex-end' }}>
                <span className="vision-card__num">04 / CONNECT</span>
                <h3 className="vision-card__title">A Student Community</h3>
                <p className="vision-card__desc">A space where students can meet peers, speakers, mentors, and fellow learners, exchange ideas, discover opportunities, and grow together.</p>
              </div>
            </div>
            <style jsx>{`
              .vision-asym .vision-card__num {
                font-weight: 600;
                color: var(--color-accent-blue);
              }
            `}</style>

            {/* FOCUS DOMAINS */}
            <div className="popup" style={{ ['--popup-delay' as string]: '140ms', marginTop: 'clamp(48px, 6vw, 72px)' }}>
              <span className="eyebrow">Technical Focus</span>
              <h3 className="section-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)' }}>
                Domains we <span className="mark">explore</span>
              </h3>
              <p className="section-lede" style={{ maxWidth: '64ch' }}>
                Core strands that shape our curriculum, workshop syllabus, and technical discussions.
              </p>

              <div className="domains-grid">
                {AREAS.map((area) => (
                  <div key={area.term} className="domain-card">
                    <div className="domain-card__top">
                      <h4 className="domain-card__term">{area.term}</h4>
                      <span className="domain-card__notation">{area.notation}</span>
                    </div>
                    <p className="domain-card__blurb">{area.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
