import HeroSlider from "@/components/home/HeroSlider";
import AboutStrip from "@/components/home/AboutStrip";
import WhatWeDo from "@/components/home/WhatWeDo";
import STEMLabsHome from "@/components/home/STEMLabsHome";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import TeamHome from "@/components/home/TeamHome";
import BlogPreview from "@/components/home/BlogPreview";
import ScrollChapter from "@/components/home/ScrollChapter";

export default function HomePage() {
  return (
    <>
      <ScrollChapter />
      <HeroSlider />
      <AboutStrip />
      <WhatWeDo />
      <STEMLabsHome />
      <Partners />
      <Testimonials />
      <TeamHome />
      <BlogPreview />
    </>
  );
}
