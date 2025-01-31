"use client";

import { useState } from "react";
import ComparisonTable from "@/components/hocs/Pricing/ComparisonTable";
import CTASection from "@/components/hocs/Pricing/cta-section";
import PricingCards from "@/components/hocs/Pricing/PricingCards";
import PricingHero from "@/components/hocs/Pricing/PricingHero";
import Testimonials from "@/components/hocs/Pricing/Testimonials";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="text-text-100">
      <PricingHero />
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-l-lg ${!isYearly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${isYearly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>
      <PricingCards />
      <ComparisonTable />
      <Testimonials />
      <CTASection />
    </div>
  );
}
