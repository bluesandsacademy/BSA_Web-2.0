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

const tracks = [
  { title: "UI/UX Design", icon: "01" },
  { title: "Mobile App Development", icon: "02" },
  { title: "Web Development", icon: "03" },
  { title: "Animation", icon: "04" },
  { title: "Photography & Videography", icon: "05" },
  { title: "Game Development", icon: "06" },
];

export default function TechFingers() {
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
          Tech
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Program · Tech Fingers
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Tech <span className="text-pink">Fingers</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Our onsite and online secondary school training programme for
            Nigeria and the rest of the world.
          </p>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="tf-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-6">
              <FadeIn>
                <h2 id="tf-heading" className="section-title">
                  Train From <span className="text-pink">Anywhere</span>
                </h2>
              </FadeIn>
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Tech Fingers is our onsite and online secondary school training
                  programme for Nigeria and the rest of the world. Onsite, we
                  train girls in technology and connect them with female mentors
                  who will guide them through a career in technology.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Online, we train young girls in IT skills such as UI/UX Design,
                  Mobile App Development, Photography and Videography, Web
                  Development, and Animation from anywhere in the world.
                </p>
              </FadeIn>
              <FadeIn delay={210}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  The programme provides students with a technical career path in
                  any of the fields listed above. Aside from training and
                  mentoring, we expose young girls to tech competitions where
                  they can showcase the products they have created using
                  technology.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={100} className="space-y-6">
              <div className="bg-surface rounded-2xl p-8 lg:p-10">
                <p className="font-body font-semibold text-primary uppercase mb-5" style={{ fontSize: "0.68rem", letterSpacing: "0.14em" }}>
                  Currently Running
                </p>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.75 }}>
                  Tech Fingers is currently ongoing in Ogombo Community High
                  School, where we are training over 150 junior secondary school
                  girls on how to use a computer and on UI/UX Design and Web
                  Development.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Career tracks */}
      <section aria-labelledby="tracks-heading" className="py-16 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 id="tracks-heading" className="section-title mb-16">
              Career <span className="text-pink">Tracks</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
            {tracks.map((track, i) => (
              <FadeIn key={track.title} delay={i * 70}>
                <div className="border-t-2 border-pink pt-6">
                  <span
                    className="font-display font-bold text-pink mb-3 block"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", letterSpacing: "-0.03em" }}
                    aria-hidden="true"
                  >
                    {track.icon}
                  </span>
                  <h3 className="font-display font-bold text-secondary" style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", letterSpacing: "-0.015em" }}>
                    {track.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tech Fingers */}
      <section aria-labelledby="why-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <FadeIn>
              <h2 id="why-heading" className="section-title mb-8">
                Built for <span className="text-pink">Bold Girls</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={80}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Tech Fingers brings out the creative and innovative genius of a
                  child by training them in Coding, UI/UX Design, Animation,
                  Mobile App Development, and Game Development.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  When your child joins Tech Fingers, they are in for a
                  life-transforming experience through a Career Path journey in
                  tech. We bring out the innovative, audacious, and bold courage
                  for them to dare and solve global challenges.
                </p>
              </FadeIn>
              <FadeIn delay={210}>
                <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                  Our team consists of experienced technology educators, seasoned
                  tech specialists, content creators, and designers. Our
                  instructors will provide you with the skills needed to begin a
                  career in IT at a much earlier age than your peers.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* TechFingers platform CTA */}
      <section className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="section-title mb-5" style={{ color: "white" }}>
                The <span className="text-pink">TechFingers</span> Platform
              </h2>
              <p className="font-body text-white/85 leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                An eLearning platform where secondary school girls, female
                undergraduates, young female professionals, and female job
                seekers can register and start learning at their own pace from
                anywhere. The platform connects young females to other females
                across the globe through a community channel.
              </p>
              <a
                href="https://techfingers.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
              >
                Visit TechFingers.io
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="border-t-2 border-pink pt-10 max-w-2xl">
              <h2 className="section-title mb-5">
                Get Your <span className="text-pink">Child Enrolled</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                Reach out to us to find out how to enroll your child or bring
                Tech Fingers to your school.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
