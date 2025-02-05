"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { PaymentModal } from "./PaymentModal";
interface Feature {
  text: string;
  available: boolean;
  new?: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  maxPrice?: number;
  period: string;
  features: (string | Feature)[];
  featured?: boolean;
  bestFor: string;
}

export function PricingCard({
  name,
  price,
  maxPrice,
  period,
  features,
  featured,
  bestFor,
}: PricingCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <div className="relative p-6 bg-zinc-900 rounded-lg border border-zinc-800">
        {featured && (
          <div className="absolute -top-2 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white">{name}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-white">
                ${price}
              </span>
              {maxPrice && (
                <>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {" "}
                    - ${maxPrice}
                  </span>
                </>
              )}
              <span className="ml-1 text-sm font-medium text-zinc-400">
                /{period}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">{bestFor}</p>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => setShowPaymentModal(true)}
          >
            Get Started
          </Button>
          <ul className="space-y-3">
            {features.map((feature, index) => {
              if (typeof feature === "string") {
                return (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="flex items-start gap-2">
                    {feature.available ? (
                      <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${feature.available ? "text-zinc-300" : "text-zinc-500"}`}
                    >
                      {feature.text}
                      {feature.new && (
                        <span className="ml-2 inline-block bg-blue-500 text-black text-xs px-1 rounded">
                          NEW
                        </span>
                      )}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={{ name, price, maxPrice, period }}
      />
    </>
  );
}
