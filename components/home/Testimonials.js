"use client";

import { useState } from "react";

const testimonials = [
  {
    context: "National ICT Competition Champion",
    quote:
      "Miss Alero and her team taught us how to build a mobile app to solve the problem of Maternal Mortality. We went for the competition and defeated over 150 secondary schools across Nigeria — and became the National Champions.",
    name: "Saphia Yakubu",
    role: "BSA Student",
  },
  {
    context: "Anchor College",
    quote:
      "I was among the team that built Mamoth360 — an app to help solve maternal mortality. We were told the computer world is not only for boys, but also for girls.",
    name: "Thelma Solomon",
    role: "Secondary School Student",
  },
  {
    context: "BSA Skills Training",
    quote:
      "My community didn't like me because I have a disability — not until I came in contact with Blue Sands Academy. They organised a skills training session where I learnt how to bake. Now I am in a baking school as an intern.",
    name: "Salome Gabriel",
    role: "Skills Training Graduate",
  },
  {
    context: "BSA Graduate",
    quote:
      "Blue Sands Academy gave me the opportunity to learn how to build mobile apps — something I would never have been able to do through my regular school curriculum.",
    name: "Grace Dominic",
    role: "BSA Graduate",
  },
  {
    context: "BSA Graduate",
    quote:
      "The best training I have ever had. The instructors are knowledgeable and professional. They gave us real-life experiences so we can use them when we start developing our own apps.",
    name: "Lydia Idowu",
    role: "BSA Graduate",
  },
];

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

function getCardStyle(index, current, total) {
  const diff = ((index - current) % total + total) % total;
  if (diff === 0) {
    return {
      transform: "translateX(0) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
    };
  }
  if (diff === 1) {
    return {
      transform: "translateX(83%) scale(0.92)",
      opacity: 0.45,
      zIndex: 5,
      pointerEvents: "none",
    };
  }
  if (diff === total - 1) {
    return {
      transform: "translateX(-83%) scale(0.92)",
      opacity: 0.45,
      zIndex: 5,
      pointerEvents: "none",
    };
  }
  return {
    transform: "translateX(0) scale(0.85)",
    opacity: 0,
    zIndex: 1,
    pointerEvents: "none",
  };
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  return (
    <section aria-labelledby="testimonials-heading" className="py-16 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <h2 id="testimonials-heading" className="section-title">
          Their words,{" "}
          <span className="text-pink">not ours.</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto">

        {/* Card stack — overflow-hidden on mobile prevents translateX bleed; lg:overflow-visible lets cards peek, clipped by the section boundary */}
        <div className="relative overflow-hidden lg:overflow-visible" style={{ minHeight: "30rem" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center text-center px-10 py-12 lg:px-16"
              style={{
                ...getCardStyle(i, current, total),
                transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease",
              }}
              aria-hidden={i !== current}
            >
              {/* Context label — like Loom's company logo */}
              <p className="font-body font-bold text-pink text-xs uppercase tracking-[0.16em] mb-6">
                {t.context}
              </p>

              {/* Quote */}
              <blockquote
                className="font-display font-bold text-secondary leading-snug flex-1 mb-10"
                style={{
                  fontSize: "clamp(1rem, 1.7vw, 1.25rem)",
                  letterSpacing: "-0.018em",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Avatar + name */}
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {getInitials(t.name)}
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-secondary text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </div>
          ))}
        </div>

        {/* Controls — arrows + dots in one centred row */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-white shadow-sm border border-bdr flex items-center justify-center text-secondary hover:text-primary transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  backgroundColor: i === current ? "#e63f8e" : "#e2ebf6",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-white shadow-sm border border-bdr flex items-center justify-center text-secondary hover:text-primary transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
