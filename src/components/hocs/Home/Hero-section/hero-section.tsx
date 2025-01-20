"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export function HeroSectionAlternative() {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-3xl overflow-hidden mx-4 lg:mx-8 mb-24 ${
        resolvedTheme === "dark" ? "bg-[#243E28]" : "bg-text-200"
      }`}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`mb-4 font-serif ${
              resolvedTheme === "dark" ? "text-[#fde6d8]" : "text-text-100"
            }`}
          >
            Atlas Innovation and Meta Solutions
          </motion.p>
          {["Set New Standards", "in Modern Tech", "Businesses"].map(
            (text, i) => (
              <motion.h1
                key={text}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`text-4xl lg:text-5xl font-serif mb-2 ${
                  i === 1 ? "italic" : ""
                } ${
                  resolvedTheme === "dark" ? "text-[#e4a576]" : "text-text-100"
                }`}
              >
                {text}
              </motion.h1>
            )
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: resolvedTheme === "dark" ? 0.3 : 0.7, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-1/2 h-full"
      >
        <Image
          src="/assets/images/image-2.jpg"
          alt="Modern building facade"
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {resolvedTheme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#152935] via-transparent to-transparent" />
      )}
    </motion.div>
  );
}
