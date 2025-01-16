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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-gray-600" />
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
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
