"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

/*
  Photo paths (add files to /public to activate):
  Each member → /public/advisory/[slug].jpg
  Set src to the path string once the file is in /public.
*/
const BOARD = [
  {
    name: "Dr. Amaka Okafor",
    title: "Director, National Information Technology Development Agency (NITDA)",
    area: "Policy & Governance",
    bio: "Over two decades shaping Nigeria's national ICT policy framework. Championed inclusion initiatives that expanded broadband access across underserved communities.",
    src: null,
    initials: "AO",
  },
  {
    name: "Folake Adeyemi",
    title: "Partner, Andersen LLP Nigeria",
    area: "Legal & Compliance",
    bio: "Expert in technology law, data protection, and nonprofit governance. Has advised leading edtech and development-sector organisations across West Africa.",
    src: null,
    initials: "FA",
  },
  {
    name: "Prof. Emeka Nwosu",
    title: "Dean, Faculty of Computing, University of Lagos",
    area: "Academia & Research",
    bio: "Pioneering researcher in gender and computing education. Author of multiple studies on closing the digital skills gap among women in sub-Saharan Africa.",
    src: null,
    initials: "EN",
  },
  {
    name: "Chinwe Obiora",
    title: "Former Chief Digital Officer, Access Bank Plc",
    area: "Financial Technology",
    bio: "Led digital transformation for one of Africa's largest banks. Passionate advocate for financial literacy programmes that put women at the centre.",
    src: null,
    initials: "CO",
  },
  {
    name: "Adaeze Ume-Ezeoke",
    title: "Founder, Women in Tech Nigeria",
    area: "Community & Advocacy",
    bio: "Built a 40,000-member network connecting women technologists across Nigeria. Advisor to several international development programmes on gender and digital equity.",
    src: null,
    initials: "AU",
  },
  {
    name: "Engr. Babatunde Salako",
    title: "Director of Engineering, MTN Nigeria",
    area: "Telecommunications",
    bio: "Senior infrastructure leader with responsibility for connectivity projects reaching rural and semi-urban communities. Strong supporter of last-mile digital access.",
    src: null,
    initials: "BS",
  },
];

function BoardCard({ member, index }) {
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
      className="transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Photo */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: "1/1" }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-pink z-10" />

        {member.src ? (
          <Image
            src={member.src}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, rgba(4,131,226,0.12) 0%, rgba(2,52,90,0.55) 100%)" }}
            aria-hidden="true"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-white"
              style={{ background: "rgba(230,63,142,0.2)", border: "1px solid rgba(230,63,142,0.3)", fontSize: "1.2rem" }}
            >
              {member.initials}
            </div>
            <p className="font-body text-white/20 uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
              Photo coming soon
            </p>
          </div>
        )}
      </div>

      {/* Area tag */}
      <p
        className="font-body font-semibold text-primary uppercase mb-2"
        style={{ fontSize: "0.68rem", letterSpacing: "0.14em" }}
      >
        {member.area}
      </p>

      {/* Name */}
      <h3
        className="font-display font-bold text-secondary mb-1"
        style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em" }}
      >
        {member.name}
      </h3>

      {/* Title */}
      <p className="font-body text-muted text-xs leading-relaxed mb-4" style={{ lineHeight: 1.6 }}>
        {member.title}
      </p>

      {/* Bio */}
      <p className="font-body text-muted text-sm leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
}

export default function AdvisoryBoard() {
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
          Board
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            About · Advisory Board
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Guided by <span className="text-pink">Experience</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Seasoned leaders from policy, technology, academia, and finance who lend their
            expertise to shaping a more equitable digital future for Nigerian women and girls.
          </p>
        </div>
      </section>

      {/* Board Grid */}
      <section aria-labelledby="board-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="board-heading" className="section-title mb-16 lg:mb-20">
            Board <span className="text-pink">Members</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {BOARD.map((member, i) => (
              <BoardCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What the board does */}
      <section aria-labelledby="role-heading" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div>
              <h2 id="role-heading" className="section-title mb-8">
                How the Board <span className="text-pink">Shapes BSA</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                The Advisory Board meets quarterly to review BSA's strategic direction,
                programme outcomes, and partnerships. Members provide domain expertise that
                the executive team draws on when expanding into new states, designing
                curriculum, and building relationships with government and private-sector funders.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-10 lg:pt-3">
              {[
                { label: "Strategic Direction", note: "Shaping long-term programme and partnership decisions" },
                { label: "Curriculum Oversight", note: "Ensuring training quality and relevance to industry needs" },
                { label: "Policy Linkage", note: "Connecting BSA's work to national and regional digital-inclusion agendas" },
              ].map(({ label, note }) => (
                <div key={label} className="border-t border-bdr pt-6">
                  <dt className="font-display font-bold text-secondary mb-1" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", letterSpacing: "-0.01em" }}>
                    {label}
                  </dt>
                  <dd className="font-body text-muted text-sm leading-relaxed">{note}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t-2 border-pink pt-10 max-w-2xl">
            <h2 className="section-title mb-5">
              Interested in <span className="text-pink">Advising BSA</span>?
            </h2>
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We welcome nominations from professionals who share our conviction
              that closing Nigeria's digital gender gap is both urgent and achievable.
            </p>
            <a
              href="mailto:hello@bluesandsacademy.org"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
            >
              Get in Touch
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
