"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Pricing
      </motion.h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Transparent pricing for every need. Choose the perfect plan for your
        business.
      </p>
    </motion.section>
  );
}
