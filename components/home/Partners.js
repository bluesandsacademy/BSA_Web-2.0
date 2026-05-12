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
    <section aria-labelledby="partners-heading" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 id="partners-heading" className="section-title">
          Our <span className="text-pink">Partners</span>
        </h2>
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
