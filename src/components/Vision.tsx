import Reveal from './Reveal';
import { VISION } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

/** The threads the vision statement itself names. */
const THREADS = ['Knowledge', 'Skills', 'Community', 'Seminars', 'Workshops', 'Year-round events'];

export default function Vision() {
  return (
    <section id="vision" className="section section--hairline">
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
              <span className="eyebrow">03 — Our Vision</span>
              <blockquote
                style={{
                  margin: '24px 0 0',
                  padding: 0,
                  fontSize: 'clamp(18px, 1.9vw, 25px)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  letterSpacing: '-0.3px',
                  color: PALETTE.cream,
                  textWrap: 'pretty',
                }}
              >
                {VISION.body}
              </blockquote>
              <div className="rule" style={{ marginTop: 30 }} aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
                gap: 12,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {THREADS.map((t) => (
                <li
                  key={t}
                  className="panel"
                  style={{
                    padding: '20px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 14,
                    fontWeight: 500,
                    color: PALETTE.cream,
                  }}
                >
                  <span
                    aria-hidden
                    style={{ width: 6, height: 6, background: PALETTE.yellow, flexShrink: 0 }}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
