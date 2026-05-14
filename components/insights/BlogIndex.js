"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

function FadeIn({ children, delay = 0, className = "" }) {
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
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const posts = [
  {
    slug: "we-are-the-future-of-technology",
    tag: "Digital Education",
    date: "March 2024",
    title: "We Are the Future of Technology",
    excerpt:
      "ICT is a powerful tool that can be used to drive change in young girls and women. At least one billion young people will enter the workforce over the next decade in developing countries — and more than half do not have the skills needed for decent job opportunities.",
  },
  {
    slug: "women-in-tech",
    tag: "Women in Tech",
    date: "January 2024",
    title: "Women in Tech",
    excerpt:
      "The majority of IT employees are men, but not all is lost. From 2016 to 2022, there was a significant drop in the number of female students studying STEM at university. Only 15% of computing roles are held by women. We are building a different story.",
  },
  {
    slug: "empowering-rural-women-with-skills",
    tag: "Rural Empowerment",
    date: "November 2023",
    title: "Empowering Rural Women with Skills",
    excerpt:
      "Rural women are the backbone of rural societies and communities. Our programme empowers rural women by imparting skills that enable them to earn income and improve their quality of life — rural business training for the new millennium.",
  },
];

export default function BlogIndex() {
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
          Blog
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Insights · Blog
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            From the <span className="text-pink">Blog</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Stories, data, and perspectives on closing the gender digital gap in Africa.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section aria-labelledby="blog-heading" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="blog-heading" className="section-title mb-16">
            All <span className="text-pink">Posts</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <article className="flex flex-col h-full">
                  <div className="h-1 bg-pink rounded-full mb-6" aria-hidden="true" />
                  <p className="font-body font-semibold text-primary uppercase mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.16em" }}>
                    {post.tag} &middot; {post.date}
                  </p>
                  <h3
                    className="font-display font-bold text-secondary leading-tight mb-4 flex-1"
                    style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", letterSpacing: "-0.02em" }}
                  >
                    {post.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed mb-6" style={{ lineHeight: 1.75 }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/insights/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group self-start"
                  >
                    Read Post
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
