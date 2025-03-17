"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function PricingCalculator() {
  const [service, setService] = useState("web");
  const [complexity, setComplexity] = useState(1);
  const [extras, setExtras] = useState(0);

  const basePrice = {
    web: 500,
    uiux: 300,
    mobile: 1000,
    seo: 400,
  };

  const calculatePrice = () => {
    return basePrice[service] * complexity + extras * 100;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 rounded-lg bg-white p-6 shadow"
    >
      <motion.h2
        variants={itemVariants}
        className="mb-8 text-center text-3xl font-extrabold text-green-900"
      >
        Pricing Calculator
      </motion.h2>
      <div className="space-y-6">
        <motion.div variants={itemVariants}>
          <label
            htmlFor="service"
            className="mb-1 block text-sm font-medium text-green-700"
          >
            Service
          </label>
          <Select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            options={[
              { value: "web", label: "Web Development" },
              { value: "uiux", label: "UI/UX Design" },
              { value: "mobile", label: "Mobile Development" },
              { value: "seo", label: "SEO Development" },
            ]}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label
            htmlFor="complexity"
            className="mb-1 block text-sm font-medium text-green-700"
          >
            Complexity
          </label>
          <Slider
            id="complexity"
            min={1}
            max={3}
            step={1}
            value={complexity}
            onChange={(e) => setComplexity(Number(e.target.value))}
          />
          <div className="mt-2 flex justify-between text-xs text-green-600">
            <span>Basic</span>
            <span>Intermediate</span>
            <span>Advanced</span>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <label
            htmlFor="extras"
            className="mb-1 block text-sm font-medium text-green-700"
          >
            Extra Features
          </label>
          <Slider
            id="extras"
            min={0}
            max={5}
            step={1}
            value={extras}
            onChange={(e) => setExtras(Number(e.target.value))}
          />
          <div className="mt-2 text-sm text-green-600">
            {extras} extra feature{extras !== 1 ? "s" : ""} selected
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center">
          <motion.p
            className="text-2xl font-semibold text-green-700"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
          >
            Estimated Price: ${calculatePrice()}
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-6 text-center">
          <motion.button
            className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Instant Estimate
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
