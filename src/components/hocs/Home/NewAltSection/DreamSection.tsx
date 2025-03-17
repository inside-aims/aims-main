"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

export function DreamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[300px] overflow-hidden rounded-sm"
        >
          <Image
            src="/assets/images/image-1.webp"
            alt="Modern house exterior showcasing innovation"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          {/* Rotating Symbol */}
          <motion.div
            className="mb-8 flex justify-center"
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <span className="size-8 text-2xl">✧</span>
          </motion.div>

          {/* Title */}
          <h3 className="font-serif text-3xl text-text-200">
            Innovate without <em>limits</em>, build beyond<em> boundaries</em>.
          </h3>

          {/* Description */}
          <p className="mx-auto max-w-md text-text-200">
            At AIMS, we tailor our approach to meet the unique needs of every
            project, creating transformative solutions that redefine technology.
            Known for our dedication to excellence and precision, we deliver
            cutting-edge software, hardware, and IT support with unparalleled
            expertise.
          </p>

          {/* Button */}
          <Link href="/contact">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="mt-8 bg-text-200 text-text-100 transition-all duration-150 hover:scale-105 hover:bg-opacity-80">
                Get in touch
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[300px] overflow-hidden rounded-sm"
        >
          <Image
            src="/assets/images/image.webp"
            alt="Advanced technology concept image"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
