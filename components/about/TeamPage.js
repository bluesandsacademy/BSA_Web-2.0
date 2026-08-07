"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/*
  Photo paths (add files to /public to activate):
  Alero      → /public/ceo.jpeg
  Kingsley   → /public/home/team/kingsley.jpg
  WS Michael → /public/home/team/michael.jpeg
  Ifedayo    → /public/home/team/ife.jpg
  Chibueze   → /public/home/team/chibueze.jpg
  Mfoniso    → /public/home/team/mfoniso.jpg
  Daniel     → /public/home/team/daniel.jpg
*/
const TEAM = [
  {
    name: "Alero Thompson",
    role: "Co-Founder / CEO",
    bio: "Co-Founder and CEO of Blue Sands STEM Labs and a standout voice in business, technology, and STEM education.",
    src: null, // "/ceo.jpeg"
    initials: "AT",
    linkedin: "#",
  },
  {
    name: "Kingsley Okechukwu",
    role: "Co-Founder / CTO",
    bio: "CTO at Blue Sands STEM Labs with 10+ years at the intersection of Information Technology and Marketing/Media Strategy.",
    src: null, // "/home/team/kingsley.jpg"
    initials: "KO",
    linkedin: "#",
  },
  {
    name: "WS Michael",
    role: "Head of HR",
    bio: "He leads people strategy and talent development, building high-performing teams and fostering a culture where individuals and the organisation thrive together.",
    src: null, // "/home/team/michael.jpeg"
    initials: "WM",
    linkedin: "#",
  },
  {
    name: "Ifedayo (Michael) Adedeji",
    role: "Lead Solutions Architect",
    bio: "Seasoned architect with 9+ years of experience across radar threats telemetry systems, banking security, and fintech systems, now engineering the core architecture powering Blue Sands intelligent edtech platform.",
    src: null, // "/home/team/ife.jpg"
    initials: "IA",
    linkedin: "#",
  },
  {
    name: "Chibueze Arisa",
    role: "Front-End Developer",
    bio: "Builds clean, performant user interfaces that bring the BSA platform to life, with a sharp focus on accessibility and responsive design.",
    src: null, // "/home/team/chibueze.jpg"
    initials: "CA",
    linkedin: "#",
  },
  {
    name: "Mfoniso Ibokette",
    role: "Lead Product Designer",
    bio: "He designs end-to-end digital products that balance business goals with real user needs.",
    src: null, // "/home/team/mfoniso.jpg"
    initials: "MI",
    linkedin: "#",
  },
  {
    name: "Aboderin Daniel",
    role: "Frontend Developer",
    bio: "A passionate frontend developer focused on building clean, responsive, and performant user interfaces that bring products to life on the web.",
    src: null, // "/home/team/daniel.jpg"
    initials: "AD",
    linkedin: "#",
  },
];

function TeamCard({ member, index }) {
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
      className="transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Photo */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "3/4" }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-10" />

        {member.src ? (
          <Image
            src={member.src}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, rgba(4,131,226,0.12) 0%, rgba(2,52,90,0.55) 100%)" }}
            aria-hidden="true"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-white"
              style={{ background: "rgba(230,63,142,0.2)", border: "1px solid rgba(230,63,142,0.3)", fontSize: "1.1rem" }}
            >
              {member.initials}
            </div>
            <p className="font-body text-white/20 uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
              Photo coming soon
            </p>
          </div>
        )}
      </div>

      {/* Identity */}
      <h3
        className="font-display font-bold text-secondary mb-0.5"
        style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", letterSpacing: "-0.02em" }}
      >
        {member.name}
      </h3>
      <p className="font-body font-medium text-primary text-xs mb-3">{member.role}</p>
      <p className="font-body text-muted text-sm leading-relaxed mb-4">{member.bio}</p>

      {/* LinkedIn */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="inline-flex items-center gap-1.5 font-body font-semibold text-xs text-muted hover:text-primary transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(12rem, 24vw, 20rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Team
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            About · Our Team
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            The People <span className="text-primary">Building</span> the Mission
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-lg" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            A focused team with a clear conviction: the digital skills gap in
            Nigeria closes when communities build the tools to close it themselves.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section aria-labelledby="team-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="team-heading" className="section-title mb-16 lg:mb-20">
            Core <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t-2 border-accent pt-10 max-w-2xl">
            <h2 className="section-title mb-5">
              Want to <span className="text-primary">Join</span> the Team?
            </h2>
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We are always looking for educators, technologists, and community
              builders who believe in what we are building.
            </p>
            <Link
              href="/insights/careers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
            >
              See Open Roles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
