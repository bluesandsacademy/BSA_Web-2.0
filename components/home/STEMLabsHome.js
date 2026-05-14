"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const highlights = [
  { stat: "3", label: "Active STEM labs across Nigeria" },
  { stat: "6+", label: "States with BSA lab presence" },
  { stat: "100%", label: "Female-focused learning environment" },
];

export default function STEMLabsHome() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="s-stem-labs"
      aria-labelledby="stem-labs-heading"
      className="py-16 lg:py-28 bg-secondary relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-pink" aria-hidden="true" />
      <div
        className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
        style={{ fontSize: "clamp(14rem, 28vw, 24rem)", opacity: 0.025, right: "-2rem", bottom: "-3rem", lineHeight: 0.85 }}
        aria-hidden="true"
      >
        Labs
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <h2 id="stem-labs-heading" className="section-title mb-6" style={{ color: "white" }}>
              Blue Sands <span className="text-pink">STEM Labs</span>
            </h2>
            <div className="rounded-full bg-pink mb-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
            <p
              className="font-body text-white/85 leading-relaxed mb-6"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}
            >
              Our STEM Labs are purpose-built spaces where women and girls get hands-on
              access to computers, design tools, and technical mentorship. Not virtual.
              Not theoretical. Real equipment in real communities.
            </p>
            <p
              className="font-body text-white/85 leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}
            >
              Each lab is equipped and staffed to run BSA's full curriculum, from
              foundational digital literacy through to advanced programming and
              product design.
            </p>
            <Link
              href="/stem-labs"
              className="inline-flex items-center gap-2 font-body font-bold text-sm text-white hover:text-pink transition-colors group"
            >
              Explore our labs
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-8">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="border-t border-white/10 pt-8"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${100 + i * 100}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${100 + i * 100}ms`,
                }}
              >
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
                >
                  {h.stat}
                </div>
                <p className="font-body text-white/65 text-sm">{h.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
