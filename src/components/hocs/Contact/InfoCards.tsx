"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const cards = [
  {
    title: "Office Location",
    content: "123 Tech Avenue, Silicon Valley, CA 94000",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    content: "Monday - Friday: 9AM - 6PM",
    icon: Clock,
  },
  {
    title: "Communication",
    content: "+1 (555) 987-6543\ncontact@techcompany.com",
    icon: Phone,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function InfoCards() {
  return (
    <motion.section
      className="px-4 py-16 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-gray-900 p-6 shadow-lg"
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <card.icon className="mb-4 size-12 text-[#FFC107]" />
            </motion.div>
            <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
            <p className="whitespace-pre-line text-gray-300">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
