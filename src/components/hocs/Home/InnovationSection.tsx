"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ProjectsMockup from "@/components/shared/ProjectsMockup";
import { Card, CardContent } from "@/components/ui/card";

const MotionCard = motion(Card);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const InnovationSection: React.FC = () => {
  return (
    <MotionCard
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-40 mt-24 overflow-hidden rounded-sm bg-[#18230F] px-10 pt-10 dark:from-gray-900 dark:to-black"
    >
      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[300px] overflow-hidden md:h-[400px] lg:h-full"
          >
            <ProjectsMockup />
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center p-6 text-center md:p-8 md:text-left lg:p-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-bold tracking-tight text-text-100 dark:text-white md:text-3xl lg:text-4xl"
            >
              Innovating Connections, Building Safe Spaces
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base text-text-100 dark:text-gray-300 md:text-lg"
            >
              We&apos;re on a mission to revolutionize digital interactions,
              delivering cutting-edge solutions that foster connection and
              ensure safety in our increasingly interconnected world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 md:mt-8"
            >
              <Link href={"/products"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-text-100 px-5 py-2 text-sm text-text-200 transition-colors hover:bg-text-300 hover:text-text-100 md:px-6 md:py-3 md:text-base"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </CardContent>
    </MotionCard>
  );
};

export default InnovationSection;
