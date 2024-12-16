import { Button } from "@nextui-org/button";

import HeroSection from "@/components/hocs/Home/HeroSection";
import Navbar from "@/components/shared/navigation/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
    </main>
  );
}
