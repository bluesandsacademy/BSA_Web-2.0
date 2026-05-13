"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    num: "01",
    lines: ["We Invest In", "Women and Girls"],
    body: "so that they can have the technological skills to turn their lives and communities around.",
    cta: "Partner With Us",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    lines: ["Closing the", "Gender Digital", "Gap Starts Here"],
    body: "Women and girls need to be given the tools they need to use technology.",
    cta: "See How",
    href: "/focus-areas/stem-training",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&auto=format&fit=crop&q=80",
  },
  {
    num: "03",
    lines: ["Women With", "Disabilities Are", "Our Priority"],
    body: "We build the skills of women and girls with disabilities through a journey of confidence, empowerment, and independence.",
    cta: "Learn More",
    href: "/focus-areas/disabilities",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=1400&auto=format&fit=crop&q=80",
  },
  {
    num: "04",
    lines: ["Powering Girls", "To Excel in Their", "Chosen Field"],
    body: "Moving women and girls forward through technology.",
    cta: "See Our Impact",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&auto=format&fit=crop&q=80",
  },
  {
    num: "05",
    lines: ["A Woman's Place", "Is in the Revolution"],
    body: "Creating a generation of female leaders.",
    cta: "Join the Movement",
    href: "/volunteer",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&auto=format&fit=crop&q=80",
  },
];

const INTERVAL = 7000;
const NAV_H_DESKTOP = 72;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [rev, setRev] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
      setRev((r) => r + 1);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [startTimer]);

  const goTo = (i) => {
    setIndex(i);
    setRev((r) => r + 1);
    startTimer();
  };

  const slide = SLIDES[index];

  return (
    <section
      aria-label="Featured initiatives"
      aria-roledescription="carousel"
      className="relative min-h-[85svh] lg:min-h-screen flex flex-col overflow-hidden bg-secondary"
    >
      {/* ── Full-bleed background image ──────────────────────────────── */}
      <div
        key={`img-${index}`}
        className="absolute inset-0"
        style={{ animation: "fade-in 0.9s ease-in-out both" }}
        aria-hidden="true"
      >
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized
        />

        {/* Left-heavy gradient overlay — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(2,52,90,0.93) 0%, rgba(2,52,90,0.70) 38%, rgba(2,52,90,0.28) 62%, rgba(2,52,90,0.08) 80%, transparent 100%)",
          }}
        />

        {/* Bottom scrim — progress nav legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-36"
          style={{
            background:
              "linear-gradient(to top, rgba(2,52,90,0.55) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Ghost slide number — background texture ──────────────────── */}
      <div
        className="absolute pointer-events-none select-none font-display font-bold text-white leading-none"
        style={{
          fontSize: "clamp(16rem, 32vw, 26rem)",
          opacity: 0.03,
          right: "-1rem",
          bottom: "-1.5rem",
          lineHeight: 0.85,
        }}
        aria-hidden="true"
      >
        {slide.num}
      </div>

      {/* ── Pink left accent bar ─────────────────────────────────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink z-10"
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Spacer — clears the fixed navbar */}
        <div className="shrink-0" style={{ height: NAV_H_DESKTOP }} />

        {/* Text block — vertically centred */}
        <div className="flex-1 flex items-center py-10">
          <div className="w-full lg:max-w-[52%]">
            <h1 className="mb-5 lg:mb-7" aria-live="polite" aria-atomic="true">
              {slide.lines.map((line, i) => (
                <span
                  key={`${rev}-line-${i}`}
                  className="block overflow-hidden"
                  style={{ lineHeight: 1.05, marginBottom: "0.04em" }}
                >
                  <span
                    className="block text-white font-display font-bold tracking-display animate-line-reveal"
                    style={{
                      fontSize: "clamp(2.8rem, 5vw, 4.6rem)",
                      animationDelay: `${i * 0.13}s`,
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              key={`${rev}-body`}
              className="font-body text-white/75 leading-relaxed mb-9 lg:mb-11 animate-fade-up"
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                maxWidth: "40ch",
                animationDelay: `${slide.lines.length * 0.13 + 0.1}s`,
              }}
            >
              {slide.body}
            </p>

            <div
              key={`${rev}-ctas`}
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 animate-fade-up"
              style={{
                animationDelay: `${slide.lines.length * 0.13 + 0.26}s`,
              }}
            >
              <Link
                href={slide.href}
                className="inline-flex items-center justify-center min-w-36 lg:min-w-0 px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                {slide.cta}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/25 text-white/75 font-body font-medium text-sm transition-all hover:border-white/50 hover:text-white hover:bg-white/10"
              >
                All Programs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress nav ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-8 lg:pb-10">
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.num}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="relative rounded-full overflow-hidden transition-[width,opacity] duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              style={{
                width: i === index ? 32 : 8,
                height: 8,
                opacity: i === index ? 1 : 0.3,
              }}
            >
              <span className="absolute inset-0 rounded-full bg-white/25" />
              {i === index && (
                <span
                  key={`prog-${rev}`}
                  className="absolute inset-0 rounded-full bg-pink origin-left"
                  style={{
                    animation: `progress-fill ${INTERVAL}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}

          <span className="ml-auto font-body text-xs text-white/35 tabular-nums tracking-wide">
            {slide.num} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
