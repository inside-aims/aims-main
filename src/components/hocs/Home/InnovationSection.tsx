import React from "react";

import ProjectsMockup from "@/components/shared/ProjectsMockup";
import { TextAnimate } from "@/components/ui/text-animate";

const InnovationSection = () => {
  return (
    <div className=" grid w-full grid-cols-6 gap-5 lg:gap-0 ">
      <ProjectsMockup />
      <div className=" col-span-6 max-sm:px-3 md:col-span-3 lg:col-span-2">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="mx-auto mb-2 max-w-5xl text-start text-4xl font-medium tracking-tight text-black dark:text-white sm:text-3xl lg:text-4xl lg:leading-tight "
        >
          Innovating Connections, Building Safe Spaces
        </TextAnimate>
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-neutral-500 dark:text-neutral-400"
        >
          We&apos;re on a mission to revolutionize digital interactions,
          delivering cutting-edge solutions that foster connection and ensure
          safety in our increasingly interconnected world.
        </TextAnimate>
      </div>
    </div>
  );
};

export default InnovationSection;
