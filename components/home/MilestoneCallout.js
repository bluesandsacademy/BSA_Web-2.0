"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const achievementLines = [
  "Featured on Times Square Towers, New York — global recognition for reaching business milestones.",
  "Won the Mandela Washington Alumni Network's National Beyond School ICT Competition in 2019, defeating 150+ secondary schools across Nigeria.",
  "Queen Amina College girls won the National Girls in ICT Competition in 2019, beating out 200+ secondary schools across Nigeria.",
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-labelledby="milestone-heading" className="py-16 lg:py-28 bg-secondary">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-8 lg:grid lg:grid-cols-[5fr_6fr] lg:gap-20 lg:items-center"
      >
        {/* Left — headline + CTA */}
        <div
          className="mb-12 lg:mb-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0ms",
          }}
        >
          <h2
            id="milestone-heading"
            className="section-title mb-6"
            style={{ color: "white" }}
          >
            Our girls took it to the{" "}
            <span className="text-pink">world stage.</span>
          </h2>
          <p className="font-body text-white/70 leading-relaxed mb-10 max-w-sm">
            From classrooms in Nigeria to Times Square, New York — and two national competition victories in the same year.
          </p>
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

        {/* Right — all achievement lines, stagger in */}
        <div className="divide-y divide-white/10 mt-10 lg:mt-0">
          {achievementLines.map((line, i) => (
            <p
              key={i}
              className="font-display font-bold text-white py-7 first:pt-0 last:pb-0 leading-snug transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
                letterSpacing: "-0.015em",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${100 + i * 120}ms`,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
