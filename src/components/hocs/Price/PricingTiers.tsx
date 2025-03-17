"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$XXX",
    features: [
      "5-page website",
      "Basic wireframes",
      "Basic SEO",
      "Hosting",
      "Domain",
    ],
  },
  {
    name: "Business",
    price: "$XXX",
    features: [
      "10-page website",
      "Full UI/UX design",
      "MVP app",
      "Standard SEO",
    ],
  },
  {
    name: "Premium",
    price: "$XXX",
    features: [
      "Custom website & backend",
      "Advanced UI/UX",
      "Full app",
      "Advanced SEO",
    ],
  },
];

const tierVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function PricingTiers() {
  return (
    <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
      {tiers.map((tier) => (
        <motion.div
          key={tier.name}
          variants={tierVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="border border-green-200 rounded-lg shadow-sm divide-y divide-green-200"
        >
          <div className="p-6">
            <motion.h2
              className="text-2xl leading-6 font-semibold text-green-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tier.name}
            </motion.h2>
            <motion.p
              className="mt-4 text-3xl font-extrabold text-green-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {tier.price}
            </motion.p>
            <ul className="mt-6 space-y-4">
              {tier.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-start"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 + featureIndex * 0.1 }}
                >
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500" />
                  <span className="ml-3 text-base text-green-700">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-4">
            <motion.button
              className="w-full bg-green-600 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
