"use client";

import { motion, MotionValue } from "framer-motion";
import { useParallax } from "../../../public/hooks/useParallax";
interface FloatingElementsProps {
  scrollYProgress: MotionValue<number>;
}

export default function FloatingElements({
  scrollYProgress,
}: FloatingElementsProps) {
  const yCircle1 = useParallax(scrollYProgress, 100);
  const yCircle2 = useParallax(scrollYProgress, -150);
  const ySquare = useParallax(scrollYProgress, 200);

  return (
    <>
      <motion.div
        className="absolute left-[10%] top-[20%] h-16 w-16 rounded-full bg-purple-500/20 blur-xl"
        style={{ y: yCircle1 }}
      />
      <motion.div
        className="absolute right-[15%] top-[40%] h-24 w-24 rounded-full bg-blue-500/20 blur-xl"
        style={{ y: yCircle2 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[20%] h-20 w-20 rotate-45 bg-green-500/20 blur-xl"
        style={{ y: ySquare }}
      />
    </>
  );
}
