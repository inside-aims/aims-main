"use client";

import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ContactForm() {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <motion.div
          className="flex-1 bg-gray-900 p-8 rounded-lg shadow-lg"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={inputVariants}
          >
            Get in Touch
          </motion.h2>
          <form>
            <motion.div className="mb-4" variants={inputVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                What's your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-[#FFC107] text-black font-bold py-2 px-4 rounded-md hover:bg-[#FFD54F] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={inputVariants}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have any query?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Our team of tech experts is ready to assist you with any questions
              or concerns you may have. Whether you're looking for technical
              support, product information, or partnership opportunities, we're
              here to help.
            </motion.p>
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              We strive to respond to all inquiries within 24 hours during
              business days.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
