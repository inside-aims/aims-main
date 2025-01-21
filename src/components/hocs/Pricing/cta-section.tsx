"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 text-text-30-400">
          Join thousands of satisfied customers who trust our services
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
        >
          Start Your Free Trial
        </motion.button>
      </div>
    </motion.section>
  );
}
