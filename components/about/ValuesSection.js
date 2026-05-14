"use client";

import { useRef, useEffect, useState } from "react";

const values = [
  {
    num: "01",
    title: "Inclusion First",
    body: "We go where the gap is widest: rural communities, underserved schools, and women with disabilities. If the opportunity isn't there, we build it.",
  },
  {
    num: "02",
    title: "Skills, Not Sympathy",
    body: "We build real technical capacity. The women we train compete on merit. Our graduates hold their own in any room.",
  },
  {
    num: "03",
    title: "Community by Design",
    body: "Every programme creates a network. Our graduates become mentors. Our impact doesn't stop when a course ends. It multiplies.",
  },
];

function ValueCard({ value, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pt-8 border-t-2 border-pink transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Ghost number */}
      <span
        className="absolute top-0 right-0 font-display font-bold text-secondary select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(3rem, 4.5vw, 4rem)", opacity: 0.055, lineHeight: 1 }}
        aria-hidden="true"
      >
        {value.num}
      </span>

      <h3
        className="font-display font-bold text-secondary mb-4"
        style={{ fontSize: "clamp(1.45rem, 2vw, 1.8rem)", letterSpacing: "-0.02em" }}
      >
        {value.title}
      </h3>
      <p className="font-body text-muted leading-relaxed">
        {value.body}
      </p>
    </div>
  );
}

export default function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="py-16 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 id="values-heading" className="section-title mb-16 lg:mb-20">
          What We{" "}
          <span className="text-pink">Stand For</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((v, i) => (
            <ValueCard key={v.num} value={v} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
