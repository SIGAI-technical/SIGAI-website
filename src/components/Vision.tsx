import Reveal from './Reveal';

import { VISION } from '@/lib/content';

/** The threads the vision statement itself names. */
const THREADS = ['Knowledge', 'Skills', 'Community', 'Seminars', 'Workshops', 'Year-round events'];

export default function Vision() {
  return (
    <section id="vision" className="section">
      <div className="shell">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(32px, 4vw, 64px)',
            alignItems: 'center',
          }}
        >
          <Reveal>
            <div>
              <span className="eyebrow">
                What we are working toward
              </span>
              <blockquote
                style={{
                  margin: '26px 0 0',
                  padding: 0,
                  fontSize: 'clamp(18px, 1.9vw, 26px)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  letterSpacing: '-0.3px',
                  color: 'var(--cream)',
                  textWrap: 'pretty',
                }}
              >
                {VISION.body}
              </blockquote>
              <div className="rule" style={{ marginTop: 32 }} aria-hidden />
            </div>
          </Reveal>

          {/* Plain rows, not cards — the vision statement is the object here. */}
          <Reveal delay={120}>
            <ol className="threads">
              {THREADS.map((t, i) => (
                <li key={t}>
                  <span className="threads__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="threads__t">{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
