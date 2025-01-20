"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function DreamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/assets/images/image-1.jpg"
            alt="Modern house exterior"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <span className="w-8 h-8 text-2xl">✧</span>
          </motion.div>
          <h3 className="text-3xl font-serif text-text-200">
            Innovate without <em>limits</em>, build beyond<em> boundaries</em>.
          </h3>
          <p className="text-text-200 max-w-md mx-auto">
            At AIMS, we tailor our approach to meet the unique needs of every
            project, creating transformative solutions that redefine technology.
            Known for our dedication to excellence and precision, we deliver
            cutting-edge software, hardware, and IT support with unparalleled
            expertise.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="mt-8 text-text-100 bg-text-200">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/assets/images/image.jpg"
            alt="technology image"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
