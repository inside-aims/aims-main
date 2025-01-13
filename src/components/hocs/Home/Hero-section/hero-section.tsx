"use client";
import { motion } from "framer-motion";

export function HeroSectionAlternative() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#1a2942] rounded-3xl overflow-hidden mx-4 lg:mx-8 mb-24"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mb-4"
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
                className={`text-4xl lg:text-5xl text-white font-serif mb-2 ${i === 1 ? "italic" : ""}`}
              >
                {text}
              </motion.h1>
            )
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-1/2 h-full"
      >
        {/* <Image
          src="/assets/images/image-2.jpg"
          alt="Modern building facade"
          width={800}
          height={600}
          className="h-full w-full object-cover"
        /> */}

        <video
          src="/assets/images/video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
