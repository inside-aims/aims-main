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
      className="py-16 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
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
              <card.icon className="w-12 h-12 text-[#FFC107] mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
