import type { CSSProperties } from "react";

/**
 * Hand-drawn SVG doodles. Every path uses pathLength=1 so CSS can "draw" it by
 * animating stroke-dashoffset (see `.draw-*` in globals.css).
 *
 *   trigger="load"   draws once when the page loads (hero)
 *   trigger="scroll" draws as the element scrolls into view (scroll-driven
 *                    animation; browsers without support just show it drawn)
 */

type Trigger = "load" | "scroll";

const doodles = {
  underline: {
    viewBox: "0 0 300 20",
    paths: ["M4 13 C 60 5, 120 16, 180 9 S 270 6, 296 12"],
  },
  underlineDouble: {
    viewBox: "0 0 300 28",
    paths: ["M4 10 C 70 3, 150 14, 296 7", "M18 22 C 90 15, 190 24, 280 17"],
  },
  circle: {
    viewBox: "0 0 300 100",
    paths: [
      "M40 22 C 110 -2, 250 4, 285 38 C 310 66, 230 96, 140 94 C 50 92, 4 72, 12 46 C 20 22, 80 8, 150 6 C 190 5, 220 8, 240 14",
    ],
  },
  arrow: {
    viewBox: "0 0 160 90",
    paths: ["M6 12 C 30 70, 90 90, 146 58", "M122 50 L 148 57 L 134 80"],
  },
  arrowDown: {
    viewBox: "0 0 80 160",
    paths: ["M40 6 C 10 40, 70 80, 38 146", "M18 124 L 38 150 L 56 122"],
  },
  arrowLoop: {
    viewBox: "0 0 220 120",
    paths: [
      "M6 96 C 40 96, 70 80, 80 50 C 88 22, 60 10, 50 34 C 40 62, 90 84, 140 66 C 170 55, 190 40, 208 20",
      "M186 18 L 210 18 L 206 42",
    ],
  },
  star: {
    viewBox: "0 0 40 40",
    paths: ["M20 3 C 21 14, 22 18, 20 37", "M3 20 C 14 19, 26 21, 37 20", "M8 8 L 32 32", "M32 8 L 8 32"],
  },
  spiral: {
    viewBox: "0 0 60 60",
    paths: ["M30 30 C 34 26, 38 32, 33 36 C 26 41, 20 32, 24 25 C 30 16, 44 20, 45 32 C 46 46, 28 52, 18 44 C 8 36, 10 16, 24 10 C 40 3, 56 14, 56 30"],
  },
  squiggle: {
    viewBox: "0 0 120 24",
    paths: ["M4 12 C 14 2, 20 22, 30 12 S 46 2, 56 12 S 72 22, 82 12 S 98 2, 116 12"],
  },
  bracket: {
    viewBox: "0 0 30 200",
    paths: ["M24 4 C 8 10, 16 60, 10 96 L 2 100 L 10 104 C 16 140, 8 190, 24 196"],
  },
  check: {
    viewBox: "0 0 24 24",
    paths: ["M3 13 C 6 15, 8 18, 9 20 C 12 13, 16 8, 22 3"],
  },
  divider: {
    viewBox: "0 0 1200 24",
    paths: ["M2 14 C 150 6, 300 18, 450 11 S 700 5, 850 13 S 1100 17, 1198 9"],
  },
} as const;

export type DoodleName = keyof typeof doodles;

export function Doodle({
  name,
  trigger = "scroll",
  delay = 0,
  duration = 0.9,
  strokeWidth = 2.5,
  className = "",
  stretch = false,
}: {
  name: DoodleName;
  trigger?: Trigger;
  /** Seconds (load trigger only). */
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  className?: string;
  /**
   * Fill the box instead of keeping proportions (underlines, circles, dividers).
   * The stroke then scales with the box, so strokeWidth is in viewBox units.
   */
  stretch?: boolean;
}) {
  const doodle = doodles[name];
  const step = duration / doodle.paths.length;
  return (
    <svg
      viewBox={doodle.viewBox}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio={stretch ? "none" : "xMidYMid meet"}
      className={`pointer-events-none overflow-visible draw-${trigger} ${className}`}
    >
      {doodle.paths.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          // Only on proportional doodles: Chrome miscomputes pathLength-based
          // dashes with non-scaling strokes once the SVG is scaled up.
          vectorEffect={stretch ? undefined : "non-scaling-stroke"}
          style={{ "--delay": `${delay + i * step}s`, "--dur": `${step}s` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

/** The blog's bunny, traced as strokes so it can draw itself. */
export function Bunny({ className = "", delay = 0.2 }: { className?: string; delay?: number }) {
  const parts = [
    { d: "M97 272 C 88 200, 70 120, 80 60 C 86 25, 118 12, 130 35 C 142 60, 148 160, 158 288 C 166 298, 230 297, 255 294", cls: "bunny-ear-left", dur: 0.9 },
    { d: "M258 290 C 262 220, 272 110, 288 35 C 294 10, 318 5, 322 30 C 328 80, 322 200, 320 292", cls: "bunny-ear-right", dur: 0.7 },
    { d: "M330 298 C 380 312, 408 360, 402 430 C 398 490, 330 508, 210 510 C 110 511, 30 505, 18 450 C 8 400, 30 320, 92 298", cls: "", dur: 1 },
    { d: "M100 405 l 2 1", cls: "bunny-eye", dur: 0.1 },
    { d: "M286 402 l 2 1", cls: "bunny-eye", dur: 0.1 },
    { d: "M178 412 C 190 406, 210 404, 220 410 C 216 424, 205 432, 196 430 C 188 428, 180 420, 178 412", cls: "", dur: 0.3 },
    { d: "M195 430 C 194 442, 193 452, 193 466", cls: "", dur: 0.2 },
  ];

  let t = delay;
  return (
    <svg
      viewBox="0 0 415 520"
      aria-hidden="true"
      focusable="false"
      className={`bunny draw-load overflow-visible ${className}`}
    >
      {parts.map((p) => {
        const style = { "--delay": `${t}s`, "--dur": `${p.dur}s` } as CSSProperties;
        t += p.dur + 0.05;
        return (
          <path
            key={p.d}
            d={p.d}
            className={p.cls}
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={p.cls === "bunny-eye" ? 16 : 10}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
          />
        );
      })}
    </svg>
  );
}

/** Hidden SVG filters used by `.sketch-box` to make borders wobbly. */
export function SketchFilters() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <defs>
        <filter id="rough-a">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
        <filter id="rough-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </defs>
    </svg>
  );
}
