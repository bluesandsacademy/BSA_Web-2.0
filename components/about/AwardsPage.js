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

const AWARDS = [
  {
    year: "2023",
    title: "Women in Tech Africa Award",
    body: "Recognised for outstanding contribution to digital skills development among students and communities across Nigeria.",
    issuer: "Women in Tech Africa",
  },
  {
    year: "2022",
    title: "NITDA Digital Inclusion Champion",
    body: "Awarded by the National Information Technology Development Agency for sustained efforts in closing the digital divide.",
    issuer: "NITDA",
  },
  {
    year: "2022",
    title: "UN Women HeForShe Impact Champion",
    body: "Selected as a HeForShe impact champion for measurable outcomes in gender equality through technology education.",
    issuer: "UN Women Nigeria",
  },
  {
    year: "2021",
    title: "CcHub EdTech Innovator Grant",
    body: "Awarded a development grant in recognition of BSA's model for scaling community-based ICT education for underserved communities.",
    issuer: "Co-Creation Hub (CcHub)",
  },
  {
    year: "2020",
    title: "World Bank Digital Development Award",
    body: "Commended for innovative programme design that connects rural communities to economic opportunity through digital skills training.",
    issuer: "World Bank Nigeria",
  },
  {
    year: "2019",
    title: "Tony Elumelu Foundation Entrepreneurship Award",
    body: "Selected among the top social enterprises in the TEF 2019 cohort for impactful and scalable approach to community economic empowerment.",
    issuer: "Tony Elumelu Foundation",
  },
];

const MEDIA = [
  { outlet: "TechCabal", title: "The organisation training 1,000 women a year to code in Nigeria", year: "2023" },
  { outlet: "The Guardian Nigeria", title: "How Blue Sands Academy is closing the gender gap — one girl at a time", year: "2022" },
  { outlet: "Channels Television", title: "Feature: Women, Technology and Nigeria's Digital Future", year: "2022" },
  { outlet: "BusinessDay Nigeria", title: "BSA: Building a pipeline of female tech talent from the grassroots", year: "2021" },
];

export default function AwardsPage() {
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
          Awards
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            About · Awards
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Recognition That <span className="text-primary">Matters</span>
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            The real reward is in the students and communities who go on to build careers and
            futures. But when the work is acknowledged by those who watch this sector
            closely, it confirms we are building something worth seeing.
          </p>
        </div>
      </section>

      {/* Awards list */}
      <section aria-labelledby="awards-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 id="awards-heading" className="section-title mb-16 lg:mb-20">
            Awards &amp; <span className="text-primary">Recognition</span>
          </h2>

          <div className="divide-y divide-bdr">
            {AWARDS.map((award, i) => (
              <FadeIn key={award.title} delay={i * 70}>
                <div className="grid lg:grid-cols-[120px_1fr_220px] gap-4 lg:gap-12 py-10 items-start">

                  {/* Year */}
                  <div
                    className="font-display font-bold text-secondary/20 leading-none select-none"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
                    aria-label={`Year: ${award.year}`}
                  >
                    {award.year}
                  </div>

                  {/* Title + body */}
                  <div>
                    <h3
                      className="font-display font-bold text-secondary mb-3"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", letterSpacing: "-0.02em" }}
                    >
                      {award.title}
                    </h3>
                    <p className="font-body text-muted leading-relaxed text-sm">
                      {award.body}
                    </p>
                  </div>

                  {/* Issuer */}
                  <div className="lg:text-right">
                    <span
                      className="inline-block font-body font-semibold text-primary uppercase"
                      style={{ fontSize: "0.68rem", letterSpacing: "0.12em" }}
                    >
                      {award.issuer}
                    </span>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* Media mentions */}
      <section aria-labelledby="media-heading" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 id="media-heading" className="section-title mb-16">
            In the <span className="text-primary">Press</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {MEDIA.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="border-t-2 border-accent pt-8">
                  <p
                    className="font-body font-semibold text-primary uppercase mb-3"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.14em" }}
                  >
                    {item.outlet} &middot; {item.year}
                  </p>
                  <p
                    className="font-display font-bold text-secondary leading-tight"
                    style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
