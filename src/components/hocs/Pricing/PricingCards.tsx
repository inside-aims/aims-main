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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="grid md:grid-cols-3 gap-8"
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
            className="relative group rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}</div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-medium transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
