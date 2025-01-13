"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductCard from "./ProductCard";
import FloatingElements from "./FloatingElements";

const products = [
  {
    id: 1,
    name: "TechFlow",
    description:
      "Streamline your workflow with our AI-powered project management tool.",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "DataSense",
    description:
      "Turn raw data into actionable insights with our advanced analytics platform.",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "SecureShield",
    description:
      "Protect your digital assets with our state-of-the-art cybersecurity solution.",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    name: "CloudNexus",
    description:
      "Scale your infrastructure effortlessly with our cloud management system.",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-green-500 to-emerald-500",
  },
];

export default function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      <FloatingElements scrollYProgress={scrollYProgress} />
      <motion.div
        className="sticky top-0 flex h-screen items-center justify-center"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
      >
        <h1 className="text-center text-6xl font-bold">
          Our Cutting-Edge
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Products
          </span>
        </h1>
      </motion.div>
      <div className="space-y-[50vh]">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            progress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
