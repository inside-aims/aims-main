"use client";

import { motion } from "framer-motion";
import PricingCalculator from "@/components/hocs/Price/PricingCalculator";
import PricingTiers from "@/components/hocs/Price/PricingTiers";
import ServicePricing from "@/components/hocs/Price/ServicePricing";
import ComparisonGrid from "@/components/hocs/Price/ComparisonGrid";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PricingPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold text-green-900 text-center mb-12 mt-12"
        >
          Web Dev Pricing Plans
        </motion.h1>
        <motion.div variants={itemVariants}>
          <PricingTiers />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold text-green-900 text-center mb-12 mt-20"
        >
          Mobile Apllication Dev Pricing Plans
        </motion.h1>
        <motion.div variants={itemVariants}>
          <PricingTiers />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold text-green-900 text-center mb-12 mt-20"
        >
          Mobile Apllication Dev Pricing Plans
        </motion.h1>
        <motion.div variants={itemVariants}>
          <PricingTiers />
        </motion.div>

        {/* <motion.div variants={itemVariants}>
          <ServicePricing />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PricingCalculator />
        </motion.div>
         */}

        {/* <motion.div variants={itemVariants}>
          <ComparisonGrid />
        </motion.div> */}
      </motion.div>
    </div>
  );
}
