import { AUDIENCE_DESCRIPTOR } from "@/lib/content";

const facts = [
  { value: "2018", label: "Year founded" },
  { value: "6+",   label: "States reached" },
  { value: "3",    label: "Flagship programmes" },
  { value: "100%", label: "Access-Focused" },
];

export default function MissionSection() {
  return (
    <section aria-labelledby="mission-heading" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Vision + Mission — full width, top of section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24 pb-16 lg:pb-24 border-b border-bdr">

          {/* Vision */}
          <div className="border-t-2 border-accent pt-8">
            <p
              className="font-body font-semibold text-primary uppercase mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.16em" }}
            >
              Our Vision
            </p>
            <p
              className="font-body text-secondary leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}
            >
              To equip students, youth, and underserved communities with access
              to digital technology-based, life-altering opportunities so they
              can achieve fulfillment in both their personal and professional
              lives, creating the{" "}
              <span className="font-semibold text-secondary">tech-preneurs</span> of
              tomorrow — innovators who will use technology to tackle the world's issues.
            </p>
          </div>

          {/* Mission */}
          <div className="border-t-2 border-secondary/15 pt-8">
            <p
              className="font-body font-semibold text-primary uppercase mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.16em" }}
            >
              Our Mission
            </p>
            <p
              className="font-body text-secondary leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.75 }}
            >
              To actively empower students, youth, and underserved communities with ICT, business, and financial
              literacy skills in order to elevate them to be{" "}
              <span className="font-semibold text-secondary">leaders and agents of change</span>.
            </p>
          </div>

        </div>

        {/* Stats + Prose */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading + stats */}
          <div>
            <h2 id="mission-heading" className="section-title mb-12">
              Built on{" "}
              <span className="text-primary">Purpose</span>,<br />
              Driven by Data.
            </h2>

            <dl className="grid grid-cols-2 gap-x-10 gap-y-10">
              {facts.map(({ value, label }) => (
                <div key={label}>
                  <dt
                    className="font-display font-bold text-secondary leading-none mb-2"
                    style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
                  >
                    {value}
                  </dt>
                  <dd className="font-body text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — prose */}
          <div className="space-y-6 lg:pt-3">
            <p
              className="font-body text-secondary leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)" }}
            >
              Blue Sands Academy is a training centre for ICT skills, focused on
              building the technological capacities of students and communities,
              starting with {AUDIENCE_DESCRIPTOR}. We believe
              that fostering young people's interest in technology starts at an
              early age, and that this is not only a good idea, but an essential one.
            </p>
            <p
              className="font-body text-secondary leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)" }}
            >
              By providing training, we help our students become more confident in
              their own abilities and start thinking seriously about what they want
              to do with their lives, greatly improving their chances of succeeding
              in future careers across every sector.
            </p>
            <p
              className="font-body text-secondary leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)" }}
            >
              Founded by Alero Thompson in 2018, BSA was born from a clear
              recognition that technology was changing rapidly and training
              programmes in ICT were severely lacking for students and
              underserved communities. We set out to close that gap. We are
              still closing it.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
