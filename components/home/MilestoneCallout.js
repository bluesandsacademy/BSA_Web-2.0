"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const achievements = [
  {
    display: "Times Square",
    color: "white",
    title: "Featured in New York City",
    label: "Global recognition · Times Square Towers",
  },
  {
    display: "150+",
    color: "#0077FF",
    title: "Schools defeated across Nigeria",
    label: "National Beyond School ICT · 2019",
  },
  {
    display: "200+",
    color: "#0077FF",
    title: "Schools beaten nationwide",
    label: "National Girls in ICT Competition · 2019",
  },
];

export default function MilestoneCallout() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="s-milestone" aria-labelledby="milestone-heading" className="py-28 bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <h2 id="milestone-heading" className="section-title" style={{ color: "white" }}>
            Recognition that{" "}
            <span className="text-primary">speaks for itself.</span>
          </h2>
        </div>

        {/* Three equal achievement blocks */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10"
          style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
        >
          {achievements.map((item, i) => (
            <div
              key={i}
              className="bg-secondary p-8 lg:p-10 flex flex-col"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${80 + i * 110}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${80 + i * 110}ms`,
              }}
            >
              <div className="w-full h-0.5 bg-accent mb-8" />

              {/* Fixed-height zone keeps title/label aligned across all cards */}
              <div className="flex items-end mb-6" style={{ minHeight: "7rem" }}>
                <p
                  className="font-display font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                    letterSpacing: "-0.03em",
                    color: item.color,
                  }}
                >
                  {item.display}
                </p>
              </div>

              <p
                className="font-display font-bold text-white leading-snug mb-3 flex-1"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
              >
                {item.title}
              </p>

              <p
                className="font-body text-white/35 uppercase tracking-widest"
                style={{ fontSize: "0.68rem" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1) 450ms",
          }}
        >
          <Link
            href="/focus-areas/tech-competitions"
            className="inline-flex items-center gap-2 font-body font-bold text-sm text-white hover:text-pink transition-colors group"
          >
            Read the full story
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
