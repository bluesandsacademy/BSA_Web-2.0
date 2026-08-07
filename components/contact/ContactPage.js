"use client";

import { useState } from "react";

const INFO = [
  {
    label: "Email",
    value: "hello@bluesandsacademy.org",
    href: "mailto:hello@bluesandsacademy.org",
  },
  {
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

const INITIAL = { name: "", organisation: "", email: "", phone: "", message: "" };

export default function ContactPage() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Talk
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Contact
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Partner <span className="text-primary">With Us</span>
          </h1>
          <div className="rounded-full bg-accent mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Whether you are a government agency, corporate organisation, NGO, or
            individual investor, we would love to hear from you. Tell us how you
            want to be part of closing the gender digital gap.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* Left — contact info */}
            <div>
              <h2 className="section-title mb-8">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-12" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                We are always open to conversations about partnerships,
                sponsorship, curriculum collaboration, and community impact.
              </p>

              <dl className="space-y-8">
                {INFO.map(({ label, value, href }) => (
                  <div key={label} className="border-t border-bdr pt-6">
                    <dt className="font-body font-semibold text-primary uppercase mb-2" style={{ fontSize: "0.68rem", letterSpacing: "0.14em" }}>
                      {label}
                    </dt>
                    <dd className="font-body text-secondary font-medium" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}>
                      {href ? (
                        <a href={href} className="hover:text-pink transition-colors">{value}</a>
                      ) : value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div className="border-t-2 border-accent pt-10">
                  <h3 className="font-display font-bold text-secondary mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}>
                    Message received.
                  </h3>
                  <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                    Thank you for reaching out. Someone from our team will get
                    back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setFields(INITIAL); }}
                    className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group"
                  >
                    Send another message
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      id="name"
                      label="Full Name"
                      type="text"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="Alero Thompson"
                    />
                    <Field
                      id="organisation"
                      label="Organisation"
                      type="text"
                      value={fields.organisation}
                      onChange={handleChange}
                      placeholder="Blue Sands Academy"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      id="email"
                      label="Email Address"
                      type="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                    />
                    <Field
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body font-semibold text-secondary mb-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Nature of Partnership / Message <span className="text-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell us how you would like to partner with Blue Sands Academy..."
                      className="w-full rounded-xl border border-bdr bg-surface px-4 py-3 font-body text-secondary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      style={{ fontSize: "0.95rem" }}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="font-body text-sm text-pink">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-primary text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type, required, value, onChange, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-body font-semibold text-secondary mb-2"
        style={{ fontSize: "0.85rem" }}
      >
        {label}{required && <span className="text-pink ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-bdr bg-surface px-4 py-3 font-body text-secondary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        style={{ fontSize: "0.95rem" }}
      />
    </div>
  );
}
