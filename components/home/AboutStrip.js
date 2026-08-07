import Link from "next/link";

const facts = [
  { value: "2018", label: "Year founded" },
  { value: "6+", label: "States reached" },
  { value: "3", label: "Flagship programmes" },
  { value: "100%", label: "Access-Focused" },
];

export default function AboutStrip() {
  return (
    <section
      id="s-about"
      aria-labelledby="about-strip-heading"
      className="py-16 lg:py-28 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — heading is the visual anchor */}
        <h2
          id="about-strip-heading"
          className="section-title"
          style={{ color: "white" }}
        >
          About{" "}
          <span className="text-primary">Blue Sands</span>
          <br />Academy
        </h2>

        {/* Right — body, facts, CTA */}
        <div>
          <div className="space-y-5 mb-10">
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy offers ICT courses to students of all
              backgrounds. We focus our efforts on equipping learners with
              technical skills, reaching secondary school students,
              undergraduates, and working professionals. We hope to close the
              digital divide by providing accessible ICT training and other
              tech skills.
            </p>
            <p className="font-body text-white/85 leading-relaxed">
              Blue Sands Academy, a training company, aims to close the digital
              divide by providing students, youth, and underserved communities
              with ICT training and other IT skills. We believe that
              encouraging young people's interest in digital technology is
              critical. Furthermore, we believe that this is an excellent and
              necessary way to improve lives and expand opportunity.
            </p>
          </div>

          {/* Facts */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-white/10 mb-10">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <dt
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  {value}
                </dt>
                <dd className="font-body text-sm text-white/70">
                  {label}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-body font-bold text-sm text-white/90 hover:text-pink transition-colors group"
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

      </div>
    </section>
  );
}
