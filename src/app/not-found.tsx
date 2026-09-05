import Image from 'next/image';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section
      className="shell"
      style={{
        minHeight: '62dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 24,
        paddingBlock: 'clamp(72px, 12vw, 150px)',
      }}
    >
      <Image
        src="/logo-mark-cream.png"
        alt=""
        width={40}
        height={52}
        style={{ width: 'auto', height: 60, opacity: 0.35 }}
      />

      <p
        style={{
          margin: 0,
          fontFamily: 'var(--display)',
          fontSize: 'clamp(30px, 6vw, 64px)',
          lineHeight: 1,
          color: 'var(--cream)',
        }}
      >
        4<span className="mark">0</span>4
      </p>

      <h1
        style={{
          margin: 0,
          fontSize: 'clamp(19px, 2.2vw, 26px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--cream)',
        }}
      >
        That page isn&apos;t here.
      </h1>

      <p
        style={{
          margin: 0,
          maxWidth: '46ch',
          fontSize: 16,
          lineHeight: 1.75,
          color: 'var(--muted)',
          textWrap: 'pretty',
        }}
      >
        The link may be out of date, or the page may have moved. Head back to the start, or go
        straight to the event archive.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 4 }}>
        <Button href="/" variant="gold">
          BACK HOME
        </Button>
        <Button href="/events" variant="ghost">
          SEE EVENTS
        </Button>
      </div>
    </section>
  );
}
