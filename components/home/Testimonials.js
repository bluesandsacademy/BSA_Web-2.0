"use client";

import { useState } from "react";

const testimonials = [
  {
    context: "National ICT Competition Champion",
    quote:
      "All through my secondary school, I have never had the opportunity to have a one-on-one mentorship, and also been encouraged to go into tech, not until Blue Sands Academy was preparing us for an ICT competition. I was fortunate to be selected by Miss Alero for her training team. She and her team taught us how to build a mobile App that will solve the problem of Maternal Mortality. After the training, we went for the competition and we defeated over 150 secondary schools across Nigeria and became the National Champions.",
    name: "Saphia Yakubu",
    role: "BSA Student",
  },
  {
    context: "Anchor College",
    quote:
      "I am a student of Anchor College, and I was fortunate to be trained by Blue Sands Academy. During this training, we were taught how to build mobile Apps, and I was among the team that built an App called Mamoth360 that will help solve the problem of maternal mortality. We were told that the computer world is not only for boys but also for girls. When I finish my secondary school education, I will like to study Computer Science at the university.",
    name: "Thelma Solomon",
    role: "Secondary School Student",
  },
  {
    context: "BSA Skills Training Graduate",
    quote:
      "Nobody has made me feel loved by others before, except my family members. I am a girl that has issues with my right leg. Nobody likes to be my friend. My community doesn't like me because I have a disability, but not until I came in contact with Blue Sands Academy. They organised a skills training session where I learnt how to bake, and now, I am in a baking school as an intern. I have made new friends because I make fantastic cakes that people like, and this made them like me, too.",
    name: "Salome Gabriel",
    role: "Skills Training Graduate",
  },
  {
    context: "BSA Graduate",
    quote:
      "Blue Sands Academy has greatly encouraged me to take up Computer Science as a course of study at university. They have given me the opportunity to learn how to build mobile Apps, something that I would not have been able to do with my regular school curriculum.",
    name: "Grace Dominic",
    role: "BSA Graduate",
  },
  {
    context: "BSA Graduate",
    quote:
      "I would like to say the Blue Sands Academy is the best training I have ever had. The instructors are knowledgeable and professional. They gave us real-life experiences so that we can relate to and use them when we start developing our own apps.",
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
    <section id="s-testimonials" aria-labelledby="testimonials-heading" className="py-16 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <h2 id="testimonials-heading" className="section-title">
          Voices of{" "}
          <span className="text-primary">Change</span>
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
              <p className="font-body font-bold text-primary text-xs uppercase tracking-[0.16em] mb-6">
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
                  backgroundColor: i === current ? "var(--color-primary)" : "#e2ebf6",
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
