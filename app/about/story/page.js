import StoryHero from "@/components/about/StoryHero";
import StoryContent from "@/components/about/StoryContent";

export const metadata = {
  title: "Founder's Story",
  description:
    "The story behind Blue Sands Academy — why it was founded, the gap it set out to close, and the challenges of building it anyway.",
};

export default function FounderStoryPage() {
  return (
    <>
      <StoryHero />
      <StoryContent />
    </>
  );
}
