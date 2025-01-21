"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import FloatingElements from "./FloatingElements";
import ProductCard from "./ProductCard";
import ScrollIndicator from "./ScrollIndicator";
const products = [
  {
    id: 1,
    name: "TechFlow Pro",
    tagline: "Next-gen Workflow Solution",
    description:
      "Experience seamless project management with AI-powered insights",
    image: "/placeholder.svg?height=600&width=400",
    color: {
      accent: "#FF4D00",
      text: "#E8D5C4",
    },
  },
  {
    id: 2,
    name: "DataSense AI",
    tagline: "Intelligent Analytics Platform",
    description: "Transform raw data into actionable business intelligence",
    image: "/placeholder.svg?height=600&width=400",
    color: {
      accent: "#00FF94",
      text: "#E8D5C4",
    },
  },
  {
    id: 3,
    name: "SecureShield",
    tagline: "Enterprise Security Suite",
    description: "Advanced protection for your digital assets",
    image: "/placeholder.svg?height=600&width=400",
    color: {
      accent: "#FF00E5",
      text: "#E8D5C4",
    },
  },
  {
    id: 4,
    name: "CloudNexus",
    tagline: "Cloud Infrastructure Platform",
    description: "Scale your infrastructure with confidence",
    image: "/placeholder.svg?height=600&width=400",
    color: {
      accent: "#0094FF",
      text: "#E8D5C4",
    },
  },
];

export default function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div ref={containerRef} className="relative top-[-30vh]">
      <FloatingElements scrollYProgress={scrollYProgress} />
      <motion.div
        className="sticky top-0 flex h-screen items-center justify-center px-16 pt-16"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="text-center font-serif text-8xl font-bold tracking-tight text-text-200 dark:text-[#E8D5C4]">
          {"Our Products".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>
      <div className="space-y-[100vh]">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            progress={scrollYProgress}
            index={index}
            total={products.length}
          />
        ))}
      </div>
    </div>
  );
}
