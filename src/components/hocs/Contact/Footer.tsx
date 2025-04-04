"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-text-200 px-4 py-16 md:px-0 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-8 text-center text-4xl font-bold text-text-100"
          variants={itemVariants}
        >
          Let&apos;s Talk
        </motion.h2>
        <motion.div
          className="mb-8 flex justify-center space-x-6"
          variants={itemVariants}
        >
          {[Facebook, Twitter, Instagram, Linkedin, Github].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-300 hover:text-[#FFC107]"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-6" />
              </motion.a>
            )
          )}
        </motion.div>
        <motion.div
          className="mb-8 text-center text-gray-300"
          variants={itemVariants}
        >
          <p>Atlas Innovation & Meta Solutions</p>
          <p>Koforidua Technical University </p>
          <p>a.i.m.s582024@gmail.com</p>
          <p>+1 (555) 987-6543</p>
        </motion.div>
        <motion.div
          className="text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className="mr-4 hover:text-[#FFC107]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-[#FFC107]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Terms & Conditions
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
