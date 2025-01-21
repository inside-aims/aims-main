"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The pricing is transparent and the service is exceptional. Exactly what we needed for our business.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote:
      "Switching to this service was one of the best decisions we've made. The pro plan offers incredible value.",
    author: "Michael Chen",
    role: "CTO, GrowthLabs",
  },
  {
    quote:
      "The customer support is outstanding. They're always there when you need them.",
    author: "Emily Rodriguez",
    role: "Founder, DesignCo",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl bg-gray-800/50 p-6 backdrop-blur-xl"
            >
              <Quote className="absolute right-4 top-4 size-6 text-gray-600" />
              <p className="mb-4 text-gray-300">{testimonial.quote}</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
