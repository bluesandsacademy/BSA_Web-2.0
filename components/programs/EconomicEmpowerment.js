"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

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

const focus = [
  { label: "Business Skills Training", note: "Practical knowledge of finance, operations, and enterprise to build sustainable local businesses." },
  { label: "Access to Funding", note: "Connecting rural communities to resources, grants, and funding pathways to start or grow their work." },
  { label: "Community Leadership", note: "Building the confidence and skills needed to lead families, groups, and communities toward lasting change." },
];

export default function EconomicEmpowerment() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(8rem, 18vw, 16rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Rural
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Program · Rural Economic Empowerment
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Rural Economic Empowerment <span className="text-primary">Programme</span>
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Rural communities are the backbone of rural societies.
            We provide business education, funding, and opportunity so people can
            build independent livelihoods and lead their communities.
          </p>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="emp-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-6">
              <FadeIn>
                <h2 id="emp-heading" className="section-title">
                  The Backbone of <span className="text-primary">Communities</span>
                </h2>
              </FadeIn>
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  The basic economic, environmental, and social reforms necessary
                  for sustainable development are essentially the responsibility
                  of rural communities. Yet these are the communities most frequently left
                  behind by mainstream development programmes.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Blue Sands Academy's Rural Economic Empowerment Programme
                  reaches into underserved communities across Nigeria
                  with practical business skills, access to funding, and the
                  mentorship needed to build sustainable, independent livelihoods.
                </p>
              </FadeIn>
              <FadeIn delay={210}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  The programme empowers rural communities by imparting skills that
                  enable people to earn income and improve their quality of life.
                  A person with economic independence can lead their
                  community forward.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={100}>
              <blockquote className="border-l-4 border-accent pl-8 py-2">
                <p
                  className="font-display font-bold text-secondary leading-snug mb-6"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", letterSpacing: "-0.02em" }}
                >
                  "A person with options is a community that grows."
                </p>
                <cite className="not-italic font-body font-medium text-muted" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                  Alero Thompson, Founder and CEO, Blue Sands Academy
                </cite>
              </blockquote>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section aria-labelledby="focus-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 id="focus-heading" className="section-title mb-16">
              What We <span className="text-primary">Provide</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
            {focus.map((item, i) => (
              <FadeIn key={item.label} delay={i * 90}>
                <div className="border-t-2 border-accent pt-8">
                  <h3
                    className="font-display font-bold text-secondary mb-4"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)", letterSpacing: "-0.02em" }}
                  >
                    {item.label}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed" style={{ lineHeight: 1.75 }}>
                    {item.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="border-t-2 border-accent pt-10 max-w-2xl">
              <h2 className="section-title mb-5">
                Partner to <span className="text-primary">Empower</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Join us in expanding the programme to more rural communities
                across Nigeria. Whether as a funder, partner organisation, or
                volunteer mentor, we would like to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Partner With Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
