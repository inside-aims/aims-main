"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";

import { Button } from "@/components/ui/button";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "paypal",
    name: "PayPal",
    logo: "/placeholder.svg?height=40&width=120",
    description: "Pay with your PayPal account",
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "/placeholder.svg?height=40&width=120",
    description: "Pay with credit card",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    logo: "/placeholder.svg?height=40&width=120",
    description: "Pay via bank transfer",
  },
];

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: number;
    maxPrice?: number;
    period: string;
  };
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("stripe");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulated payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-lg font-medium leading-6 text-white"
                >
                  Choose payment method
                </Dialog.Title>
                <div className="mt-2">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-sm font-medium text-zinc-400">
                        Selected plan
                      </h4>
                      <div className="text-right">
                        <div className="text-sm font-medium text-white">
                          {plan.name}
                        </div>
                        <div className="text-2xl font-bold text-white">
                          ${plan.price}
                          {plan.maxPrice && <> - ${plan.maxPrice}</>}
                          <span className="text-sm text-zinc-400">
                            /{plan.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                            selectedMethod === method.id
                              ? "border-blue-600 bg-blue-600/10"
                              : "border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={selectedMethod === method.id}
                              onChange={() => setSelectedMethod(method.id)}
                              className="size-4 border-zinc-700 text-blue-600 focus:ring-blue-500"
                            />
                            <div className="space-y-1">
                              <div className="font-medium text-white">
                                {method.name}
                              </div>
                              <div className="text-sm text-zinc-400">
                                {method.description}
                              </div>
                            </div>
                          </div>
                          <div className="relative h-8 w-20">
                            <Image
                              src={method.logo || "/placeholder.svg"}
                              alt={method.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Continue to payment"}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
