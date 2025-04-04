"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      <motion.h1 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-5xl font-bold text-transparent h-20 md:text-7xl">
        Pricing
      </motion.h1>
      <p className="mx-auto max-w-2xl text-xl text-text-200 font-serif">
        Transparent pricing for every need. Choose the perfect plan for your
        business.
      </p>
    </motion.section>
  );
}
