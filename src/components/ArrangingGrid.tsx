'use client';

import * as React from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';

/**
 * Cards open as a gathered stack — the `animated-cards-stack` look — and deal
 * themselves out into the real grid as the section scrolls in.
 *
 * The grid is the *resting* layout: plain responsive CSS. The deck is only a
 * transform offset from it, so if JS or measurement never runs the cards just
 * sit in the grid.
 *
 * Measurement uses `offsetLeft` / `offsetTop` against a `position: relative`
 * grid, NOT `getBoundingClientRect`: the bounding rect includes the transform
 * we just applied, so re-measuring would feed each card's own displacement
 * back in and the offsets would compound.
 */

interface Delta {
  x: number;
  y: number;
}

function DeckCard({
  children,
  delta,
  index,
  count,
  progress,
  disabled,
}: {
  children: React.ReactNode;
  delta: Delta;
  index: number;
  count: number;
  progress: MotionValue<number>;
  disabled: boolean;
}) {
  // Each card leaves the deck a beat after the one in front of it.
  const span = 0.4;
  const start = count > 1 ? Math.min(0.52, (index / count) * 0.62) : 0;
  const end = Math.min(1, start + span);

  const t = useTransform(progress, [start, end], [0, 1], { clamp: true });
  // A little spring so cards settle instead of snapping to a stop.
  const s = useSpring(t, { stiffness: 110, damping: 20, mass: 0.7 });

  // Deck geometry: a tight, uniform per-card increment radiating from one
  // anchor point — the same idea as a physical stack of photographs, where
  // each sheet peeks out from behind the last by a few consistent pixels.
  // Capped so an 8-card archive still reads as one neat stack, not a spiral.
  const lean = Math.min(index * 1.4, 7);
  const deckY = Math.min(index * 4, 22);
  const deckZ = -Math.min(index * 8, 48);
  const deckScale = 1 - Math.min(index * 0.01, 0.06);

  const x = useTransform(s, (v) => delta.x * (1 - v));
  const y = useTransform(s, (v) => (delta.y + deckY) * (1 - v));
  const z = useTransform(s, (v) => deckZ * (1 - v));
  const rotate = useTransform(s, (v) => lean * (1 - v));
  const scale = useTransform(s, (v) => 1 - (1 - deckScale) * (1 - v));

  if (disabled) return <div style={{ height: '100%' }}>{children}</div>;

  return (
    <motion.div
      style={{
        height: '100%',
        x,
        y,
        z,
        rotate,
        scale,
        transformOrigin: 'center bottom',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        // Front of the deck stays on top while gathered.
        zIndex: count - index,
        willChange: 'transform',
        // Static drop shadow: animating `filter` repaints every frame.
        boxShadow: '0 14px 30px -18px rgba(0,0,0,0.6)',
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ArrangingGrid({
  children,
  className,
  /** Re-measure when this changes (e.g. a filter swaps the cards). */
  resetKey,
}: {
  children: React.ReactNode;
  className?: string;
  resetKey?: string | number;
}) {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);
  const [deltas, setDeltas] = React.useState<Delta[]>([]);
  const reduced = useReducedMotion();

  /**
   * Phones get the plain grid. In a single column the gather becomes a long
   * vertical fling that reads badly, and this is the heaviest animation on the
   * page — not worth the frames on a small device.
   */
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const sync = (e: MediaQueryList | MediaQueryListEvent) => setNarrow(e.matches);
    sync(mq);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start 82%', 'center 52%'],
  });

  /**
   * The deal-out plays once. After it completes the cards drop out of motion
   * entirely and become static grid items — scrolling back up never re-gathers
   * them, and nothing is left driving springs on every scroll frame.
   */
  const [settled, setSettled] = React.useState(false);
  /**
   * Guard against latching before the deal-out has actually played. On mount
   * the progress can read 1 straight away — scroll restoration, or the intro
   * holding `body { overflow: hidden }` — and latching then would freeze the
   * cards in the grid and the animation would never run. We only allow the
   * latch once we've genuinely seen the deck gathered.
   */
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    if (settled) return;
    const stop = scrollYProgress.on('change', (v) => {
      if (v < 0.5) startedRef.current = true;
      if (startedRef.current && v >= 0.99) {
        window.setTimeout(() => setSettled(true), 700);
      }
    });
    return stop;
  }, [scrollYProgress, settled]);

  React.useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const kids = Array.from(grid.children) as HTMLElement[];
      if (!kids.length) return;

      // The grid is position:relative, so these offsets are relative to it and
      // are unaffected by any transform currently applied to the cards.
      //
      // The deck gathers centred horizontally but on the FIRST ROW, not the
      // grid's vertical centre: a tall grid would otherwise park the deck a
      // thousand pixels below the fold and the opening frame would be empty.
      const cx = grid.clientWidth / 2;
      const cy = kids[0].offsetTop + kids[0].offsetHeight / 2;

      setDeltas(
        kids.map((el) => ({
          x: cx - (el.offsetLeft + el.offsetWidth / 2),
          y: cy - (el.offsetTop + el.offsetHeight / 2),
        })),
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [resetKey, items.length]);

  return (
    <div ref={gridRef} className={className}>
      {items.map((child, i) => (
        <DeckCard
          key={i}
          index={i}
          count={items.length}
          delta={deltas[i] ?? { x: 0, y: 0 }}
          progress={scrollYProgress}
          disabled={narrow || settled || Boolean(reduced) || deltas.length === 0}
        >
          {child}
        </DeckCard>
      ))}
    </div>
  );
}
