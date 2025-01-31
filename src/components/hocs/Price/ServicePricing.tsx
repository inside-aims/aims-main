"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Web Development", price: "From $500" },
  { name: "UI/UX Design", price: "From $300" },
  { name: "Mobile Development", price: "From $1,000" },
  { name: "SEO Development", price: "From $400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ServicePricing() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-extrabold text-green-900 text-center mb-8"
      >
        Service-Based Pricing
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-green-900">
                {service.name}
              </h3>
              <div className="mt-2 text-3xl font-semibold text-green-600">
                {service.price}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={itemVariants} className="mt-8 text-center">
        <motion.button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Quote
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
