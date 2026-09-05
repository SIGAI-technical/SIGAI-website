/**
 * Glitch cube geometry, sticker art and particle fields.
 *
 * Ported from the `Glitch Cube Hero` design prototype. The random sequences are
 * order-sensitive: every `rnd()` call below is consumed in the same order as the
 * original so the generated stickers come out identical. Don't reorder them.
 */

export const PALETTE = {
  ink: '#05060B',
  cubeInk: '#0B0B0F',
  cream: '#EDE6D6',
  blue: '#2B5FFF',
  yellow: '#F5C518',
  muted: '#8B94AD',
  dim: '#5F6880',
  line: '#141A2E',
  lineSoft: '#17224A',
  panel: '#101728',
  panelDeep: '#080B16',
  dot: '#191C24',
} as const;

/** Cubie edge length, and the spacing between cubie centres. */
export const CUBIE = 136;
export const STEP = 142;
export const HALF = CUBIE / 2;
/** The cube stage is a fixed square; the hero scales it down to fit. */
export const STAGE = 660;

type Rnd = () => number;

/** mulberry32 — deterministic, so every render produces the same cube. */
function rng(seed: number): Rnd {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Multiply a hex colour's channels by `f` — used to darken faces by depth. */
function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.max(0, Math.min(255, Math.round(v * f))),
  );
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

function uri(svg: string): string {
  return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
}

type Rect = [number, number, number, number];

function rects(list: Rect[], fill: string): string {
  return list
    .map(
      (r) =>
        `<rect x='${r[0]}' y='${r[1]}' width='${r[2]}' height='${r[3]}' fill='${fill}'/>`,
    )
    .join('');
}

/** Chunky circuit-trace motif: right-angle runs on a 2px module grid + square nodes. */
function blocks(rnd: Rnd): Rect[] {
  const out: Rect[] = [];
  const push = (x: number, y: number, w: number, h: number) =>
    out.push([
      Math.max(0, Math.min(8 - w, x)),
      Math.max(0, Math.min(8 - h, y)),
      w,
      h,
    ]);

  const runs = 2 + Math.floor(rnd() * 2);
  let x = 1 + Math.floor(rnd() * 2) * 2;
  let y = 1 + Math.floor(rnd() * 2) * 2;
  let horiz = rnd() < 0.5;

  for (let i = 0; i < runs; i++) {
    const len = 2 + Math.floor(rnd() * 2) * 2;
    if (horiz) {
      push(x, y, len, 1);
      x += rnd() < 0.6 ? len - 1 : -1;
    } else {
      push(x, y, 1, len);
      y += rnd() < 0.6 ? len - 1 : -1;
    }
    x = Math.max(0, Math.min(6, x));
    y = Math.max(0, Math.min(6, y));
    horiz = !horiz;
    if (rnd() < 0.7) push(x, y, 2, 2);
  }
  return out;
}

/** A single clean chunky bolt, no speckle. */
function bolt(rnd: Rnd): Rect[] {
  const out: Rect[] = [];
  let x = 2 + Math.floor(rnd() * 3);
  for (let y = 0; y < 8; y += 2) {
    out.push([Math.max(0, Math.min(6, x)), y, 2, 2]);
    x += (rnd() < 0.5 ? -1 : 1) * 2;
    x = Math.max(0, Math.min(6, x));
  }
  return out;
}

type StickerCode = 'k' | 'b' | 'y' | 'c' | 'L';

