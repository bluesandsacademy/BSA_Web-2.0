"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // lerp = linear interpolation factor per frame — lower = more inertia.
      // 0.09 sits just below the default (0.1) for that weighted agency feel.
      lerp: 0.09,
      // Slightly reduced wheel speed feels more deliberate and controlled.
      wheelMultiplier: 0.85,
      smoothWheel: true,
      // Native momentum on touch is always more comfortable than JS-driven.
      smoothTouch: false,
      syncTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
