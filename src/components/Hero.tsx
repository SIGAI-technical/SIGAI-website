import CubeStage from './CubeStage';
import Reveal from './Reveal';
import { Button } from './ui';
import { ORG, TICKER } from '@/lib/content';

export default function Hero({ logoSrc }: { logoSrc: string }) {
  return (
    <section id="home" style={{ position: 'relative' }}>
      <div
        className="shell"
        style={{
          display: 'grid',
          // min() keeps the track from overflowing viewports narrower than 360px.
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
          alignItems: 'center',
          gap: 48,
          paddingTop: 'clamp(44px, 6vw, 76px)',
          paddingBottom: 'clamp(56px, 7vw, 92px)',
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
            <span className="eyebrow">
              <i
                className="status-dot"
                style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor' }}
              />
              Student Chapter &nbsp;·&nbsp; ACM Affiliated
            </span>
          </Reveal>

          <Reveal delay={60}>
            <p className="hero-welcome">
              Welcome to <span>DJS ACM SIGAI</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 'clamp(21px, 2.9vw, 40px)',
                lineHeight: 1.55,
                letterSpacing: '-0.5px',
                color: 'var(--cream)',
              }}
            >
              IF YOUR MIND
              <br />
              CAN THINK,
              <br />
              <span className="mark">SO CAN MINE!</span>
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
                color: 'var(--muted)',
                textWrap: 'pretty',
              }}
            >
              <span style={{ color: 'var(--cream)', fontWeight: 600 }}>{ORG.name}</span> — the{' '}
              {ORG.expansion}, and the {ORG.chapterDescriptor} of {ORG.college}, affiliated with the{' '}
              {ORG.parentBody}.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Button href="/events" variant="primary">
                EXPLORE SIGAI
              </Button>
              <Button href="/about" variant="ghost">
                ABOUT US
              </Button>
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
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          paddingBlock: 14,
          background: 'rgba(8,11,22,0.6)',
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
