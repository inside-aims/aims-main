"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export function HeroSectionAlternative() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative mx-4 mb-24 overflow-hidden rounded-3xl lg:mx-8 ${
        isDarkMode ? "bg-[#243E28]" : "bg-text-200"
      }`}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`mb-4 font-serif ${
              isDarkMode ? "text-[#fde6d8]" : "text-text-100"
            }`}
          >
            Atlas Innovation and Meta Solutions
          </motion.p>

          {["Setting New Standards", "in Modern Tech", "Businesses"].map(
            (text, i) => (
              <motion.h1
                key={text}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`mb-2 font-serif text-4xl lg:text-5xl ${
                  i === 1 ? "italic" : ""
                } ${isDarkMode ? "text-[#e4a576]" : "text-text-100"}`}
              >
                {text}
              </motion.h1>
            )
          )}
        </div>
      </div>

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isDarkMode ? 0.3 : 0.7, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-0 h-full w-1/2"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/image-2.jpg"
          alt="Modern building facade"
          width={800}
          height={600}
          className="size-full object-cover"
          priority
        />
      </motion.div>

      {/* Dark Mode Overlay */}
      {isDarkMode && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#152935] via-transparent to-transparent"
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
