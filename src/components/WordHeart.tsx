import { useEffect, useId, useRef, useState } from "react";
import {
  WORD_COLOR,
  WORD_FONT_FAMILY,
  WORD_FONT_SIZE,
  WORD_FONT_WEIGHT,
  layoutHeart,
  type HeartLayout,
} from "../lib/heartLayout";

interface Props {
  words: string[];
  /** when true the center heart pops in and the words appear one after another */
  active: boolean;
  /** total time (ms) for all words to appear one by one */
  totalMs?: number;
  /** fired when the last word finished its animation */
  onDone?: () => void;
  className?: string;
  id?: string;
}

const WORD_ANIM_MS = 850;

export default function WordHeart({ words, active, totalMs = 4000, onDone, className, id }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [layout, setLayout] = useState<HeartLayout | null>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  // measure + lay out once the font is ready
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        await Promise.race([
          document.fonts.load(`${WORD_FONT_WEIGHT} ${WORD_FONT_SIZE}px Cairo`, words.join(" ")),
          new Promise((r) => setTimeout(r, 1800)),
        ]);
      } catch {
        /* fall back to whatever font is available */
      }
      if (cancelled) return;
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      ctx.font = `${WORD_FONT_WEIGHT} ${WORD_FONT_SIZE}px ${WORD_FONT_FAMILY}`;
      setLayout(layoutHeart(words, (w) => ctx.measureText(w).width));
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [words]);

  useEffect(() => {
    if (!active || !layout) return;
    const t = setTimeout(() => doneRef.current?.(), totalMs + WORD_ANIM_MS);
    return () => clearTimeout(t);
  }, [active, layout, totalMs]);

  const step = layout ? Math.min(60, totalMs / Math.max(1, layout.words.length)) : 40;

  return (
    <svg
      id={id}
      viewBox="0 0 650 650"
      className={className}
      style={{ overflow: "visible", direction: "ltr" }}
      aria-hidden="true"
    >
      {layout && (
        <>
          <defs>
            {layout.words.map((w, i) => (
              <path key={i} id={`${uid}-${i}`} d={w.d} />
            ))}
          </defs>

          <path
            d={layout.centerPath}
            fill="#ff0033"
            stroke="#ffffff"
            strokeWidth={1.5}
            className={`heart-center ${active ? "center-in" : ""}`}
          />

          {layout.words.map((w, i) => (
            <text
              key={i}
              className={`heart-word ${active ? "word-in" : ""}`}
              fill={WORD_COLOR}
              fontSize={WORD_FONT_SIZE}
              fontWeight={WORD_FONT_WEIGHT}
              fontFamily={WORD_FONT_FAMILY}
              textAnchor="middle"
              style={{
                animationDelay: `${300 + i * step}ms`,
                ...(w.rtl ? { direction: "rtl", unicodeBidi: "embed" } : null),
              }}
            >
              <textPath href={`#${uid}-${i}`} startOffset="50%">
                {w.text}
              </textPath>
            </text>
          ))}
        </>
      )}
    </svg>
  );
}
