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
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=960&auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    lines: ["Closing the", "Gender Digital", "Gap Starts Here"],
    body: "Women and girls need to be given the tools they need to use technology.",
    cta: "See How",
    href: "/focus-areas/stem-training",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=960&auto=format&fit=crop&q=80",
  },
  {
    num: "03",
    lines: ["Women With", "Disabilities Are", "Our Priority"],
    body: "We build the skills of women and girls with disabilities through a journey of confidence, empowerment, and independence toward their full potential.",
    cta: "Learn More",
    href: "/focus-areas/disabilities",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=960&auto=format&fit=crop&q=80",
  },
  {
    num: "04",
    lines: ["Powering Girls", "To Excel in Their", "Chosen Field"],
    body: "Moving women and girls forward through technology.",
    cta: "See Our Impact",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=960&auto=format&fit=crop&q=80",
  },
  {
    num: "05",
    lines: ["A Woman's Place", "Is in the Revolution"],
    body: "Creating a generation of female leaders.",
    cta: "Join the Movement",
    href: "/volunteer",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=960&auto=format&fit=crop&q=80",
  },
];

const INTERVAL = 7000;

/*
  Layout logic:
  - Navbar is always bg-white (transparent mode removed). The image grid goes
    `inset-0` so it fills the full section, and the white navbar covers its top
    edge naturally — no gap, no bleed.
  - A pink SVG line runs from the very top of the section; the white navbar
    masks it until the diagonal emerges cleanly below the nav bar.
  - Content uses a spacer div equal to the navbar height so text is never
    hidden behind the fixed bar.
*/

// Navbar: py-6 (24px × 2) + ~24px logo line-height = ~72px desktop
// py-4 (16px × 2) + ~24px                           = ~56px mobile
const NAV_H_DESKTOP = 72;
const NAV_H_MOBILE = 56;

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

  /*
    Diagonal maths (for the SVG accent line):
      Image panel  = right 52% → starts at left: 48%
      clip-path top-left = 18% of panel width = 18% × 52% = 9.36% of section
      → diagonal top    x = 48% + 9.36% = 57.36%  y = 0%
      → diagonal bottom x = 48%                    y = 100%
  */

  return (
    <section
      aria-label="Featured initiatives"
      aria-roledescription="carousel"
      className="relative min-h-[80svh] lg:min-h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* ── Left pink accent bar (desktop) ── */}
      <div
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-pink z-10"
        aria-hidden="true"
      />

      {/*
        ── Image grid layer ──────────────────────────────────────────────
        Fills the full section (inset-0). The white navbar sits on top and
        naturally masks the top of the image — no gap calculation needed.
        The right grid cell is `position: relative` as required by next/image fill.
      */}
      <div
        className="hidden lg:grid absolute inset-0"
        style={{ gridTemplateColumns: "1fr 52%" }}
        aria-hidden="true"
      >
        <div />
        <div
          key={`img-${index}`}
          className="relative"
          style={{
            clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
            animation: "fade-in 0.6s ease-in-out both",
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="52vw"
            unoptimized
          />
        </div>
      </div>

      {/*
        ── Pink diagonal accent line (SVG) ──────────────────────────────
        Runs from section top (y=0) to bottom. The white navbar masks the
        portion above the image; the line only becomes visible right at the
        diagonal edge where the image begins below the nav.
      */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="57.36%"
          y1="0%"
          x2="48%"
          y2="100%"
          stroke="#e63f8e"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-10">
        {/* Spacer — clears the fixed navbar */}
        <div
          className="shrink-0 hidden lg:block"
          style={{ height: NAV_H_DESKTOP }}
        />
        <div className="shrink-0 lg:hidden" style={{ height: NAV_H_MOBILE }} />

        {/* Vertically centred text block */}
        <div className="flex-1 flex items-center py-10">
          <div className="w-full lg:max-w-[44%]">
            <h1 className="mb-5 lg:mb-6" aria-live="polite" aria-atomic="true">
              {slide.lines.map((line, i) => (
                <span
                  key={`${rev}-line-${i}`}
                  className="block overflow-hidden"
                  style={{ lineHeight: 1.06, marginBottom: "0.06em" }}
                >
                  <span
                    className="block text-secondary font-display font-bold tracking-display animate-line-reveal"
                    style={{
                      fontSize: "clamp(2.6rem, 4.2vw, 3.8rem)",
                      animationDelay: `${i * 0.14}s`,
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              key={`${rev}-body`}
              className="font-body font-semibold text-secondary/80 leading-relaxed mb-8 lg:mb-10 animate-fade-up"
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                maxWidth: "38ch",
                animationDelay: "0.48s",
              }}
            >
              {slide.body}
            </p>

            <div
              key={`${rev}-ctas`}
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.62s" }}
            >
              <Link
                href={slide.href}
                className="inline-flex items-center justify-center min-w-36 lg:min-w-0 px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {slide.cta}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-secondary/20 text-secondary/70 font-body font-medium text-sm transition-all hover:border-secondary/40 hover:bg-surface"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div
          className="hidden lg:flex items-center gap-2"
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
              className="relative rounded-full overflow-hidden transition-[width,opacity] duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              style={{
                width: i === index ? 32 : 8,
                height: 8,
                opacity: i === index ? 1 : 0.35,
              }}
            >
              <span className="absolute inset-0 rounded-full bg-secondary/20" />
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
        </div>
      </div>
    </section>
  );
}
