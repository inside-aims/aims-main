"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
  progress: MotionValue<number>;
  index: number;
}

export default function ProductCard({
  product,
  progress,
  index,
}: ProductCardProps) {
  const yOffset = useTransform(
    progress,
    [index * 0.25, (index + 1) * 0.25],
    ["100%", "-100%"]
  );

  const opacity = useTransform(
    progress,
    [
      index * 0.25,
      index * 0.25 + 0.1,
      (index + 1) * 0.25 - 0.1,
      (index + 1) * 0.25,
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [
      index * 0.25,
      index * 0.25 + 0.1,
      (index + 1) * 0.25 - 0.1,
      (index + 1) * 0.25,
    ],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ opacity, y: yOffset }}
    >
      <motion.div
        className={`flex w-full max-w-5xl flex-col items-center justify-center rounded-3xl bg-gradient-to-br p-12 shadow-2xl ${product.color}`}
        style={{ scale }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="mb-8 rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.h2
          className="mb-4 text-4xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {product.name}
        </motion.h2>
        <motion.p
          className="text-center text-lg text-white/80"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {product.description}
        </motion.p>
        <motion.button
          className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
