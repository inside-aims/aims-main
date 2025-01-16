"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Number of Transfers",
    free: "5 per month",
    standard: "Unlimited",
    pro: "Unlimited Priority",
  },
  {
    name: "Transaction History",
    free: "Basic",
    standard: "Advanced",
    pro: "Comprehensive",
  },
  {
    name: "Support Level",
    free: "Email",
    standard: "Priority Email",
    pro: "24/7 Priority",
  },
  {
    name: "Currency Support",
    free: "Limited",
    standard: "Expanded",
    pro: "Full",
  },
  {
    name: "Security Features",
    free: "Basic",
    standard: "Advanced",
    pro: "Enhanced",
  },
  {
    name: "API Access",
    free: false,
    standard: true,
    pro: true,
  },
  {
    name: "Custom Integrations",
    free: false,
    standard: false,
    pro: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">Free</th>
                <th className="py-4 px-6 text-center">Standard</th>
                <th className="py-4 px-6 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800"
                >
                  <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.free === "boolean" ? (
                      feature.free ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-300">{feature.free}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-300">{feature.standard}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-300">{feature.pro}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