function sticker(code: Exclude<StickerCode, 'L'>, tone: number, rnd: Rnd): string {
  const P = { k: PALETTE.cubeInk, b: PALETTE.blue, y: PALETTE.yellow, c: PALETTE.cream };
  const base = shade(P[code], tone);

  let inner = '';
  // Always consumed, even when it yields no art — keeps the stream aligned.
  const glitchy = rnd() < 0.55;
  if ((code === 'k' || code === 'b') && glitchy) {
    inner = rects(blocks(rnd), shade('#FFFFFF', tone));
  } else if (code === 'y' && glitchy) {
    inner = rects(bolt(rnd), PALETTE.cubeInk);
  }

  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'>` +
    `<defs><clipPath id='r'><rect width='8' height='8' rx='1.1'/></clipPath></defs>` +
    `<g clip-path='url(#r)'><rect width='8' height='8' fill='${base}'/>${inner}</g></svg>`;

  return uri(svg) + ' center/78% 78% no-repeat';
}

/** The centre sticker of the front face — the SIGAI mark on a cream plate. */
function logoSticker(tone: number, logoSrc: string): string {
  const cream = shade(PALETTE.cream, tone);
  const plate =
    uri(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><rect width='8' height='8' rx='1.1' fill='${cream}'/></svg>`,
    ) + ' center/78% 78% no-repeat';
  return `url("${logoSrc}") center/56% 56% no-repeat, ${plate}`;
}

export type Face = 'up' | 'down' | 'front' | 'back' | 'right' | 'left';

export interface Cubie {
  pos: [number, number, number];
  /** Accumulated resting transform; completed turns are baked into it. */
  base: string;
  /** Current transform, including any in-flight turn. */
  tf: string;
  faces: Record<Face, string>;
}

const LAYOUTS: Record<Face, StickerCode[]> = {
  up: ['c', 'k', 'b', 'k', 'c', 'k', 'b', 'k', 'c'],
  front: ['b', 'b', 'b', 'b', 'L', 'b', 'b', 'b', 'b'],
  right: ['y', 'y', 'k', 'y', 'k', 'y', 'k', 'y', 'y'],
  left: ['k', 'b', 'k', 'b', 'c', 'b', 'k', 'b', 'k'],
  back: ['y', 'k', 'y', 'k', 'y', 'k', 'y', 'k', 'y'],
  down: ['k', 'c', 'k', 'c', 'k', 'c', 'k', 'c', 'k'],
};

/** Face brightness by depth — the lit top reads 1.0, the hidden underside 0.4. */
const TONES: Record<Face, number> = {
  up: 1.0,
  front: 0.8,
  right: 0.56,
  left: 0.5,
  back: 0.46,
  down: 0.4,
};

const SEEDS: Record<Face, number> = {
  up: 1337,
  front: 90210,
  right: 4242,
  left: 777,
  back: 5150,
  down: 31415,
};

/** Maps a cubie's grid position to its index within a face's 3x3 sticker layout. */
const INDEX: Record<Face, (x: number, y: number, z: number) => number> = {
  up: (x, _y, z) => (z + 1) * 3 + (x + 1),
  down: (x, _y, z) => (1 - z) * 3 + (x + 1),
  front: (x, y) => (y + 1) * 3 + (x + 1),
  back: (x, y) => (y + 1) * 3 + (1 - x),
  right: (_x, y, z) => (y + 1) * 3 + (1 - z),
  left: (_x, y, z) => (y + 1) * 3 + (z + 1),
};

export function restTransform(pos: [number, number, number]): string {
  const [x, y, z] = pos;
  return `translate3d(${x * STEP}px,${y * STEP}px,${z * STEP}px)`;
}

/**
 * Builds the 26 visible cubies. Faces pointing into the cube get a flat dim
 * blue; outward faces get a generated sticker over a tinted backing colour.
 */
export function buildCubies(logoSrc: string): Cubie[] {
  const rnds = {} as Record<Face, Rnd>;
  (Object.keys(SEEDS) as Face[]).forEach((k) => (rnds[k] = rng(SEEDS[k])));

  const list: Cubie[] = [];
  for (let y = -1; y <= 1; y++) {
    for (let z = 1; z >= -1; z--) {
      for (let x = -1; x <= 1; x++) {
        if (x === 0 && y === 0 && z === 0) continue;

        const pos: [number, number, number] = [x, y, z];
        const base = restTransform(pos);
        const faces = {} as Record<Face, string>;

        const outward: Record<Face, boolean> = {
          up: y === -1,
          down: y === 1,
          front: z === 1,
          back: z === -1,
          right: x === 1,
          left: x === -1,
        };

        (Object.keys(outward) as Face[]).forEach((dir) => {
          const tone = TONES[dir];
          if (!outward[dir]) {
            faces[dir] = shade(PALETTE.blue, tone * 0.72);
            return;
          }
          const code = LAYOUTS[dir][INDEX[dir](x, y, z)];
          const art =
            code === 'L' ? logoSticker(tone, logoSrc) : sticker(code, tone, rnds[dir]);
          faces[dir] = `${art}, ${shade(PALETTE.blue, tone)}`;
        });

        list.push({ pos, base, tf: base, faces });
      }
    }
  }
  return list;
}

export type Axis = 'X' | 'Y' | 'Z';

export interface Move {
  axis: Axis;
  /** Index into `pos` that the layer is selected by: 0=x, 1=y, 2=z. */
  ax: 0 | 1 | 2;
  layer: -1 | 1;
  dir: 1 | -1;
}

const SCRAMBLE: Move[] = [
  { axis: 'Y', ax: 1, layer: -1, dir: 1 },
  { axis: 'X', ax: 0, layer: 1, dir: -1 },
  { axis: 'Z', ax: 2, layer: 1, dir: 1 },
  { axis: 'Y', ax: 1, layer: 1, dir: -1 },
  { axis: 'X', ax: 0, layer: -1, dir: 1 },
  { axis: 'Z', ax: 2, layer: -1, dir: -1 },
];

/** Scramble, then its exact inverse — the cube always returns to solved. */
export const SEQUENCE: Move[] = SCRAMBLE.concat(
  SCRAMBLE.slice()
    .reverse()
    .map((m) => ({ ...m, dir: -m.dir as 1 | -1 })),
);

export function rotatePos(
  p: [number, number, number],
  axis: Axis,
  deg: number,
): [number, number, number] {
  const r = (deg * Math.PI) / 180;
  const s = Math.round(Math.sin(r));
  const c = Math.round(Math.cos(r));
  const [x, y, z] = p;
  if (axis === 'X') return [x, y * c - z * s, y * s + z * c];
  if (axis === 'Y') return [x * c + z * s, y, -x * s + z * c];
  return [x * c - y * s, x * s + y * c, z];
}

/**
 * Scattered dot field rendered as one background SVG. Two of these sit in front
 * of and behind the cube to give the frame some depth.
 */
export function dotLayer(
  seed: number,
  clusters: number,
  lone: number,
  maxR: number,
  col: string = PALETTE.dot,
): string {
  const rnd = rng(seed);
  let s = '';

  for (let c = 0; c < clusters; c++) {
    const cx = 40 + rnd() * 1120;
    const cy = 30 + rnd() * 700;
    const cols = 3 + Math.floor(rnd() * 4);
    const rows = 3 + Math.floor(rnd() * 4);
    const step = 7 + rnd() * 5;
    const r = 1.4 + rnd() * 1.2;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Punch holes in the grid so clusters read as eroded, not printed.
        if (rnd() < 0.25) continue;
        s += `<circle cx='${(cx + i * step).toFixed(1)}' cy='${(cy + j * step).toFixed(
          1,
        )}' r='${r.toFixed(2)}' fill='${col}'/>`;
      }
    }
  }

  for (let i = 0; i < lone; i++) {
    s += `<circle cx='${(rnd() * 1200).toFixed(1)}' cy='${(rnd() * 760).toFixed(
      1,
    )}' r='${(1.5 + rnd() * maxR).toFixed(2)}' fill='${col}'/>`;
  }

  return (
    uri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'>${s}</svg>`) +
    ' center/100% 100% no-repeat'
  );
}
