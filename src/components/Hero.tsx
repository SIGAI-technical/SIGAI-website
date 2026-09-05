import CubeStage from './CubeStage';
import Reveal from './Reveal';
import { Icon } from './ui';
import { ORG, TICKER } from '@/lib/content';
import { PALETTE } from '@/lib/cube';

export default function Hero({ logoSrc }: { logoSrc: string }) {
  return (
    <section id="home" className="grid-bg" style={{ position: 'relative' }}>
      <div
        className="shell"
        style={{
          display: 'grid',
          // min() keeps the track from overflowing viewports narrower than 360px.
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
          alignItems: 'center',
          gap: 48,
          paddingTop: 'clamp(48px, 6vw, 72px)',
          paddingBottom: 'clamp(56px, 7vw, 88px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 26,
          }}
        >
          <Reveal>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '7px 13px',
                border: `1px solid ${PALETTE.lineSoft}`,
                borderRadius: 4,
                background: PALETTE.panelDeep,
              }}
            >
              <span
                className="status-dot"
                aria-hidden
                style={{ width: 6, height: 6, background: PALETTE.yellow, flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '2.6px',
                  textTransform: 'uppercase',
                  color: PALETTE.muted,
                }}
              >
                Student Chapter &nbsp;·&nbsp; ACM Affiliated
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 'clamp(21px, 2.9vw, 40px)',
                lineHeight: 1.55,
                letterSpacing: '-0.5px',
                color: PALETTE.cream,
              }}
            >
              IF YOUR MIND
              <br />
              CAN THINK,
              <br />
              <span style={{ color: PALETTE.blue }}>SO CAN MINE!</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="rule" aria-hidden />
          </Reveal>

          <Reveal delay={180}>
            <p
              style={{
                maxWidth: 480,
                margin: 0,
                fontSize: 16,
                lineHeight: 1.75,
                color: PALETTE.muted,
                textWrap: 'pretty',
              }}
            >
              <span style={{ color: PALETTE.cream, fontWeight: 600 }}>{ORG.name}</span> — the{' '}
              {ORG.expansion}, and the {ORG.chapterDescriptor} of {ORG.college}, affiliated with
              the {ORG.parentBody}.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a href="#events" className="btn btn--primary">
                EXPLORE SIGAI
                <span aria-hidden style={{ display: 'flex', gap: 3 }}>
                  <span style={{ width: 5, height: 5, background: 'currentColor' }} />
                  <span style={{ width: 5, height: 5, background: 'currentColor' }} />
                  <span style={{ width: 5, height: 5, background: 'currentColor' }} />
                </span>
              </a>
              <a href="#about" className="btn btn--ghost">
                ABOUT US
                <Icon name="arrow" size={13} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <CubeStage logoSrc={logoSrc} />
        </Reveal>
      </div>

      {/* Terminology ticker, carried over from the source site's hero. */}
      <div
        className="marquee"
        style={{
          borderTop: `1px solid ${PALETTE.line}`,
          borderBottom: `1px solid ${PALETTE.line}`,
          paddingBlock: 14,
          background: PALETTE.panelDeep,
        }}
        aria-hidden
      >
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: 'flex', gap: 44 }}>
              {TICKER.map((t) => (
                <span key={`${copy}-${t}`} className="marquee__item">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
