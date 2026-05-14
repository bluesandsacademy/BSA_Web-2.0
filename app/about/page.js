import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import ImpactStats from "@/components/about/ImpactStats";
import TeamPreview from "@/components/about/TeamPreview";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Blue Sands Academy — our mission, values, impact, and the people closing the gender digital gap across Nigeria since 2018.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <ImpactStats />
      <TeamPreview />
    </>
  );
}
