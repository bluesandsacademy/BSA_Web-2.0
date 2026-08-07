"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { AUDIENCE_DESCRIPTOR } from "@/lib/content";

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

const labs = [
  {
    num: "01",
    name: "Lagos STEM Lab",
    state: "Lagos State",
    note: "Our flagship lab, training secondary school students and young professionals in digital design, web, and app development.",
  },
  {
    num: "02",
    name: "Ogun STEM Lab",
    state: "Ogun State",
    note: "Serving rural communities across Ogun State with foundational computer literacy and business tech training.",
  },
  {
    num: "03",
    name: "Abuja STEM Lab",
    state: "FCT Abuja",
    note: "Our most recently opened facility, focused on ICT training for secondary school students in the federal capital.",
  },
];

const stats = [
  { value: "3", label: "Active STEM Labs" },
  { value: "6+", label: "States Reached" },
  { value: "5,000+", label: "Students Trained" },
  { value: "100%", label: "Access-Focused" },
];

export default function STEMLabsPage() {
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
          Labs
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            STEM Labs
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Blue Sands <span className="text-primary">STEM Labs</span>
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Dedicated spaces where students, youth, and underserved communities
            get hands-on access to computers, design tools, and technical mentorship.
          </p>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="labs-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-6">
              <FadeIn>
                <h2 id="labs-heading" className="section-title">
                  Where Skills <span className="text-primary">Come Alive</span>
                </h2>
              </FadeIn>
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Our STEM Labs are purpose-built training spaces equipped with
                  computers, high-speed internet, and design tools. They are
                  staffed by experienced tech educators and open to{" "}
                  {AUDIENCE_DESCRIPTOR}, plus adults
                  entering or re-entering the workforce.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Modern technologies require infrastructure to run. Without the
                  necessary equipment, training never leaves the theoretical.
                  Our labs ensure that every lesson is practical, every skill is
                  applied, and every student leaves with hands-on experience.
                </p>
              </FadeIn>
            </div>

            {/* Stats */}
            <FadeIn delay={100}>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="border-t-2 border-accent pt-6">
                    <div
                      className="font-display font-bold text-secondary leading-none mb-2"
                      style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
                    >
                      {s.value}
                    </div>
                    <p className="font-body text-muted text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Labs listing */}
      <section aria-labelledby="locations-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 id="locations-heading" className="section-title mb-16">
              Our <span className="text-primary">Locations</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
            {labs.map((lab, i) => (
              <FadeIn key={lab.num} delay={i * 90}>
                <span
                  className="font-display font-bold text-accent mb-4 block"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}
                  aria-hidden="true"
                >
                  {lab.num}
                </span>
                <h3
                  className="font-display font-bold text-secondary mb-1"
                  style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.4rem)", letterSpacing: "-0.02em" }}
                >
                  {lab.name}
                </h3>
                <p className="font-body font-semibold text-primary uppercase mb-4" style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}>
                  {lab.state}
                </p>
                <p className="font-body text-muted text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
                  {lab.note}
                </p>
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
                Support a <span className="text-primary">STEM Lab</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Help us open and sustain STEM Labs in more communities across
                Nigeria. Corporate sponsors, equipment donors, and government
                partners are welcome.
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
