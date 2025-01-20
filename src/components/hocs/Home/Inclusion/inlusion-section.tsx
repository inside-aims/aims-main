"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video } from "lucide-react";

export function InclusionsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-text-200 rounded-3xl overflow-hidden mx-4 lg:mx-8 mb-24"
    >
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif text-text-100">
              Our Defining <em>Features</em>
            </h2>
            <p className="text-text-100">
              Transforming ideas into extraordinary realities, we create
              tailored tech solutions that inspire. Experience the power of
              innovative designs, top-tier services, and modern technology
              integrations.
            </p>
            <motion.div whileHover={{ rotate: 2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                className="mt-4 bg-text-100 text-text-200"
              >
                View Inclusions
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/assets/images/image-3.jpg"
              alt="Luxury kitchen interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
