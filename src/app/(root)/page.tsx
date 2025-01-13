import FeaturedSection from "@/components/hocs/Home/FeaturedSection/features-section-demo-3";
import { HeroSectionAlternative } from "@/components/hocs/Home/Hero-section/hero-section";
import HeroSection from "@/components/hocs/Home/HeroSection";
import { InclusionsSection } from "@/components/hocs/Home/Inclusion/inlusion-section";
import InnovationSection from "@/components/hocs/Home/InnovationSection";
import { DreamSection } from "@/components/hocs/Home/NewAltSection/DreamSection";

export default function Home() {
  return (
    <main className="">
      <HeroSectionAlternative />
      <DreamSection />
      <InclusionsSection />
      <InnovationSection />
      <FeaturedSection />
    </main>
  );
}
