"use client";

import { motion } from "framer-motion";

// const waveVariants = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: {
//     pathLength: 1,
//     opacity: 1,
//     transition: { duration: 2, ease: "easeInOut" },
//   },
// };

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          className="size-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <motion.path
            fill="#FFC107"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            variants={waveVariants}
            initial="hidden"
            animate="visible"
          /> */}
        </svg>
      </motion.div>
      <div className="z-10 text-center">
        <motion.h1
          className="mb-4 text-5xl font-bold md:text-7xl text-text-200"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          CONTACT US
        </motion.h1>
        <motion.p
          className="text-xl text-text-300 md:text-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          We&apos;re here to help you innovate and grow. Let&apos;s connect and
          create something amazing together.
        </motion.p>
      </div>
    </section>
  );
}
