"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "5,000+", label: "Students & communities trained", note: "across all programmes to date" },
  { value: "6",      label: "States reached",            note: "and growing across Nigeria" },
  { value: "3",      label: "Flagship programmes",       note: "Tech Fingers · One Student One Laptop · TechFingers Platform" },
  { value: "2018",   label: "Year founded",              note: "and still accelerating" },
];

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="font-display font-bold text-white leading-none mb-3"
        style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.03em" }}
      >
        {stat.value}
      </div>
      <div className="font-body font-semibold text-white/90 text-sm mb-1.5">
        {stat.label}
      </div>
      <div className="font-body text-white/60 text-xs leading-relaxed">
        {stat.note}
      </div>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section aria-labelledby="impact-heading" className="py-16 lg:py-28 bg-secondary overflow-hidden relative">

      {/* Subtle pink left bar continuity */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 id="impact-heading" className="section-title mb-16 lg:mb-20" style={{ color: "white" }}>
          The Numbers Behind<br />
          the <span className="text-primary">Mission</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-t border-white/10 pt-12 lg:pt-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
