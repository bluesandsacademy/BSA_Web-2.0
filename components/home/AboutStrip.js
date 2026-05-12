import Link from "next/link";

const facts = [
  { value: "2018", label: "Founded" },
  { value: "100%", label: "Women-focused" },
  { value: "6+", label: "States across Nigeria" },
];

export default function AboutStrip() {
  return (
    <section
      aria-labelledby="about-strip-heading"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — heading is the visual anchor */}
        <h2 id="about-strip-heading" className="section-title">
          Empowering Women
          <br />and Girls
          <br />through{" "}
          <span className="text-pink">ICT Skills</span>
        </h2>

        {/* Right — body, facts, CTA */}
        <div>
          <div className="space-y-5 mb-10">
            <p className="font-body text-secondary leading-relaxed">
              Blue Sands Academy offers ICT courses to female students. We focus
              our efforts on assisting girls and women in developing technical
              skills — from secondary school girls to female college students to
              working professionals — to close the gender digital gap through ICT
              training and other tech skills.
            </p>
            <p className="font-body text-secondary leading-relaxed">
              We believe that encouraging young girls' interest in digital
              technology is critical. It is an excellent and necessary way to
              improve the lives of girls and the communities they live in.
            </p>
          </div>

          {/* Facts */}
          <dl className="grid grid-cols-3 gap-6 py-8 border-y border-bdr mb-10">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <dt
                  className="font-display font-bold text-secondary leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  {value}
                </dt>
                <dd className="font-body text-sm text-secondary">
                  {label}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-pink transition-colors group"
          >
            Read Our Full Story
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
