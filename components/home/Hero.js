import Link from "next/link";

const stats = [
  { value: "1,200+", label: "Girls Trained" },
  { value: "60+", label: "Partner Schools" },
  { value: "6 States", label: "Across Nigeria" },
  { value: "3", label: "Active Programs" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      {/* Split hero */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-20 pt-28 pb-14 lg:pt-32 lg:pb-20 bg-white">
          <div className="max-w-lg">
            <p
              className="font-body font-semibold text-xs uppercase tracking-[0.18em] text-primary mb-5"
              aria-hidden="true"
            >
              Bridging the Gender Digital Divide
            </p>

            <h1
              id="hero-heading"
              className="font-display font-extrabold text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] text-secondary leading-[1.1] mb-6"
            >
              Where Women{" "}
              <span className="text-primary">Lead</span>{" "}
              in Tech
            </h1>

            <p className="font-body text-lg text-secondary/75 leading-[1.75] mb-9 max-w-md">
              Blue Sands Academy equips women and girls across Nigeria with
              ICT skills, confidence, and networks to thrive in the digital
              economy — regardless of location or background.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-white font-body font-semibold text-[0.95rem] transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Partner With Us
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-body font-semibold text-[0.95rem] transition-colors hover:bg-secondary hover:text-white focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                Explore Programs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-bdr flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="font-body text-xs text-muted uppercase tracking-widest shrink-0">
                Supported by
              </p>
              {["CcHub", "NITDA", "State Governments"].map((name) => (
                <span
                  key={name}
                  className="font-body font-semibold text-sm text-secondary/50"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — photo placeholder (§7: BSA navy bg) */}
        <div
          className="relative hidden lg:flex items-end bg-secondary overflow-hidden"
          aria-hidden="true"
        >
          {/* Accent left edge */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />

          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <svg
              viewBox="0 0 500 500"
              className="w-[90%] h-[90%]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="1" strokeDasharray="6 10" />
              <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="1" strokeDasharray="6 10" />
              <circle cx="250" cy="250" r="80"  stroke="white" strokeWidth="1" strokeDasharray="6 10" />
            </svg>
          </div>

          {/* Photo brief caption */}
          <div className="relative z-10 p-8 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="font-body text-xs text-white/60 uppercase tracking-widest">
                Photo placeholder
              </span>
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Portrait: woman or girl at laptop in training session.
              High energy, warm light. Replace before launch.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-surface border-t border-bdr">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={[
                  "flex flex-col items-center justify-center py-8 px-4 gap-1",
                  i < stats.length - 1 ? "lg:border-r border-bdr" : "",
                  i === 1 ? "border-r border-bdr lg:border-r-0" : "",
                ].join(" ")}
              >
                <dt className="font-display font-bold text-3xl lg:text-4xl text-primary">
                  {value}
                </dt>
                <dd className="font-body text-sm text-secondary/60 text-center">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
