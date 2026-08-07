"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const subpages = [
  {
    num: "01",
    title: "The Road Map",
    body: "Where BSA started, where we are today, and where the mission is taking us next.",
    href: "/about/road-map",
    cta: "See Our Journey",
  },
  {
    num: "02",
    title: "Our Story",
    body: "Meet the founder who saw the gap and decided to close it before anyone else was paying attention.",
    href: "/about/story",
    cta: "Read Her Story",
  },
  {
    num: "03",
    title: "Our People",
    body: "The educators, technologists, and community builders driving BSA's programmes on the ground every day.",
    href: "/about/team",
    cta: "Meet the Team",
  },
  {
    num: "04",
    title: "Advisory Board",
    body: "Industry leaders and policy voices helping shape BSA's strategy and national reach.",
    href: "/about/advisory-board",
    cta: "View the Board",
  },
];

function SubpageCard({ page, index }) {
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
    <Link
      ref={ref}
      href={page.href}
      className="group block border-t-2 border-bdr hover:border-pink pt-8 transition-[border-color,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 110}ms`,
      }}
    >
      <span
        className="block font-body text-xs text-muted mb-4 tabular-nums"
        style={{ letterSpacing: "0.1em" }}
        aria-hidden="true"
      >
        {page.num}
      </span>

      <h3
        className="font-display font-bold text-secondary group-hover:text-primary mb-4 transition-colors"
        style={{ fontSize: "clamp(1.4rem, 2vw, 1.75rem)", letterSpacing: "-0.02em" }}
      >
        {page.title}
      </h3>

      <p className="font-body text-muted leading-relaxed mb-6 text-sm">
        {page.body}
      </p>

      <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary group-hover:text-pink transition-colors">
        {page.cta}
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
      </span>
    </Link>
  );
}

export default function TeamPreview() {
  return (
    <section aria-labelledby="people-heading" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 id="people-heading" className="section-title mb-16 lg:mb-20">
          Go <span className="text-primary">Deeper</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {subpages.map((page, i) => (
            <SubpageCard key={page.href} page={page} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
