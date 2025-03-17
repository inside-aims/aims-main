"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { PaymentModal } from "./PaymentModal";
interface Feature {
  text: string;
  available: boolean;
  new?: boolean;
}

interface MobileAppPricingCardProps {
  name: string;
  price: number;
  maxPrice?: number;
  period: string;
  features: (string | Feature)[];
  featured?: boolean;
  bestFor: string;
  platforms: string;
}

export function MobileAppPricingCard({
  name,
  price,
  maxPrice,
  period,
  features,
  featured,
  bestFor,
  platforms,
}: MobileAppPricingCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <div className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-6">
        {featured && (
          <div className="absolute -top-2 right-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
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
              {maxPrice ? (
                <span className="ml-1 text-sm font-medium text-zinc-400">
                  +
                </span>
              ) : (
                <span className="ml-1 text-sm font-medium text-zinc-400">
                  /{period}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-zinc-400">{bestFor}</p>
            <p className="mt-1 text-sm text-blue-400">{platforms}</p>
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
                    <Check className="mt-0.5 size-5 shrink-0 text-blue-500" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="flex items-start gap-2">
                    {feature.available ? (
                      <Check className="mt-0.5 size-5 shrink-0 text-blue-500" />
                    ) : (
                      <X className="mt-0.5 size-5 shrink-0 text-red-500" />
                    )}
                    <span
                      className={`text-sm ${feature.available ? "text-zinc-300" : "text-zinc-500"}`}
                    >
                      {feature.text}
                      {feature.new && (
                        <span className="ml-2 inline-block rounded bg-blue-500 px-1 text-xs text-black">
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
