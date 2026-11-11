/**
 * Concentric word-heart layout engine.
 *
 * Every ring is a heart curve. Each ring is split into 4 arcs (upper-right,
 * lower-right, lower-left, upper-left) that are all walked in a left→right
 * reading direction, so text is never upside-down. Every word is measured and
 * becomes a short path segment (used with <textPath>), so the letters bend with
 * the heart. A word is only accepted if its centerline keeps a safe distance
 * from every other placed word and from the center heart => zero overlap.
 *
 * Both hearts (intro + birthday) share exactly the same font / size / color.
 */

export const HEART_CX = 325;
export const HEART_CY = 292;

export const WORD_FONT_SIZE = 14;
export const WORD_FONT_WEIGHT = 700;
export const WORD_FONT_FAMILY = "Cairo, sans-serif";
export const WORD_COLOR = "#ff5c8a";

export const CENTER_HEART_SCALE = 2.3;
const RING_START = 4.9;
const RING_STEP = 1.6;
const RING_COUNT = 9;

/** min distance between centerlines of two different words */
const WORD_CLEARANCE = 18;
/** min distance between a word centerline and the solid center heart */
const CENTER_CLEARANCE = 16;
const BOUND_MIN = 10;
const BOUND_MAX = 640;
const SAMPLE_STEP = 3;
/** baseline sits slightly below the centerline so glyphs are visually centered */
const BASELINE_SHIFT = WORD_FONT_SIZE * 0.34;

const ARABIC_RE = /[\u0600-\u06FF]/;

export interface PlacedWord {
  text: string;
  /** path (in reading direction) the word is written along, length ≈ word width */
  d: string;
  rtl: boolean;
  ring: number;
}

export interface HeartLayout {
  words: PlacedWord[];
  centerPath: string;
}

interface Pt {
  x: number;
  y: number;
}

interface Arc {
  pts: { x: number; y: number; s: number }[];
  total: number;
}

export function heartPoint(t: number, scale: number): Pt {
  const x = HEART_CX + scale * (16 * Math.pow(Math.sin(t), 3));
  const y =
    HEART_CY -
    scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return { x, y };
}

function buildArc(scale: number, t0: number, t1: number, reverse: boolean, n = 600): Arc {
  const raw: Pt[] = [];
  for (let i = 0; i <= n; i++) raw.push(heartPoint(t0 + ((t1 - t0) * i) / n, scale));
  if (reverse) raw.reverse();
  const pts: Arc["pts"] = [];
  let total = 0;
  raw.forEach((p, i) => {
    if (i > 0) total += Math.hypot(p.x - raw[i - 1].x, p.y - raw[i - 1].y);
    pts.push({ x: p.x, y: p.y, s: total });
  });
  return { pts, total };
}

function arcPointAt(arc: Arc, sIn: number): Pt {
  const s = Math.max(0, Math.min(arc.total, sIn));
  let lo = 0;
  let hi = arc.pts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arc.pts[mid].s < s) lo = mid + 1;
    else hi = mid;
  }
  const i1 = Math.max(1, lo);
  const a = arc.pts[i1 - 1];
  const b = arc.pts[i1];
  const k = (s - a.s) / (b.s - a.s || 1);
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
}

/** tiny spatial hash for "is there any point within r of p" queries */
class PointGrid {
  private cell = 24;
  private map = new Map<number, Pt[]>();
  private key(ix: number, iy: number) {
    return (ix + 100) * 1000 + (iy + 100);
  }
  add(p: Pt) {
    const k = this.key(Math.floor(p.x / this.cell), Math.floor(p.y / this.cell));
    const list = this.map.get(k);
    if (list) list.push(p);
    else this.map.set(k, [p]);
  }
  near(p: Pt, r: number): boolean {
    const ix = Math.floor(p.x / this.cell);
    const iy = Math.floor(p.y / this.cell);
    const r2 = r * r;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const list = this.map.get(this.key(ix + dx, iy + dy));
        if (!list) continue;
        for (const q of list) {
          const ddx = q.x - p.x;
          const ddy = q.y - p.y;
          if (ddx * ddx + ddy * ddy < r2) return true;
        }
      }
    }
    return false;
  }
}

function centerlinePoints(arc: Arc, s0: number, s1: number): Pt[] {
  const pts: Pt[] = [];
  const count = Math.max(2, Math.ceil((s1 - s0) / SAMPLE_STEP));
  for (let i = 0; i <= count; i++) pts.push(arcPointAt(arc, s0 + ((s1 - s0) * i) / count));
  return pts;
}

