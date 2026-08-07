"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const members = [
  { name: "Alero Thompson", role: "Co-Founder / CEO", initials: "AT" },
  { name: "Kingsley Okechukwu", role: "Co-Founder / CTO", initials: "KO" },
  { name: "WS Michael", role: "Head of HR", initials: "WM" },
  { name: "Ifedayo Adedeji", role: "Lead Solutions Architect", initials: "IA" },
];

function MemberChip({ member, index, visible }) {
  return (
    <div
      className="flex items-center gap-4 border-t border-bdr pt-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
      }}
    >
      <div
        className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-display font-bold text-white text-xs"
        style={{ background: "rgba(0,119,255,0.15)", border: "1px solid rgba(0,119,255,0.25)" }}
      >
        {member.initials}
      </div>
      <div>
        <p className="font-body font-semibold text-secondary text-sm leading-tight">{member.name}</p>
        <p className="font-body text-muted text-xs mt-0.5">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamHome() {
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
    <section
      id="s-team"
      aria-labelledby="team-home-heading"
      className="py-16 lg:py-28 bg-white"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading + intro */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <h2 id="team-home-heading" className="section-title mb-6">
              The <span className="text-primary">Team</span>
            </h2>
            <div className="rounded-full bg-accent mb-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
            <p
              className="font-body text-secondary leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}
            >
              A focused team of educators, technologists, and community builders
              who have committed their skills to one mission: closing the digital
              divide in Nigeria.
            </p>
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group"
            >
              Meet everyone
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — member list */}
          <div className="flex flex-col gap-5">
            {members.map((m, i) => (
              <MemberChip key={m.name} member={m} index={i} visible={visible} />
            ))}
            <div
              className="border-t border-bdr pt-5"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${members.length * 90}ms`,
              }}
            >
              <p className="font-body text-muted text-sm">+ {3} more team members</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
