/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { AnimatedSectionHeader } from "@/components/hocs/Pricing-Page/AnimatedSectionHeader";
import { MobileAppPricingCard } from "@/components/hocs/Pricing-Page/MobileAppPricing";
import { PricingCard } from "@/components/hocs/Pricing-Page/PricingCard";
import { PricingNavigation } from "@/components/hocs/Pricing-Page/PricingNavigation";

const plans = [
  {
    name: "Basic",
    price: 500,
    maxPrice: 1500,
    period: "project",
    features: [
      "Up to 5 pages",
      "Template-based design",
      "Responsive design",
      "Basic SEO optimization",
      "Standard security features",
      "1 month support & maintenance",
      "1-2 weeks turnaround time",
      { text: "Domain registration & hosting", available: false, new: true },
      { text: "SSL certificate", available: false, new: true },
      { text: "Content creation (5 pages)", available: false, new: true },
      { text: "Social media integration", available: false },
      { text: "Performance optimization", available: false },
      { text: "Multilingual support", available: false, new: true },
    ],
    bestFor: "Small businesses, startups, personal websites",
  },
  {
    name: "Standard",
    price: 2000,
    maxPrice: 5000,
    period: "project",
    featured: true,
    features: [
      "Up to 15 pages",
      "Semi-custom design",
      "Responsive design",
      "Standard SEO optimization",
      "CMS integration (WordPress, Shopify, etc.)",
      "Basic e-commerce store",
      "Database integration",
      "Enhanced security features",
      "Speed optimization",
      "Basic analytics setup",
      "3 months support & maintenance",
      "3-6 weeks turnaround time",
      { text: "Domain registration & hosting", available: true, new: true },
      { text: "SSL certificate", available: true, new: true },
      { text: "Content creation (5 pages)", available: true, new: true },
      { text: "Social media integration", available: true },
      { text: "Performance optimization", available: true },
      { text: "Multilingual support", available: false, new: true },
    ],
    bestFor: "Growing businesses, e-commerce, custom features",
  },
  {
    name: "Premium",
    price: 6000,
    period: "project",
    features: [
      "Unlimited pages",
      "Fully custom design",
      "Responsive design",
      "Advanced SEO optimization",
      "Custom CMS integration",
      "Advanced e-commerce store",
      "Advanced database integration",
      "Enterprise-level security features",
      "Advanced speed optimization",
      "Advanced analytics setup",
      "6+ months support & maintenance",
      "6+ weeks turnaround time",
      { text: "Domain registration & hosting", available: true, new: true },
      { text: "SSL certificate", available: true, new: true },
      { text: "Content creation (10 pages)", available: true, new: true },
      { text: "Social media integration", available: true },
      { text: "Performance optimization", available: true },
      { text: "Multilingual support", available: true, new: true },
    ],
    bestFor: "Enterprises, high-traffic websites, advanced solutions",
  },
];

const addOns = [
  { name: "Extra Pages", price: 100, unit: "per page" },
  { name: "Advanced SEO Package", price: 500, unit: "flat" },
  { name: "Custom API Integrations", price: 1000, unit: "starting at" },
  { name: "Mobile App Integration", price: null, unit: "Custom Pricing" },
];

const mobileAppPlans = [
  {
    name: "Basic",
    price: 2000,
    maxPrice: 5000,
    period: "project",
    platforms: "Single (iOS or Android)",
    features: [
      "MVP development",
      "Basic UI/UX (Template-based)",
      "Flutter or React Native",
      "Email & Password Authentication",
      "Basic API Integrations (1-2 APIs)",
      "Firebase Database",
      { text: "Push Notifications", available: false },
      { text: "E-commerce Features", available: false },
      { text: "Admin Dashboard", available: false },
      "Standard Security & Encryption",
      "App Store Deployment",
      "1 Month Support & Maintenance",
      "4-6 Weeks Turnaround Time",
    ],
    bestFor: "MVPs, startups, personal projects",
  },
  {
    name: "Standard",
    price: 6000,
    maxPrice: 15000,
    period: "project",
    featured: true,
    platforms: "Both (iOS & Android)",
    features: [
      "Full app development",
      "Custom UI Design",
      "Flutter or React Native",
      "Social Login + OTP Authentication",
      "Multiple API Integrations",
      "SQL/NoSQL Database",
      "Push Notifications",
      "Basic E-commerce Features",
      "Basic Admin Dashboard",
      "Enhanced Security & Encryption",
      "App Store Deployment",
      "3 Months Support & Maintenance",
      "8-12 Weeks Turnaround Time",
    ],
    bestFor: "Small-to-mid businesses, e-commerce apps",
  },
  {
    name: "Premium",
    price: 20000,
    period: "project",
    platforms: "Both + Web App",
    features: [
      "Enterprise-level app development",
      "Fully Custom & Animated UI/UX",
      "Native Development (Swift/Kotlin)",
      "Biometric + Multi-Auth",
      "Advanced APIs & AI Integration",
      "Scalable Cloud Database",
      "Advanced Push Notifications",
      "Advanced E-commerce Features",
      "Advanced Admin Dashboard + Analytics",
      "Enterprise-Level Security & Encryption",
      "App Store Deployment (Full Optimization)",
      "6+ Months Support & Maintenance",
      "12+ Weeks Turnaround Time",
    ],
    bestFor: "Enterprises, feature-rich apps",
  },
];

const mobileAppAddOns = [
  { name: "Advanced AI/ML Features", price: 3000, unit: "starting at" },
  { name: "Blockchain Integration", price: 5000, unit: "starting at" },
  { name: "AR/VR Features", price: 8000, unit: "starting at" },
  { name: "Custom API Development", price: 1500, unit: "starting at" },
];

export default function PricingPage() {
  const [activeSection, setActiveSection] = useState<"web" | "mobile">("web");

  const renderAddOns = (addOns: any[], title: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="grid gap-4 text-blue-300 sm:grid-cols-2 md:grid-cols-4">
        {addOns.map((addon, index) => (
          <motion.div
            key={addon.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
          >
            <h3 className="font-medium">{addon.name}</h3>
            <p className="text-zinc-400">
              {addon.price ? `$${addon.price}+ ${addon.unit}` : addon.unit}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className=" px-4 py-20  text-white min-h-screen">
      <div className="mx-auto max-w-6xl space-y-12">
        <PricingNavigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <AnimatePresence mode="wait">
          {activeSection === "web" && (
            <motion.div
              key="web"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedSectionHeader
                title="Web Development Pricing Packages"
                description="Choose the perfect package for your web development needs. From small businesses to large enterprises, we have a solution for you."
              />

              <motion.div
                className="grid gap-8 md:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {plans.map((plan) => (
                  <motion.div
                    key={plan.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <PricingCard {...plan} />
                  </motion.div>
                ))}
              </motion.div>

              {renderAddOns(addOns, "Web Development Add-Ons")}
            </motion.div>
          )}

          {activeSection === "mobile" && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedSectionHeader
                title="Mobile App Development Pricing Packages"
                description="From MVPs to enterprise-level applications, we offer tailored mobile app development solutions to meet your needs and budget."
              />

              <motion.div
                className="grid gap-8 md:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {mobileAppPlans.map((plan) => (
                  <motion.div
                    key={plan.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <MobileAppPricingCard {...plan} />
                  </motion.div>
                ))}
              </motion.div>

              {renderAddOns(mobileAppAddOns, "Mobile App Add-Ons")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
