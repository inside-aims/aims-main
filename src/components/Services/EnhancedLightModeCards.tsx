"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Assuming you have a services array defined somewhere
const services = [
  // ... your services data
];

export default function ServiceCards() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <CardItem key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

function CardItem({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <motion.div
          className={`mb-4 inline-block rounded-lg ${service.color} p-3`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {service.icon}
        </motion.div>
        <motion.h3
          className="mb-2 text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {service.title}
        </motion.h3>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {service.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link
            href={`/services/${service.id}`}
            className="group relative mt-4 inline-flex items-center overflow-hidden text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            <span className="relative z-10">Learn more</span>
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-emerald-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="ml-1 size-4"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <ArrowRight />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 opacity-50"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.7 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
