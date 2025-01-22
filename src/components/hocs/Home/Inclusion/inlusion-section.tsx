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
      transition={{ duration: 0.8 }}
      className="mx-4 mb-24 overflow-hidden rounded-3xl bg-text-200 lg:mx-8"
    >
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
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

            <Link href={"/products"}>
              <motion.div whileHover={{ rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  className="mt-4 bg-text-100 text-text-200"
                >
                  View Products
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] overflow-hidden rounded-2xl"
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
