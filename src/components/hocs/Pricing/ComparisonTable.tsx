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
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl text-text-300"
      >
        <h2 className="mb-12 text-center text-3xl text-text-200 font-bold">
          Compare Plans
        </h2>
        <div className="overflow-x-auto text-text-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-text-300">
                <th className="px-6 py-4 text-left text-text-200">Features</th>
                <th className="px-6 py-4 text-center text-text-200">Free</th>
                <th className="px-6 py-4 text-center text-text-200">
                  Standard
                </th>
                <th className="px-6 py-4 text-center text-text-200">Pro</th>
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
                  className="border-b border-gray-800 text-text-300"
                >
                  <td className="px-6 py-4 text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.free === "boolean" ? (
                      feature.free ? (
                        <Check className="mx-auto size-5 text-green-500" />
                      ) : (
                        <X className="mx-auto size-5 text-text-300" />
                      )
                    ) : (
                      <span className="text-text-300">{feature.free}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <Check className="mx-auto size-5 text-green-500" />
                      ) : (
                        <X className="mx-auto size-5 text-text-300" />
                      )
                    ) : (
                      <span className="text-text-300">{feature.standard}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="mx-auto size-5 text-green-500" />
                      ) : (
                        <X className="mx-auto size-5 text-text-300" />
                      )
                    ) : (
                      <span className="text-text-300">{feature.pro}</span>
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
