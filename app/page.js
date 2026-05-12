import HeroSlider from "@/components/home/HeroSlider";
import AboutStrip from "@/components/home/AboutStrip";
import TransitionStatement from "@/components/home/TransitionStatement";
import WhatWeDo from "@/components/home/WhatWeDo";
import MilestoneCallout from "@/components/home/MilestoneCallout";
import OurInitiatives from "@/components/home/OurInitiatives";
import InitiativesTransition from "@/components/home/InitiativesTransition";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import EmailCTA from "@/components/home/EmailCTA";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutStrip />
      <TransitionStatement />
      <WhatWeDo />
      <MilestoneCallout />
      <OurInitiatives />
      <InitiativesTransition />
      <Partners />
      <Testimonials />
      <EmailCTA />
    </>
  );
}
