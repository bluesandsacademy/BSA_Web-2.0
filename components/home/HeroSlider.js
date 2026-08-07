"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/*
  Subtext rule: one short, declarative sentence — 8-12 words.
  It completes the headline's thought, never restates it.
*/
const SLIDES = [
  {
    num: "01",
    lines: [
      "We Invest In",
      { before: "", pink: "People", after: " and Communities" },
    ],
    body: "So they can have the technological skills to turn their lives and communities around.",
    cta: "Partner With Us",
    href: "/contact",
    image: "/hero-slides/slide1.jpg",
  },
  {
    num: "02",
    lines: [
      "Closing the Digital",
      { before: "Divide ", pink: "Starts", after: " Here" },
    ],
    body: "Students, youth, and underserved communities need to be given the tools they need to use technology.",
    cta: "See How",
    href: "/services/stem-training",
    image: "/hero-slides/slide2.jpg",
  },
  {
    num: "03",
    lines: [
      { before: "Persons With ", pink: "Disabilities", after: "" },
      "Are Our Priority",
    ],
    body: "Building skills through a journey of empowerment, confidence, and full potential.",
    cta: "Learn More",
    href: "/programs/economic-empowerment",
    image: "/hero-slides/slide3.jpg",
  },
  {
    num: "04",
    lines: [
      "Powering Students and",
      { before: "Youth to ", pink: "Excel", after: "" },
      "in Their Chosen Field",
    ],
    body: "Moving students and youth forward through technology.",
    cta: "See Our Impact",
    href: "/about",
    image: "/hero-slides/slide4.jpg",
  },
  {
    num: "05",
    lines: [
      "Everyone Has a Place",
      { before: "In the ", pink: "Revolution", after: "" },
    ],
    body: "Creating a generation of leaders in technology.",
    cta: "Join the Movement",
    href: "/about/story",
    image: "/hero-slides/slide5.jpg",
  },
];

const INTERVAL = 7000;
const NAV_H_DESKTOP = 72;

