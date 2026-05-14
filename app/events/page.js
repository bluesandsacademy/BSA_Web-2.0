export const metadata = {
  title: "Events | Blue Sands Academy",
  description: "Upcoming and past events from Blue Sands Academy — workshops, competitions, and community programmes.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative bg-secondary overflow-hidden py-28 lg:py-40">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-white leading-none"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)", opacity: 0.025, right: "-1rem", bottom: "-2rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          Live
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body font-medium text-white/35 uppercase mb-8" style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}>
            Events
          </p>
          <h1
            className="font-display font-bold text-white max-w-2xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            What's <span className="text-pink">Happening</span>
          </h1>
          <div className="rounded-full bg-pink mt-8" style={{ width: 36, height: 2 }} aria-hidden="true" />
          <p className="font-body text-white/85 mt-6 max-w-xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.7 }}>
            Workshops, ICT competitions, and community outreach events.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t-2 border-pink pt-10 max-w-2xl">
            <h2
              className="font-display font-bold text-secondary mb-6"
              style={{ fontSize: "clamp(2.82rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              Events <span className="text-pink">Coming Soon</span>
            </h2>
            <p className="font-body text-secondary leading-relaxed mb-8" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
              We are adding our upcoming events. Check back soon or follow us on social media for the latest announcements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-pink text-white font-body font-bold text-sm transition-opacity hover:opacity-90"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
