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

const achievements = [
  {
    year: "2019",
    event: "Mandela Washington Alumni Network",
    result: "National Beyond School ICT Competition — defeated 150+ schools nationwide",
  },
  {
    year: "2019",
    event: "National Girls in ICT Competition",
    result: "Queen Amina College girls defeated 200+ schools to become national champions",
  },
  {
    year: "2019",
    event: "Times Square, New York City",
    result: "BSA featured on the screens of Times Square Towers for reaching business milestones",
  },
];

export default function ICTCompetition() {
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
          ICT
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Services · ICT Competition
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Tech <span className="text-pink">Competitions</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            We put girls on the national stage. BSA students have competed against
            hundreds of schools and won.
          </p>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="comp-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <FadeIn>
              <h2 id="comp-heading" className="section-title mb-8">
                Built to <span className="text-pink">Compete</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-6" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Blue Sands Academy offers cutting-edge and appealing competition
                models that allow girls to test their ability and refine their
                skills, piquing their interest in adopting ICT as the new norm
                in the twenty-first century.
              </p>
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                Competitions do more than measure skill. They build confidence,
                resilience, and the kind of ambition that transforms a student
                into a professional. When our girls compete and win on the
                national stage, they prove to themselves and their communities
                that technology belongs to them too.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="bg-secondary rounded-2xl overflow-hidden p-8 lg:p-10">
                <p
                  className="font-display font-bold text-white leading-snug mb-6"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.025em" }}
                >
                  "We defeated over 150 secondary schools across Nigeria and became the National Champions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink/20 border border-pink/30 flex items-center justify-center font-display font-bold text-white text-sm" aria-hidden="true">
                    SY
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">Saphia Yakubu</p>
                    <p className="font-body text-white/60 text-xs mt-0.5">BSA Student, National ICT Champion</p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section aria-labelledby="achievements-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 id="achievements-heading" className="section-title mb-16">
              Our <span className="text-pink">Achievements</span>
            </h2>
          </FadeIn>

          <div className="divide-y divide-bdr">
            {achievements.map((a, i) => (
              <FadeIn key={a.event} delay={i * 70}>
                <div className="grid lg:grid-cols-[100px_1fr] gap-6 lg:gap-12 py-10 items-start">
                  <div
                    className="font-display font-bold text-secondary/20 leading-none select-none"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}
                    aria-label={`Year: ${a.year}`}
                  >
                    {a.year}
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-secondary mb-3"
                      style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", letterSpacing: "-0.02em" }}
                    >
                      {a.event}
                    </h3>
                    <p className="font-body text-muted leading-relaxed text-sm">{a.result}</p>
                  </div>
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
                Support the Next <span className="text-pink">Generation</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Help us prepare more girls for national and international
                technology competitions. Partner with BSA to fund training,
                equipment, and access.
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
