"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function InclusionsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-4 mb-24 overflow-hidden rounded-sm bg-text-200 lg:mx-8 px-10"
    >
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl text-text-100">
              Our Innovative <em>Products</em>
            </h2>
            <p className="text-text-100">
              Transforming ideas into extraordinary realities, we create
              tailored tech solutions that inspire. Experience the power of
              innovative designs, top-tier services, and modern technology
              integrations through our products.
            </p>

            <Link href="/products">
              <div>
                <Button
                  variant="secondary"
                  className="mt-4 bg-text-100 text-text-200 hover:bg-opacity-80 transition-all hover:scale-105"
                >
                  View Products
                </Button>
              </div>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden rounded-sm"
          >
            <Image
              src="/assets/images/image-3.jpg"
              alt="Luxury kitchen interior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
