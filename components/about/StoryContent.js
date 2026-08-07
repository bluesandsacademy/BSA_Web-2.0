"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AUDIENCE_DESCRIPTOR } from "@/lib/content";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
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

function StoryImage({ src, alt, caption, aspect = "aspect-[4/3]" }) {
  return (
    <div className={`relative w-full ${aspect} rounded-2xl overflow-hidden bg-secondary`}>
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width:1024px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: "linear-gradient(135deg, rgba(0,68,204,0.15) 0%, rgba(1,36,63,0.6) 100%)" }}>
          <p className="font-body text-white/25 uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
            Photo coming soon
          </p>
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 h-1 bg-pink z-10" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 py-4"
          style={{ background: "linear-gradient(to top, rgba(1,36,63,0.75) 0%, transparent 100%)" }}>
          <p className="font-body text-white/55 uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.16em" }}>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

const dataPoints = [
  { value: "7 in 10", label: "Young people in Nigeria and across Africa lack computer literacy skills" },
  { value: "85%",     label: "Of underserved communities lack the tech skills required by today's jobs" },
  { value: "90%+",    label: "Of jobs today have a significant digital component" },
  { value: "2013",    label: "Year Africa's digital skills gap started widening. It hasn't stopped." },
];

export default function StoryContent() {
  return (
    <>

      {/* ── The Founder's Voice ───────────────────────────────────────── */}
      <section aria-labelledby="origin-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 id="origin-heading" className="section-title mb-12 lg:mb-16">
              In Her <span className="text-primary">Own Words</span>
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <FadeIn delay={80} className="w-full">
              <StoryImage
                src={null}
                alt="Alero Thompson at a digital skills training session"
                caption="Digital skills training session, Lagos"
                aspect="aspect-[4/3]"
              />
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={160}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  I grew up in a community where the computer literacy gap is very wide.
                  Despite having the highest growth in internet penetration across the globe,
                  Africa remains the only continent whose digital divide has widened
                  since 2013. Barriers contributing to the gap include unaffordable access,
                  threats to access and use, low digital literacy and confidence, and the lack
                  of relevant content, applications, and services.
                </p>
              </FadeIn>
              <FadeIn delay={220}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  Over 90% of jobs presently have a digital component, and 85% of underserved communities
                  do not have the required tech skills to fill in these gaps. Another
                  problem we are tackling is that 7 in 10 young people in Nigeria and across
                  Africa lack computer literacy skills.
                </p>
              </FadeIn>
              <FadeIn delay={280}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  With learning disrupted, and a looming economic crisis as well as social
                  isolation as a result of the pandemic, the threat of forced and child
                  marriages, including teenage and unwanted pregnancies, has increased
                  considerably.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>


      {/* ── Data Points ──────────────────────────────────────────────── */}
      <section aria-label="Key statistics" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {dataPoints.map((d, i) => (
              <FadeIn key={d.label} delay={i * 90}>
                <div className="border-t-2 border-accent pt-6">
                  <div className="font-display font-bold text-secondary leading-none mb-3"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}>
                    {d.value}
                  </div>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {d.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── Pull Quote ───────────────────────────────────────────────── */}
      <section aria-label="Founder quote" className="py-16 lg:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent" aria-hidden="true" />
        <div className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(18rem, 35vw, 30rem)", opacity: 0.025, right: "-2rem", top: "-4rem" }}
          aria-hidden="true">"</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <blockquote>
              <p className="font-display font-bold text-white"
                style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.4rem)", lineHeight: 1.15, letterSpacing: "-0.03em", maxWidth: "22ch" }}>
                "Modern technologies require infrastructure to run; without the
                necessary equipment, the{" "}
                <span className="text-primary">teaching never leaves</span>{" "}
                the theoretical."
              </p>
              <footer className="mt-8">
                <cite className="not-italic font-body font-medium text-white/65"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.06em" }}>
                  Alero Thompson, Founder &amp; CEO, Blue Sands Academy
                </cite>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>


      {/* ── The Challenges ───────────────────────────────────────────── */}
      <section aria-labelledby="challenges-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 id="challenges-heading" className="section-title mb-12 lg:mb-16">
              Building It <span className="text-primary">Anyway</span>
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="space-y-6 lg:order-1">
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  I have had some challenges in training students and communities, including a lack
                  of technological components, especially computers, cultural norms, and
                  financial capacity to build tech solutions and run tech programmes.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  In many communities, the idea of a young person spending time on a computer,
                  rather than on domestic or family duties, is a point of contention that must be
                  navigated with patience and proof. The financial capacity to build and
                  sustain tech programmes in underserved areas remains a persistent and
                  honest challenge.
                </p>
              </FadeIn>
              <FadeIn delay={220}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.75 }}>
                  But the obstacles don't change what is true: a person with digital
                  skills is a person with options. And a community where people have
                  options is a community that grows.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={100} className="w-full lg:order-2">
              <StoryImage
                src={null}
                alt="Community members in a rural area learning digital skills"
                caption="Community outreach programme, Ogun State"
                aspect="aspect-[4/3]"
              />
            </FadeIn>

          </div>
        </div>
      </section>


      {/* ── Vision + Mission ─────────────────────────────────────────── */}
      <section aria-labelledby="vision-mission-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 id="vision-mission-heading" className="section-title mb-12 lg:mb-16">
              Vision &amp; <span className="text-primary">Mission</span>
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pb-16 lg:pb-24 border-b border-bdr mb-16 lg:mb-24">

            <FadeIn delay={80}>
              <div className="border-t-2 border-accent pt-8">
                <p className="font-body font-semibold text-primary uppercase mb-5"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.16em" }}>
                  Our Vision
                </p>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  To equip students, youth, and underserved communities with access
                  to digital technology-based, life-altering opportunities so they
                  can achieve fulfilment in both their personal and professional
                  lives. In essence, we are creating the{" "}
                  <span className="font-semibold text-secondary">"tech-preneurs"</span>{" "}
                  of tomorrow — innovators who will use technology to tackle the world's issues.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="border-t-2 border-secondary/15 pt-8">
                <p className="font-body font-semibold text-primary uppercase mb-5"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.16em" }}>
                  Our Mission
                </p>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  To actively empower students, youth, and underserved communities with ICT, business, and financial
                  literacy skills in order to elevate them to be{" "}
                  <span className="font-semibold text-secondary">leaders and agents of change</span>.
                </p>
              </div>
            </FadeIn>

          </div>

          {/* About BSA prose */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <h2 className="section-title mb-8">
                About <span className="text-primary">Blue Sands Academy</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Blue Sands Academy is a training centre for ICT skills. We focus on
                  building the technological capacities of students and communities,
                  starting with {AUDIENCE_DESCRIPTOR}. We believe
                  that fostering young people's interest in technology starts at an early age,
                  and that this is not only a good idea but an essential one.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  By providing training, we are helping our students become more confident
                  in their own abilities, and start thinking about what they would like to
                  do with their lives. This can greatly improve their chances of succeeding
                  in future careers.
                </p>
              </FadeIn>
              <FadeIn delay={220}>
                <p className="font-body text-secondary leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Blue Sands Academy was founded by Alero Thompson, who recognised that
                  the world of technology was changing rapidly and that training programmes
                  in ICT were severely lacking for students and underserved communities. We set out to close
                  that gap. We are still closing it.
                </p>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>


      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="border-t-2 border-accent pt-10 max-w-2xl">
              <h2 className="section-title mb-5">
                Be Part of the <span className="text-primary">Change</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Blue Sands Academy is not a charity project. It is an investment in the
                most underleveraged asset in Nigerian society: the intelligence, ambition,
                and capability of its students, youth, and communities.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Partner With Us
                </Link>
                <Link href="/about/team"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group">
                  Meet the Team
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
