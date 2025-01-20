"use client";

import React from "react";
import { motion } from "framer-motion";
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
      className="overflow-hidden bg-gradient-to-br from-text-100 via-[#6BA17A] to-text-200 dark:from-gray-900 dark:to-black mt-24"
    >
      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden lg:h-full"
          >
            <ProjectsMockup />
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center p-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-3xl font-bold tracking-tight text-text-100 dark:text-white md:text-4xl lg:text-5xl"
            >
              Innovating Connections, Building Safe Spaces
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-100 dark:text-gray-300"
            >
              We&apos;re on a mission to revolutionize digital interactions,
              delivering cutting-edge solutions that foster connection and
              ensure safety in our increasingly interconnected world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-text-100 px-6 py-3 text-text-200 transition-colors hover:bg-text-300 hover:text-text-100"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </CardContent>
    </MotionCard>
  );
};

export default InnovationSection;
