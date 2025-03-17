"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Custom Design",
    webDev: true,
    mobileDev: true,
    uiux: true,
    seo: false,
  },
  {
    name: "Backend Dev",
    webDev: true,
    mobileDev: true,
    uiux: false,
    seo: false,
  },
  {
    name: "Ongoing Support",
    webDev: true,
    mobileDev: true,
    uiux: true,
    seo: true,
  },
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

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ComparisonGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16"
    >
      <motion.h2
        variants={rowVariants}
        className="text-3xl font-extrabold text-green-900 text-center mb-8"
      >
        Service Comparison
      </motion.h2>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-green-300">
                <thead className="bg-green-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-green-900 sm:pl-6"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-green-900"
                    >
                      Web Dev
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-green-900"
                    >
                      Mobile Dev
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-green-900"
                    >
                      UI/UX
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-green-900"
                    >
                      SEO
                    </th>
                  </tr>
                </thead>
                <motion.tbody
                  variants={containerVariants}
                  className="divide-y divide-green-200 bg-white"
                >
                  {features.map((feature) => (
                    <motion.tr key={feature.name} variants={rowVariants}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-green-900 sm:pl-6">
                        {feature.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500">
                        {feature.webDev ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <X className="h-5 w-5" />
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500">
                        {feature.mobileDev ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <X className="h-5 w-5" />
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500">
                        {feature.uiux ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <X className="h-5 w-5" />
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500">
                        {feature.seo ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <X className="h-5 w-5" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                  <motion.tr variants={rowVariants}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-green-900 sm:pl-6">
                      Price
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-900">
                      From $XXX
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-900">
                      From $XXX
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-900">
                      From $XXX
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-green-900">
                      From $XXX
                    </td>
                  </motion.tr>
                </motion.tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
