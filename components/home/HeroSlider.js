"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const SLIDES = [
  {
    num: "01",
    lines: ["We Invest In", "Women and Girls"],
    body: "so that they can have the technological skills to turn their lives and communities around.",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    num: "02",
    lines: ["Closing the", "Gender Digital", "Gap Starts Here"],
    body: "Women and girls need to be given the tools they need to use technology.",
    cta: "See How",
    href: "/focus-areas/stem-training",
  },
  {
    num: "03",
    lines: ["Women With", "Disabilities Are", "Our Priority"],
    body: "We build the skills of women and girls with disabilities through a journey of confidence, empowerment, and independence toward their full potential.",
    cta: "Learn More",
    href: "/focus-areas/disabilities",
  },
  {
    num: "04",
    lines: ["Powering Girls", "To Excel in Their", "Chosen Field"],
    body: "Moving women and girls forward through technology.",
    cta: "See Our Impact",
    href: "/about",
  },
  {
    num: "05",
    lines: ["A Woman's Place", "Is in the Revolution"],
    body: "Creating a generation of female leaders.",
    cta: "Join the Movement",
    href: "/volunteer",
  },
];

const INTERVAL = 7000;

export default function HeroSlider() {
  const [index, setIndex]   = useState(0);
  const [rev, setRev]       = useState(0); // increments to re-trigger CSS animations
  const intervalRef         = useRef(null);

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
      className="relative min-h-screen flex flex-col bg-secondary overflow-hidden"
    >
      {/* ── Background: solid navy. Swap for per-slide <Image> later ── */}
      <div className="absolute inset-0 bg-secondary" aria-hidden="true" />

      {/* ── Subtle dark vignette from left so text is always legible ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(2,52,90,0.97) 0%, rgba(2,52,90,0.82) 55%, rgba(2,52,90,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Ghost slide number — typographic texture ── */}
      <div
        key={`ghost-${index}`}
        className="absolute bottom-0 right-0 font-display font-bold select-none pointer-events-none text-white leading-none"
        style={{
          fontSize: "clamp(200px, 38vw, 520px)",
          opacity: 0.028,
          transform: "translateY(8%)",
          letterSpacing: "-0.04em",
        }}
        aria-hidden="true"
      >
        {slide.num}
      </div>

      {/* ── Left pink accent bar ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink"
        aria-hidden="true"
      />

      {/* ── Decorative dot grid (top-right) ── */}
      <div
        className="absolute top-20 right-0 w-48 h-64 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content grid ── */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-8 lg:px-14 grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_430px] gap-10 items-center pt-28 pb-20 lg:pt-36 lg:pb-24">

        {/* Left: text ─────────────────────────────────────────── */}
        <div>
          {/* Slide counter */}
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <span className="font-body font-bold text-[11px] text-pink tracking-[0.24em] uppercase tabular-nums">
              {slide.num}
            </span>
            <span className="block h-px w-14 bg-white/20 shrink-0" />
            <span className="font-body text-[11px] text-white/30 tracking-[0.24em] uppercase tabular-nums">
              {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Headline — each line is a cascade-reveal clip */}
          <h1
            className="mb-6 lg:mb-8"
            aria-live="polite"
            aria-atomic="true"
          >
            {slide.lines.map((line, i) => (
              <span
                key={`${rev}-line-${i}`}
                className="block overflow-hidden leading-display"
                style={{ marginBottom: "0.08em" }}
              >
                <span
                  className="block text-white font-display font-bold tracking-display animate-line-reveal"
                  style={{
                    fontSize: "clamp(2.1rem, 5.2vw, 4rem)",
                    animationDelay: `${i * 0.14}s`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Body */}
          <p
            key={`${rev}-body`}
            className="font-body text-white/58 leading-snug max-w-lg mb-8 lg:mb-10 animate-fade-up"
            style={{
              fontSize: "clamp(0.95rem, 1.35vw, 1.05rem)",
              animationDelay: "0.48s",
            }}
          >
            {slide.body}
          </p>

          {/* CTAs */}
          <div
            key={`${rev}-ctas`}
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.62s" }}
          >
            <Link
              href={slide.href}
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-pink text-white font-body font-bold text-sm transition-all hover:opacity-88 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              {slide.cta}
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/25 text-white font-body font-medium text-sm transition-all hover:border-white/55 hover:bg-white/5"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: photo placeholder ───────────────────────────── */}
        <div
          className="hidden lg:flex relative flex-col justify-end rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
          style={{ height: "clamp(360px, 42vh, 480px)" }}
          aria-hidden="true"
        >
          {/* Diagonal accent stripe */}
          <div
            className="absolute top-0 left-0 w-full h-1 bg-pink opacity-60"
          />
          <div className="p-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/12 mb-4">
              <span className="w-2 h-2 rounded-full bg-pink shrink-0" />
              <span className="font-body text-[10px] text-white/40 uppercase tracking-[0.16em]">
                Photo placeholder
              </span>
            </span>
            <p className="font-body text-xs text-white/22 leading-relaxed max-w-[200px]">
              Replace with photography per slide before launch.
            </p>
          </div>
        </div>
      </div>

      {/* ── Progress nav ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pb-10">
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
              className="relative h-[3px] rounded-full overflow-hidden transition-[width] duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-secondary"
              style={{ width: i === index ? 60 : 22 }}
            >
              {/* Track */}
              <span className="absolute inset-0 rounded-full bg-white/18" />
              {/* Active fill */}
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
