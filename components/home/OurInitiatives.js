"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const initiatives = [
  {
    num: "01",
    title: "ICT Competitions",
    body: "Our students have competed on the national stage — and won. In 2019, BSA girls defeated 150+ schools in the Mandela Washington Alumni Network competition and 200+ schools in the National Girls in ICT Competition.",
    href: "/focus-areas/tech-competitions",
  },
  {
    num: "02",
    title: "Tech Fingers",
    body: "Our on-site and online secondary school training programme. We connect girls to tech skills — UI/UX, mobile app development, web development, and animation — and pair them with female mentors guiding them into careers in technology.",
    href: "/programs/tech-fingers",
  },
  {
    num: "03",
    title: "One Girl One Laptop",
    body: "Every successful student in our physical training programme who cannot afford a computer receives a free laptop — removing the final barrier between a girl and her digital future.",
    href: "/programs/one-girl-one-laptop",
  },
];

function InitiativeBlock({ item, delay }) {
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
    <div
      ref={ref}
      className="flex flex-col transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span
        className="font-display font-bold text-pink mb-6 leading-none"
        style={{ fontSize: "clamp(2.4rem, 4vw, 3.2rem)", letterSpacing: "-0.03em" }}
        aria-hidden="true"
      >
        {item.num}
      </span>

      <h3
        className="font-display font-bold text-white mb-4 leading-snug"
        style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)", letterSpacing: "-0.02em" }}
      >
        {item.title}
      </h3>

      <p className="font-body text-white/65 leading-relaxed mb-8 flex-1">
        {item.body}
      </p>

      <Link
        href={item.href}
        className="inline-flex items-center gap-2 font-body font-bold text-sm text-white hover:text-pink transition-colors group self-start"
      >
        Learn More
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
  );
}

export default function OurInitiatives() {
  return (
    <section aria-labelledby="initiatives-heading" className="py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2
          id="initiatives-heading"
          className="section-title mb-20"
          style={{ color: "white" }}
        >
          Our <span className="text-pink">Initiatives</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {initiatives.map((item, i) => (
            <InitiativeBlock key={item.num} item={item} delay={i * 120} />
          ))}
        </div>

      </div>
    </section>
  );
}
