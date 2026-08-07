export const metadata = {
  title: "Careers | Blue Sands Academy",
  description: "Career opportunities at Blue Sands Academy — join the team closing the digital divide.",
};

export default function CareersPage() {
  return (
    <>
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>Insights · Careers</p>
          <h1 className="font-display font-bold text-white max-w-2xl" style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
            Join the <span className="text-pink">Team</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
        </div>
      </section>
      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t-2 border-pink pt-10 max-w-2xl">
            <h2 className="font-display font-bold text-secondary mb-6" style={{ fontSize: "clamp(2.82rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Open Roles <span className="text-pink">Coming Soon</span>
            </h2>
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We are not currently advertising any open roles. If you believe your skills can
              contribute to BSA's mission, reach out directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
