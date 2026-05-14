"use client";

import { useState } from "react";

const INITIAL = { name: "", email: "", phone: "", skills: "" };

const reasons = [
  "You are passionate about humanity and want to help in rural areas",
  "You want to give your time to better people's and communities' lives",
  "You have a specific skill you want to use to benefit others",
  "You want to do something worthwhile with your time",
];

export default function VolunteerPage() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/volunteer", {
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
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Give
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Volunteer
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Give Your <span className="text-pink">Time</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Blue Sands Academy volunteering will provide you with a supportive
            environment in which to hone your skills and make a real difference
            in the lives of women and girls across Nigeria.
          </p>
        </div>
      </section>

      {/* Why volunteer + form */}
      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div>
              <h2 className="section-title mb-8">
                Why <span className="text-pink">Volunteer</span>
              </h2>
              <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                You may want to volunteer because:
              </p>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 font-body text-secondary"
                    style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.65 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink shrink-0 mt-2" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div className="border-t-2 border-pink pt-10">
                  <h3 className="font-display font-bold text-secondary mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}>
                    Application received.
                  </h3>
                  <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}>
                    Thank you for your interest in volunteering with Blue Sands
                    Academy. We will be in touch within 5 business days.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setFields(INITIAL); }}
                    className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group"
                  >
                    Submit another application
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-6">
                    <VField id="name" label="Full Name" type="text" required value={fields.name} onChange={handleChange} placeholder="Your full name" />
                    <VField id="email" label="Email Address" type="email" required value={fields.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>

                  <VField id="phone" label="Phone Number" type="tel" required value={fields.phone} onChange={handleChange} placeholder="+234 800 000 0000" />

                  <div>
                    <label
                      htmlFor="skills"
                      className="block font-body font-semibold text-secondary mb-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Area of Interest / Skills (optional)
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      rows={4}
                      value={fields.skills}
                      onChange={handleChange}
                      placeholder="Tell us about your skills or what area you would like to volunteer in..."
                      className="w-full rounded-xl border border-bdr bg-surface px-4 py-3 font-body text-secondary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      style={{ fontSize: "0.95rem" }}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="font-body text-sm text-pink">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Apply to Volunteer"
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

function VField({ id, label, type, required, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-semibold text-secondary mb-2" style={{ fontSize: "0.85rem" }}>
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
