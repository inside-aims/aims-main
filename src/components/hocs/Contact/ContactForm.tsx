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
    <section className="px-4 py-16 md:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
        <motion.div
          className="flex-1 rounded-lg bg-gray-900 p-8 shadow-lg"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={inputVariants}
          >
            Get in Touch
          </motion.h2>
          <form>
            <motion.div className="mb-4" variants={inputVariants}>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                What&apos;s your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full rounded-md bg-[#FFC107] px-4 py-2 font-bold text-black transition-colors duration-300 hover:bg-[#FFD54F]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={inputVariants}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <motion.h2
              className="mb-4 text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have any query?
            </motion.h2>
            <motion.p
              className="mb-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Our team of tech experts is ready to assist you with any questions
              or concerns you may have. Whether you&apos;re looking for technical
              support, product information, or partnership opportunities, we&apos;re
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
