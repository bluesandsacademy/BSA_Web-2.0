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

const skills = [
  "Digital Literacy",
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Animation",
  "Photography & Videography",
  "Coding Fundamentals",
  "Software Tools",
];

export default function STEMTraining() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          STEM
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Services · STEM Training
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Digital Skills <span className="text-pink">Training</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            We will assist you in comprehending the fundamentals of digital
            technology, the tools, the platforms, and the distinctions between
            digital and traditional technology.
          </p>
        </div>
      </section>

      {/* About the service */}
      <section aria-labelledby="stem-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <FadeIn>
              <h2 id="stem-heading" className="section-title mb-8">
                What We <span className="text-pink">Teach</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-6" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Whether you are thinking about implementing digital technologies
                to improve your business or are interested in pursuing a career
                in any tech industry, we will assist you in comprehending the
                fundamentals of digital technology, the tools, the platforms,
                and the distinctions between digital and traditional technology.
              </p>
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Our training is designed to meet women and girls wherever they
                are in their digital journey, from absolute beginners to those
                looking to deepen their skills for professional advancement.
              </p>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn delay={100}>
                <h3 className="font-display font-bold text-secondary mb-6" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)", letterSpacing: "-0.02em" }}>
                  Skills We Cover
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 font-body text-secondary"
                      style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink shrink-0" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section aria-labelledby="who-heading" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 id="who-heading" className="section-title mb-12">
              Who It Is <span className="text-pink">For</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
            {[
              { group: "Secondary School Girls", note: "Building the foundation early, so digital confidence grows alongside academic development." },
              { group: "Female Undergraduates", note: "Bridging the gap between classroom theory and the practical, job-ready skills employers demand." },
              { group: "Female Professionals", note: "Upgrading existing skill sets to meet the demands of a rapidly evolving digital economy." },
            ].map((item, i) => (
              <FadeIn key={item.group} delay={i * 90}>
                <div className="border-t-2 border-pink pt-8">
                  <h3 className="font-display font-bold text-secondary mb-3" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em" }}>
                    {item.group}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
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
            <div className="border-t-2 border-pink pt-10 max-w-2xl">
              <h2 className="section-title mb-5">
                Ready to <span className="text-pink">Start?</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Partner with us to bring digital skills training to your
                community, school, or organisation.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/programs/tech-fingers"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group"
                >
                  Explore Tech Fingers
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
