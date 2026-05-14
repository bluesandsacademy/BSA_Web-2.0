const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

const track = [...partners, ...partners];

export default function Partners() {
  return (
    <section id="s-partners" aria-labelledby="partners-heading" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 id="partners-heading" className="section-title mb-4">
          Our <span className="text-pink">Partners</span>
        </h2>
        <p className="font-body text-muted" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
          Trusted by organisations working to close the digital gender gap.
        </p>
      </div>

      {/* Full-width marquee — intentionally breaks out of the content rail */}
      <div className="overflow-hidden" aria-hidden="true">
        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {track.map(({ name }, i) => (
            <div
              key={i}
              className="h-16 w-44 shrink-0 rounded-lg bg-surface flex items-center justify-center"
            >
              <span className="font-body text-xs text-muted">{name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