/** baseline path: centerline pushed to the "down" side of the reading direction */
function baselinePath(arc: Arc, s0: number, s1: number): string {
  const count = Math.max(2, Math.ceil((s1 - s0) / SAMPLE_STEP));
  const parts: string[] = [];
  for (let i = 0; i <= count; i++) {
    const s = s0 + ((s1 - s0) * i) / count;
    const p = arcPointAt(arc, s);
    const a = arcPointAt(arc, s - 2);
    const b = arcPointAt(arc, s + 2);
    let tx = b.x - a.x;
    let ty = b.y - a.y;
    const len = Math.hypot(tx, ty) || 1;
    tx /= len;
    ty /= len;
    const x = p.x - ty * BASELINE_SHIFT;
    const y = p.y + tx * BASELINE_SHIFT;
    parts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return parts.join(" ");
}

interface ArcItem {
  text: string;
  s0: number;
  s1: number;
  pts: Pt[];
}

function runArc(
  arc: Arc,
  words: string[],
  widths: number[],
  startPtr: number,
  gap: number,
  grid: PointGrid,
  centerGrid: PointGrid,
) {
  const items: ArcItem[] = [];
  let cur = 0;
  let ptr = startPtr;

  const isFree = (pts: Pt[]) => {
    for (const p of pts) {
      if (p.x < BOUND_MIN || p.x > BOUND_MAX || p.y < BOUND_MIN || p.y > BOUND_MAX) return false;
      if (centerGrid.near(p, CENTER_CLEARANCE)) return false;
      if (grid.near(p, WORD_CLEARANCE)) return false;
    }
    return true;
  };

  let failures = 0;
  while (failures < 5) {
    const idx = ptr % words.length;
    const w = widths[idx];
    let placed = false;
    let probe = cur;
    while (probe + w <= arc.total) {
      const pts = centerlinePoints(arc, probe, probe + w);
      if (isFree(pts)) {
        items.push({ text: words[idx], s0: probe, s1: probe + w, pts });
        cur = probe + w + gap;
        placed = true;
        break;
      }
      probe += 2;
    }
    ptr++;
    if (placed) failures = 0;
    else failures++; // word did not fit anywhere – try the next (shorter?) word
  }

  if (items.length === 0) return null;
  const leftover = arc.total - items[items.length - 1].s1 + items[0].s0;
  return { items, ptr, leftover };
}

const ARCS: { t0: number; t1: number; reverse: boolean }[] = [
  { t0: 0, t1: Math.PI / 2, reverse: false }, // upper right (cleft → right edge)
  { t0: Math.PI / 2, t1: Math.PI, reverse: true }, // lower right (tip → right edge)
  { t0: Math.PI, t1: (3 * Math.PI) / 2, reverse: true }, // lower left (left edge → tip)
  { t0: (3 * Math.PI) / 2, t1: Math.PI * 2, reverse: false }, // upper left (left edge → cleft)
];

export function layoutHeart(words: string[], measure: (w: string) => number): HeartLayout {
  const widths = words.map((w) => Math.ceil(measure(w)) + 2);

  // solid center heart
  const centerPts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const p = heartPoint((i / 120) * Math.PI * 2, CENTER_HEART_SCALE);
    centerPts.push(`${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  const centerPath = centerPts.join(" ") + " Z";

  const centerGrid = new PointGrid();
  for (let i = 0; i < 400; i++) {
    centerGrid.add(heartPoint((i / 400) * Math.PI * 2, CENTER_HEART_SCALE));
  }

  const grid = new PointGrid();
  const out: PlacedWord[] = [];
  let ptr = 0;

  for (let ring = 0; ring < RING_COUNT; ring++) {
    const scale = RING_START + RING_STEP * ring;

    for (const def of ARCS) {
      const arc = buildArc(scale, def.t0, def.t1, def.reverse);

      let best: ReturnType<typeof runArc> = null;
      let bestScore = Infinity;
      for (let gap = 9; gap <= 24; gap += 1) {
        const res = runArc(arc, words, widths, ptr, gap, grid, centerGrid);
        if (!res) continue;
        const score = Math.abs(res.leftover - gap) - res.items.length * 0.05;
        if (score < bestScore) {
          bestScore = score;
          best = res;
        }
      }
      if (!best) continue;

      for (const it of best.items) {
        for (const p of it.pts) grid.add(p);
        out.push({
          text: it.text,
          d: baselinePath(arc, it.s0, it.s1),
          rtl: ARABIC_RE.test(it.text),
          ring,
        });
      }
      ptr = best.ptr;
    }
  }

  return { words: out, centerPath };
}
