"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    price: "Free",
    features: [
      "Send up to 5 transfers per month",
      "Basic transaction history",
      "Email support",
      "Limited currency support (USD, EUR, GBP)",
      "Basic security features",
    ],
  },
  {
    name: "Standard Plan",
    price: "$9.99/m",
    features: [
      "Unlimited transfers",
      "Transaction history with export options",
      "Priority email support",
      "Expanded currency support",
      "Advanced security features",
    ],
  },
  {
    name: "Pro Plan",
    price: "$19.99/m",
    features: [
      "Unlimited transfers with priority processing",
      "Comprehensive transaction analytics",
      "24/7 priority support",
      "Full currency support",
      "Enhanced security features",
    ],
  },
];

export default function PricingCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-gray-700"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-800/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="mb-4 text-xl font-semibold">{plan.name}</h3>
            <div className="mb-6 text-4xl font-bold">{plan.price}</div>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="size-5 shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:from-gray-700 hover:to-gray-600">
              Get Started
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
