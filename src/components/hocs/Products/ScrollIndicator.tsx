"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="text-sm text-neutral-400">Scroll to explore</span>
      <motion.div variants={arrowVariants} initial="initial" animate="animate">
        <ChevronDown className="h-6 w-6 text-[#E8D5C4]" />
      </motion.div>
    </motion.div>
  );
}