function renderLine(line) {
  if (typeof line === "string") return line;
  return (
    <>
      {line.before}
      <span className="text-primary">{line.pink}</span>
      {line.after}
    </>
  );
}

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
  const bodyDelay = `${slide.lines.length * 0.13 + 0.12}s`;
  const ctaDelay  = `${slide.lines.length * 0.13 + 0.26}s`;

  return (
    <section
      id="s-hero"
      aria-label="Featured initiatives"
      aria-roledescription="carousel"
      className="relative bg-white overflow-hidden lg:min-h-screen lg:flex lg:flex-col"
    >

      {/* ════════════════════════════════════════════════════════════════
          MOBILE IMAGE — full-width, visible only below lg
      ════════════════════════════════════════════════════════════════ */}
      <div
        className="lg:hidden relative w-full shrink-0"
        style={{ height: "52svh" }}
        aria-hidden="true"
      >
        <div
          key={`mob-img-${index}`}
          className="absolute inset-0"
          style={{ animation: "fade-in 0.75s ease both" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient: bottom of image fades into white */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "55%",
            background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
          }}
        />

        {/* Mobile slide counter — top-right corner */}
        <div
          className="absolute top-5 right-5 font-body font-medium tabular-nums"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {slide.num} / 0{SLIDES.length}
        </div>
      </div>


      {/* ════════════════════════════════════════════════════════════════
          DESKTOP IMAGE GRID — absolute, right 45%
      ════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:grid absolute inset-0 pointer-events-none"
        style={{ gridTemplateColumns: "55% 45%" }}
        aria-hidden="true"
      >
        <div />
        <div
          key={`img-${index}`}
          className="relative"
          style={{ animation: "fade-in 0.75s ease both" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="45vw"
          />
        </div>
      </div>

      {/* Pink divider at 55% — left edge of image panel */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 w-px bg-accent z-10"
        style={{ left: "55%" }}
        aria-hidden="true"
      />

      {/* Far-left pink bar */}
      <div
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-accent z-10"
        aria-hidden="true"
      />

      {/* Ghost slide number — anchored bottom-left of text panel */}
      <div
        className="hidden lg:block absolute select-none pointer-events-none font-display font-bold text-secondary"
        style={{
          fontSize: "clamp(16rem, 26vw, 22rem)",
          lineHeight: 0.85,
          opacity: 0.032,
          bottom: "-2rem",
          left: "0.5rem",
        }}
        aria-hidden="true"
      >
        {slide.num}
      </div>


      {/* ════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 lg:flex lg:flex-col lg:flex-1 w-full max-w-7xl mx-auto px-6 lg:px-8">

        {/* Desktop navbar spacer */}
        <div className="hidden lg:block shrink-0" style={{ height: NAV_H_DESKTOP }} />

        <div className="lg:flex-1 lg:flex lg:items-center pt-2 pb-8 lg:py-0">
          <div className="w-full lg:max-w-[50%]">

            {/* Slide counter — desktop */}
            <p
              key={`${rev}-counter`}
              className="hidden lg:block font-body font-medium text-muted mb-7 tabular-nums animate-fade-up"
              style={{ fontSize: "0.75rem", letterSpacing: "0.12em", animationDelay: "0s" }}
            >
              {slide.num} &nbsp;·&nbsp; 0{SLIDES.length}
            </p>

            {/* Headline */}
            <h1 className="mb-0" aria-live="polite" aria-atomic="true">
              {slide.lines.map((line, i) => (
                <span
                  key={`${rev}-line-${i}`}
                  className="block overflow-hidden"
                  style={{ lineHeight: 1.02, marginBottom: "0.04em" }}
                >
                  <span
                    className="block text-secondary font-display font-bold tracking-display animate-line-reveal"
                    style={{
                      fontSize: "clamp(2.5rem, 5.8vw, 5.2rem)",
                      animationDelay: `${i * 0.13}s`,
                    }}
                  >
                    {renderLine(line)}
                  </span>
                </span>
              ))}
            </h1>

            {/*
              Pink accent bridge — visually connects headline to body.
              Appears as a short horizontal rule in pink, not a divider.
            */}
            <div
              key={`${rev}-bridge`}
              className="rounded-full bg-accent animate-fade-up"
              style={{
                width: 36,
                height: 2,
                marginTop: "1.5rem",
                marginBottom: "1.1rem",
                animationDelay: bodyDelay,
              }}
              aria-hidden="true"
            />

            {/* Body — short, punchy, medium weight */}
            <p
              key={`${rev}-body`}
              className="font-body font-medium text-secondary animate-fade-up"
              style={{
                fontSize: "clamp(1rem, 1.35vw, 1.15rem)",
                lineHeight: 1.55,
                marginBottom: "2.25rem",
                animationDelay: bodyDelay,
              }}
            >
              {slide.body}
            </p>

            {/* CTAs */}
            <div
              key={`${rev}-ctas`}
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 animate-fade-up"
              style={{ animationDelay: ctaDelay }}
            >
              <Link
                href={slide.href}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {slide.cta}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-secondary/20 text-muted font-body font-medium text-sm transition-all hover:border-secondary/40 hover:bg-surface"
              >
                All Programs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Progress nav — MOBILE */}
            <div
              className="lg:hidden flex items-center gap-2 mt-8"
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
                  className="relative rounded-full overflow-hidden transition-[width,opacity] duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  style={{
                    width: i === index ? 40 : 8,
                    height: 3,
                    opacity: i === index ? 1 : 0.25,
                  }}
                >
                  <span className="absolute inset-0 rounded-full bg-secondary/20" />
                  {i === index && (
                    <span
                      key={`mob-prog-${rev}`}
                      className="absolute inset-0 rounded-full bg-primary origin-left"
                      style={{ animation: `progress-fill ${INTERVAL}ms linear forwards` }}
                    />
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════════════════════════════
          PROGRESS NAV — desktop only
      ════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-10 shrink-0">
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
              className="relative rounded-full overflow-hidden transition-[width,opacity] duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              style={{
                width: i === index ? 40 : 8,
                height: 3,
                opacity: i === index ? 1 : 0.3,
              }}
            >
              <span className="absolute inset-0 rounded-full bg-secondary/20" />
              {i === index && (
                <span
                  key={`prog-${rev}`}
                  className="absolute inset-0 rounded-full bg-primary origin-left"
                  style={{ animation: `progress-fill ${INTERVAL}ms linear forwards` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
