import Image from "next/image";

// Photo: add /public/ceo.jpeg then set FOUNDER_PHOTO = "/ceo.jpeg"
const FOUNDER_NAME  = "Alero Thompson";
const FOUNDER_ROLE  = "Founder & CEO, Blue Sands Academy";
const FOUNDER_PHOTO = null; // swap to "/ceo.jpeg" once file is in /public

export default function StoryHero() {
  return (
    <section
      aria-label="Founder's Story"
      className="relative bg-secondary overflow-hidden"
    >
      {/* Pink left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-pink z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] min-h-screen items-center gap-12 lg:gap-16 py-32 lg:py-0">

          {/* Left — identity + hook */}
          <div className="flex flex-col justify-center">

            <p
              className="font-body font-medium text-white/35 mb-10 uppercase"
              style={{ fontSize: "0.7rem", letterSpacing: "0.18em" }}
            >
              About &nbsp;·&nbsp; Founder's Story
            </p>

            <h1
              className="font-display font-bold text-white mb-3"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
            >
              {FOUNDER_NAME}
            </h1>

            <p
              className="font-body font-medium text-pink mb-10"
              style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", letterSpacing: "0.01em" }}
            >
              {FOUNDER_ROLE}
            </p>

            <div className="rounded-full bg-pink mb-8" style={{ width: 36, height: 2 }} aria-hidden="true" />

            <p
              className="font-body text-white/85 max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.7 }}
            >
              She grew up watching the gap widen. The girl who couldn't apply for
              the job because she couldn't use a computer. The woman who watched
              opportunity pass her by because no one had ever taught her how to
              reach for it. Then she decided the waiting was over.
            </p>
          </div>

          {/* Right — photo or placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Top pink bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink z-10" />

              {FOUNDER_PHOTO ? (
                <Image
                  src={FOUNDER_PHOTO}
                  alt={`${FOUNDER_NAME}, ${FOUNDER_ROLE}`}
                  fill
                  className="object-cover object-top"
                  sizes="45vw"
                  priority
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  style={{ background: "linear-gradient(135deg, rgba(4,131,226,0.15) 0%, rgba(2,52,90,0.6) 100%)" }}
                  aria-hidden="true"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-white"
                    style={{ background: "rgba(230,63,142,0.2)", border: "1px solid rgba(230,63,142,0.3)", fontSize: "1.6rem" }}
                  >
                    AT
                  </div>
                  <p className="font-body text-white/25 uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                    Photo coming soon
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
