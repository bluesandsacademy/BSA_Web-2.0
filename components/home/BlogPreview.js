"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const posts = [
  {
    tag: "Education",
    title: "Why Digital Literacy Is the Most Urgent Skill Gap in Nigeria Right Now",
    excerpt: "With over 90% of jobs now requiring digital competency, the cost of leaving students, youth, and underserved communities out of the digital economy is not just social. It is economic.",
    date: "May 2025",
    href: "/insights/blog",
  },
  {
    tag: "Community",
    title: "What Happened When We Brought a STEM Lab to a Rural Secondary School in Ogun State",
    excerpt: "A school with no computers, no reliable electricity, and students who had never touched a keyboard. Here is what changed in twelve weeks.",
    date: "Apr 2025",
    href: "/insights/blog",
  },
  {
    tag: "Impact",
    title: "From Trainee to Tech Lead: How One Student One Laptop Changed a Graduate's Career",
    excerpt: "Amara received her laptop in 2021. By 2023 she was leading the frontend team at a Lagos fintech startup. This is her account.",
    date: "Mar 2025",
    href: "/insights/blog",
  },
];

function PostCard({ post, index, visible }) {
  return (
    <Link
      href={post.href}
      className="group block border-t-2 border-bdr hover:border-pink pt-8 transition-[border-color] duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms, border-color 0.3s ease`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-body font-semibold text-primary uppercase"
          style={{ fontSize: "0.67rem", letterSpacing: "0.14em" }}
        >
          {post.tag}
        </span>
        <span className="w-1 h-1 rounded-full bg-bdr" aria-hidden="true" />
        <span className="font-body text-muted" style={{ fontSize: "0.67rem" }}>{post.date}</span>
      </div>

      <h3
        className="font-display font-bold text-secondary group-hover:text-primary transition-colors leading-snug mb-3"
        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", letterSpacing: "-0.01em" }}
      >
        {post.title}
      </h3>

      <p className="font-body text-muted text-sm leading-relaxed mb-5">
        {post.excerpt}
      </p>

      <span className="inline-flex items-center gap-1.5 font-body font-bold text-xs text-primary group-hover:text-pink transition-colors">
        Read more
        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export default function BlogPreview() {
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
    <section
      id="s-blog"
      aria-labelledby="blog-preview-heading"
      className="py-16 lg:py-28 bg-surface"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-end justify-between mb-16 gap-6">
          <h2
            id="blog-preview-heading"
            className="section-title"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            From the <span className="text-primary">Blog</span>
          </h2>
          <Link
            href="/insights/blog"
            className="hidden sm:inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group shrink-0"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 150ms, color 0.2s ease",
            }}
          >
            View all posts
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} visible={visible} />
          ))}
        </div>

        <Link
          href="/insights/blog"
          className="sm:hidden inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group mt-10"
        >
          View all posts
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

      </div>
    </section>
  );
}
