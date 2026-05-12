"use client";

import { useState } from "react";

export default function EmailCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="email-cta-heading"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#e63f8e" }}
    >
      {/* Ghost background word */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-white select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(14rem, 30vw, 28rem)", opacity: 0.06, lineHeight: 1 }}
        aria-hidden="true"
      >
        BSA
      </span>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[3fr_2fr] lg:gap-20 lg:items-center">

          {/* Left — oversized headline */}
          <div className="mb-14 lg:mb-0">
            <h2
              id="email-cta-heading"
              className="font-display font-bold leading-none mb-8"
              style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)", letterSpacing: "-0.035em" }}
            >
              <span className="block text-white">Stay close</span>
              <span className="block" style={{ color: "#02345a" }}>to our work.</span>
            </h2>
            <p
              className="font-body leading-relaxed max-w-sm"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}
            >
              Programme updates, competition results, and stories of impact —
              delivered straight to your inbox.
            </p>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="bg-white/15 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display font-bold text-white text-lg mb-1">You&rsquo;re in.</p>
                <p className="font-body text-white/70 text-sm">We&rsquo;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <label htmlFor="email-sub" className="font-body font-bold text-white text-sm">
                  Your email address
                </label>
                <input
                  type="email"
                  id="email-sub"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="name@example.com"
                  required
                  className="w-full px-5 py-4 rounded-full font-body text-sm text-secondary placeholder:text-muted bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                />
                {status === "error" && (
                  <p className="font-body text-sm text-white/90" role="alert">
                    Something went wrong — please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 rounded-full font-body font-bold text-sm text-white transition disabled:opacity-60 hover:opacity-90"
                  style={{ backgroundColor: "#02345a" }}
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </button>
                <p className="font-body text-xs text-center" style={{ color: "rgba(255,255,255,0.55)" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
