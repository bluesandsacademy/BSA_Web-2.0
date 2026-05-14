export default function AboutHero() {
  return (
    <section
      aria-label="About Blue Sands Academy"
      className="relative bg-secondary min-h-screen flex flex-col overflow-hidden"
    >
      {/* Pink left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />

      {/* Ghost texture */}
      <div
        className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
        style={{
          fontSize: "clamp(14rem, 30vw, 26rem)",
          opacity: 0.025,
          right: "-2rem",
          bottom: "-2rem",
          lineHeight: 0.85,
        }}
        aria-hidden="true"
      >
        BSA
      </div>

      {/* Centred content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">

        <h1
          className="font-display font-bold text-white mb-0"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}
        >
          A Nigeria Where<br />
          Every{" "}
          <span className="text-pink">Woman</span><br />
          Has Digital Power.
        </h1>

        {/* Pink bridge */}
        <div
          className="rounded-full bg-pink"
          style={{ width: 40, height: 2, marginTop: "2.5rem", marginBottom: "2rem" }}
          aria-hidden="true"
        />

        <p
          className="font-body text-white/85 max-w-xl"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.7 }}
        >
          Founded in 2018 and operating across 6 states, Blue Sands Academy
          is building the infrastructure of female digital empowerment in Nigeria.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 shrink-0 pb-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex items-center gap-3">
          <div className="w-px h-10 bg-white/20" aria-hidden="true" />
          <span
            className="font-body text-white/30 uppercase"
            style={{ fontSize: "0.68rem", letterSpacing: "0.18em" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
