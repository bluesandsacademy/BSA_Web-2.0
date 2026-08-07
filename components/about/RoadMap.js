"use client";

import { useRef, useEffect, useState } from "react";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const milestones = [
  {
    year: "2018",
    phase: "Founded",
    title: "The Beginning",
    body: "Alero Thompson founds Blue Sands Academy in Lagos with a single conviction: that the digital skills gap in Nigeria is a solvable problem, and that solving it starts with training. The first cohort of secondary school students completes BSA's foundational digital skills programme.",
    accent: true,
  },
  {
    year: "2019",
    phase: "Breakthrough",
    title: "National Recognition",
    body: "BSA students compete at the national level for the first time, defeating 150+ schools in the Mandela Washington Alumni Network ICT competition and 200+ schools in the National Girls in ICT Competition. BSA is featured in Times Square, New York City.",
    accent: false,
  },
  {
    year: "2020",
    phase: "Adaptation",
    title: "Surviving the Pandemic",
    body: "As COVID-19 forces schools to close and threatens to push vulnerable students further from education, BSA pivots to online delivery. The One Girl One Laptop Initiative is expanded, ensuring students who receive training are not left without tools to continue.",
    accent: false,
  },
  {
    year: "2021",
    phase: "Expansion",
    title: "Reaching Rural Communities",
    body: "BSA extends its Rural Economic Empowerment Programme into underserved communities across Ogun State. The Tech Fingers platform begins development, creating a pathway to scale BSA's curriculum beyond physical locations.",
    accent: false,
  },
  {
    year: "2022",
    phase: "Scale",
    title: "Six States",
    body: "BSA's programmes now reach students and communities across 6 states in Nigeria. A second STEM Lab opens, and BSA receives recognition from NITDA and UN Women for sustained impact in digital inclusion.",
    accent: false,
  },
  {
    year: "2023",
    phase: "Platform",
    title: "Building Infrastructure",
    body: "Development of the BSA edtech platform accelerates. Partnerships with government agencies and private sector organisations deepen. Over 5,000 students and community members trained to date.",
    accent: false,
  },
  {
    year: "2024–2026",
    phase: "Next Chapter",
    title: "The Road Ahead",
    body: "BSA is building toward a national network of STEM Labs, a fully deployed online learning platform, and partnerships with universities to create clear career pathways for graduates. The goal: 50,000 students and community members trained by 2026.",
    accent: true,
  },
];

export default function RoadMap() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Road
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            About · The Road Map
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Where We've <span className="text-primary">Been</span>,<br />Where We're <span className="text-primary">Going</span>
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Six years of building. Here is an honest account of how BSA grew from a
            single cohort in Lagos to a national presence, and what comes next.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 id="timeline-heading" className="section-title mb-16 lg:mb-20">
            BSA <span className="text-primary">Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 lg:left-40 top-0 bottom-0 w-px bg-bdr"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 80}>
                  <div className="relative grid lg:grid-cols-[160px_1fr] gap-8 lg:gap-16 pb-14">

                    {/* Year + phase */}
                    <div className="lg:text-right lg:pt-1">
                      <div className="flex lg:flex-col lg:items-end items-center gap-4 pl-6 lg:pl-0">
                        {/* Dot */}
                        <div
                          className="absolute left-0 lg:left-40 -translate-x-1/2 mt-1.5 w-3 h-3 rounded-full border-2 shrink-0 z-10"
                          style={{
                            top: "6px",
                            backgroundColor: m.accent ? "var(--color-accent)" : "white",
                            borderColor: m.accent ? "var(--color-accent)" : "#E2EBF6",
                          }}
                          aria-hidden="true"
                        />
                        <div
                          className="font-display font-bold leading-none"
                          style={{
                            fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                            letterSpacing: "-0.03em",
                            color: m.accent ? "var(--color-accent)" : "#02345A",
                            opacity: m.accent ? 1 : 0.35,
                          }}
                        >
                          {m.year}
                        </div>
                        <p
                          className="font-body font-semibold text-primary uppercase"
                          style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
                        >
                          {m.phase}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pl-6 lg:pl-0">
                      <h3
                        className="font-display font-bold text-secondary mb-4 leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", letterSpacing: "-0.02em" }}
                      >
                        {m.title}
                      </h3>
                      <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.75 }}>
                        {m.body}
                      </p>
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Forward-looking CTA */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t-2 border-accent pt-10 max-w-2xl">
            <h2 className="section-title mb-5">
              Be Part of <span className="text-primary">What Comes Next</span>
            </h2>
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              The next phase of BSA's growth depends on partnerships with organisations
              that believe in what this work is building. If that is you, let's talk.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
