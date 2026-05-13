"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    num: "01",
    title: "Digital Skills Training",
    body: "We build the foundation — from digital literacy to coding, UI/UX, and web development. For every woman, wherever she is in her journey.",
    href: "/focus-areas/stem-training",
    imageLeft: true,
    imageCaption: "Digital skills training session",
    image: "/what-we-do/row1.jpg",
  },
  {
    num: "02",
    title: "Tech Competition",
    body: "We put girls on the national stage. Our competitions challenge them to build real tech solutions — and win against hundreds of schools.",
    href: "/focus-areas/tech-competitions",
    imageLeft: false,
    imageCaption: "Tech competition event",
    image: "/what-we-do/row2.jpg",
  },
  {
    num: "03",
    title: "Economic Empowerment of Rural Women",
    body: "Business education, funding, and real opportunity for rural women — so they can build independent livelihoods and lead their communities.",
    href: "/focus-areas/rural-women",
    imageLeft: true,
    imageCaption: "Rural women empowerment programme",
    image: "/what-we-do/row3.jpg",
  },
  {
    num: "04",
    title: "Skills Training for Persons with Disabilities",
    body: "Subsidised technical and vocational training for women and girls with disabilities — giving them the tools and confidence to thrive on their own terms.",
    href: "/focus-areas/disabilities",
    imageLeft: false,
    imageCaption: "Skills training for persons with disabilities",
    image: "/what-we-do/row4.jpg",
  },
];

function FeatureRow({ feature }) {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { num, title, body, href, imageLeft, imageCaption, image } = feature;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    const el = rowRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Image slides in from its own side; text converges from the opposite side */
  const imageEl = (
    <div
      className={[
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary",
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "opacity-100 translate-x-0"
          : imageLeft
          ? "opacity-0 -translate-x-14"
          : "opacity-0 translate-x-14",
      ].join(" ")}
      style={{ transitionDelay: "0ms" }}
      aria-hidden="true"
    >
      <Image
        src={image}
        alt={imageCaption}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 55vw"
      />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-pink z-10" />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 p-5"
        style={{
          background: "linear-gradient(to top, rgba(2,52,90,0.75) 0%, transparent 100%)",
        }}
      >
        <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.16em]">
          {imageCaption}
        </p>
      </div>
    </div>
  );

  const textEl = (
    <div
      className={[
        "relative flex flex-col justify-center overflow-hidden",
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "opacity-100 translate-x-0"
          : imageLeft
          ? "opacity-0 translate-x-10"
          : "opacity-0 -translate-x-10",
      ].join(" ")}
      style={{ transitionDelay: "130ms" }}
    >
      {/* Ghost feature number — same design language as hero slider */}
      <span
        className="absolute bottom-0 right-0 font-display font-bold text-secondary select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(100px, 14vw, 180px)",
          opacity: 0.045,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {num}
      </span>

      <h3
        className="relative font-display font-bold text-secondary leading-[1.12] mb-4"
        style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.3rem)" }}
      >
        {title}
      </h3>
      <p className="relative font-body text-secondary leading-relaxed mb-7 max-w-md">
        {body}
      </p>
      <Link
        href={href}
        className="relative inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group self-start"
      >
        Learn More
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  return (
    <div
      ref={rowRef}
      className="grid lg:grid-cols-[6fr_5fr] gap-12 lg:gap-16 items-center"
    >
      {imageLeft ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageEl}</div>
          <div className="lg:order-1">{textEl}</div>
        </>
      )}
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="s-what-we-do" aria-labelledby="what-we-do-heading" className="py-16 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 id="what-we-do-heading" className="section-title mb-20">
          What We Do
          <br />for <span className="text-pink">Women</span>
        </h2>

        <div className="flex flex-col gap-20 lg:gap-24">
          {features.map((feature) => (
            <FeatureRow key={feature.num} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
}
