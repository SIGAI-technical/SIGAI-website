import * as React from 'react';
import Image from 'next/image';
import { AREAS } from '@/lib/content';

/**
 * AboutSection component:
 * Balanced, elegant presentation of DJS ACM SIGAI's identity, credentials,
 * four vision pillars, core focus domains, and chapter navigation.
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
              <h2 className="section-title">
                Who we <span className="mark">are</span>
              </h2>
              <span className="rule rule--draw" aria-hidden="true" />
            </div>

            {/* Rebalanced 2-column layout: Narrative on left, balanced showcase card on right */}
            <div className="about__grid">
              <div className="about__narrative popup" style={{ ['--popup-delay' as string]: '60ms' }}>
                <p className="about__lead-text">
                  DJS ACM SIGAI is the official student chapter for Artificial Intelligence and
                  Machine Learning at SVKM&apos;s Dwarkadas J. Sanghvi College of Engineering.
                </p>
                <p className="about__body-text">
                  Affiliated with the Association for Computing Machinery (ACM), our chapter is
                  dedicated to advancing education, research, and practical innovation in computing.
                  We bring students together across disciplines to explore the theoretical principles
                  and transformative applications of AI.
                </p>
                <p className="about__body-text">
                  From mathematical foundations and loss landscapes to modern neural architectures
                  and generative models, we empower students to move beyond surface-level tooling and
                  engineer solutions from first principles.
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
                We cultivate an environment where students gain deep conceptual intuition,
                practical engineering skills, and collaborative bonds across four core pillars.
              </p>
            </div>

            {/* Balanced 2x2 Vision Pillars */}
            <div className="vision-grid popup" style={{ ['--popup-delay' as string]: '90ms' }}>
              <div className="vision-card">
                <span className="vision-card__num">01 / FOUNDATION</span>
                <h3 className="vision-card__title">First-Principles Seminars</h3>
                <p className="vision-card__desc">
                  Rigorous academic sessions deconstructing foundational mathematics, loss functions,
                  and deep learning theory from the ground up, giving members an enduring conceptual foundation.
                </p>
              </div>

              <div className="vision-card">
                <span className="vision-card__num">02 / GUIDANCE</span>
                <h3 className="vision-card__title">Future Pathways &amp; Seminars</h3>
                <p className="vision-card__desc">
                  Engaging seminars and expert conversations focused on student futures, including navigating a master's degree abroad, career guidance, and academic progression.
                </p>
              </div>

              <div className="vision-card">
                <span className="vision-card__num">03 / APPLICATION</span>
                <h3 className="vision-card__title">Flagship Events &amp; Quests</h3>
                <p className="vision-card__desc">
                  Competitive hackathons, inter-collegiate challenges, and signature campus-wide events
                  like Clockout and Synergy that put analytical thinking and teamwork into fast-paced practice.
                </p>
              </div>

              <div className="vision-card">
                <span className="vision-card__num">04 / ECOSYSTEM</span>
                <h3 className="vision-card__title">An Inclusive Peer Community</h3>
                <p className="vision-card__desc">
                  A thriving student collective connecting curious beginners with senior researchers,
                  alumni engineers, and peer mentors to build, publish, and grow together.
                </p>
              </div>
            </div>

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
