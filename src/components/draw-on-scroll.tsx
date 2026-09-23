"use client";

import { useEffect } from "react";

/**
 * Starts the drawing animation of each `.draw-scroll` doodle once it enters
 * the viewport. A plain CSS scroll-driven animation would tie the drawing to
 * scroll progress, and doodles near the end of the page never finished
 * because the page ran out of scroll.
 *
 * The `draw-ready` class on <html> (set before paint in the root layout) is
 * what hides the undrawn strokes, so without JS everything is shown drawn.
 */
export function DrawOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("draw-ready")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-drawn");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".draw-scroll:not(.is-drawn)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
