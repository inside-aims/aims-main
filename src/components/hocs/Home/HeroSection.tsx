"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import ScratchToReveal from "@/components/magicui/scratch-to-reveal";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";

const HeroSection = () => {
  const handleComplete = () => {
    // Do Something
  };
  return (
    <HeroHighlight
      className="grid-cols-3 md:grid"
      containerClassName=" rounded-lg "
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="col-span-2 mx-auto mb-5 flex max-w-4xl items-center px-4 text-center text-3xl font-bold leading-relaxed text-neutral-700 dark:text-white md:mb-0 md:text-4xl lg:text-5xl lg:leading-snug"
      >
        <span>
          Atlas Innovation & Meta Solutions
          <Highlight className="block text-sm text-black dark:text-white">
            We create to Inspire
          </Highlight>
        </span>
      </motion.h1>

      <div className=" flex h-full justify-center ">
        <ScratchToReveal
          width={300}
          height={300}
          minScratchPercentage={70}
          className="flex items-center justify-center overflow-hidden rounded-2xl bg-transparent"
          onComplete={handleComplete}
          gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
        >
          <Image
            src="/assets/images/Hero1.jpg"
            height={300}
            width={300}
            alt="Hroe"
            className="rounded-lg"
          />
        </ScratchToReveal>
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;