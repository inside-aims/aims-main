
import FeaturedSection from "@/components/hocs/Home/FeaturedSection/features-section-demo-3";
import HeroSection from "@/components/hocs/Home/HeroSection";
import InnovationSection from "@/components/hocs/Home/InnovationSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturedSection/>
      <InnovationSection/>
    </main>
  );
}
