"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import ScratchToReveal from "@/components/magicui/scratch-to-reveal";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";

const HeroSection = () => {
  const handleComplete = () => {
    console.log("Scratch Reveal Completed!"); // Placeholder for action
  };

  return (
    <HeroHighlight
      className="grid-cols-3 md:grid"
      containerClassName="rounded-lg max-sm:dark:bg-transparent max-sm:bg-transparent mb-16 sm:mb-10"
    >
      {/* Left Section - Text Content */}
      <div className="col-span-2 flex flex-col justify-center max-sm:mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [30, -5, 0] }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="mx-auto flex max-w-4xl items-center px-4 text-center text-4xl font-bold leading-relaxed text-neutral-700 dark:text-white md:mb-0 md:text-4xl lg:text-5xl lg:leading-snug"
        >
          <span>
            Atlas Innovation & Meta Solutions
            <Highlight className="block text-sm dark:text-primary-100">
              We create to Inspire
            </Highlight>
          </span>
        </motion.h1>
        <p className="mt-3 text-center text-lg text-gray-400 sm:mt-5">
          Crafting cutting-edge solutions for the digital age.
        </p>
      </div>

      {/* Right Section - Scratch-to-Reveal Image */}
      <div className="flex h-full justify-center">
        <ScratchToReveal
          width={300}
          height={300}
          minScratchPercentage={70}
          className="flex items-center justify-center overflow-hidden rounded-2xl bg-transparent"
          onComplete={handleComplete}
          gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          aria-label="Scratch to reveal hidden image"
        >
          <motion.div
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/Hero1.jpg"
              height={300}
              width={300}
              alt="Innovative solutions - Atlas Innovation"
              className="rounded-lg"
              priority
            />
          </motion.div>
        </ScratchToReveal>
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;
