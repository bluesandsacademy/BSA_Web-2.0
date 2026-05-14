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

const pillars = [
  {
    num: "01",
    title: "Tool Empowerment",
    body: "Giving the girl child a working laptop so she has the foundation from which to build any digital skill.",
  },
  {
    num: "02",
    title: "Skill Empowerment",
    body: "Using the tool to acquire any digital skill of choice: graphic design, copywriting, coding, animation, and more.",
  },
  {
    num: "03",
    title: "Mindset Change",
    body: "Building inner confidence and self-belief. A girl who believes she belongs in tech will build a career in tech.",
  },
];

export default function OneGirlOneLaptop() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(8rem, 18vw, 16rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          1G1L
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Program · One Girl One Laptop
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            One Girl <span className="text-pink">One Laptop</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Removing the final barrier between a girl and her digital future.
          </p>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="ogol-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-6">
              <FadeIn>
                <h2 id="ogol-heading" className="section-title">
                  Every Girl <span className="text-pink">Deserves a Tool</span>
                </h2>
              </FadeIn>
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  With a vision to raise women and girls who will become leaders
                  and change-makers through actively empowering them with ICT,
                  business, and financial literacy skills, Blue Sands Academy
                  has designed a social impact programme aimed at reaching young
                  girls and women who cannot afford a laptop but are desirous of
                  acquiring a digital skill.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  We have equipped 50 girls with new laptops, and the knowledge
                  and skills of these girls have improved through the use of
                  their laptops. We are partnering with NGOs, agencies, and
                  governments at all levels to make this a continuous process.
                </p>
              </FadeIn>
              <FadeIn delay={210}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  We also provide self-confidence sessions and connect our
                  students with female tech mentors who help them believe in
                  themselves and believe that they, too, can do it.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={120}>
              <div className="relative rounded-2xl overflow-hidden bg-secondary" style={{ aspectRatio: "4/3" }}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-pink z-10" aria-hidden="true" />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(135deg, rgba(0,68,204,0.15) 0%, rgba(1,36,63,0.6) 100%)" }}
                >
                  <p className="font-display font-bold text-white/20 uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                    Photo coming soon
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section aria-labelledby="pillars-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 id="pillars-heading" className="section-title mb-16">
              Three <span className="text-pink">Pillars</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
            {pillars.map((p, i) => (
              <FadeIn key={p.num} delay={i * 90}>
                <span
                  className="font-display font-bold text-pink mb-6 block"
                  style={{ fontSize: "clamp(2.4rem, 4vw, 3.2rem)", letterSpacing: "-0.03em" }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <h3
                  className="font-display font-bold text-secondary mb-4"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)", letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed" style={{ lineHeight: 1.75 }}>
                  {p.body}
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
            <div className="border-t-2 border-pink pt-10 max-w-2xl">
              <h2 className="section-title mb-5">
                Give a Girl a <span className="text-pink">Laptop</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Partner with us or donate to expand the One Girl One Laptop
                Initiative to more communities across Nigeria.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
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
