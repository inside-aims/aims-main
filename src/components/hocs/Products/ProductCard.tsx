"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: {
    accent: string;
    text: string;
  };
}

interface ProductCardProps {
  product: Product;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

export default function ProductCard({
  product,
  progress,
  index,
  total,
}: ProductCardProps) {
  const range = 1 / total;
  const threshold = range * index;

  const yOffset = useTransform(
    progress,
    [threshold, threshold + range],
    ["0%", `-${100 / total}%`]
  );

  const opacity = useTransform(
    progress,
    [
      threshold,
      threshold + 0.1 * range,
      threshold + 0.9 * range,
      threshold + range,
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [
      threshold,
      threshold + 0.1 * range,
      threshold + 0.9 * range,
      threshold + range,
    ],
    [0.8, 1, 1, 0.8]
  );

  const circleProgress = useTransform(
    progress,
    [threshold, threshold + range],
    [0, 360]
  );

  const buttonVariants = {
    initial: {
      scale: 1,
      backgroundColor: "#262626",
    },
    hover: {
      scale: 1.1,
      backgroundColor: product.color.accent,
    },
    tap: {
      scale: 0.95,
    },
  };

  const arrowVariants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: [0, 20, -20, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.8, 1],
      },
    },
  };

  const buttonTextVariants = {
    initial: {
      x: 0,
      color: "#737373",
    },
    hover: {
      x: 4,
      color: "#ffffff",
    },
  };

  return (
    <motion.div
      className="sticky top-0 flex h-screen w-full items-center justify-center"
      style={{ opacity, y: yOffset }}
    >
      <motion.div
        className="relative grid min-h-[500px] max-h-[85vh] w-full overflow-hidden bg-[#1C1D1F] p-4 sm:p-6 md:p-8 lg:p-12 md:grid-cols-2"
        style={{ scale }}
      >
        {/* Left Column */}
        <div className="flex flex-col justify-start mb-4 md:mb-0 md:pr-4">
          <div>
            <motion.h2
              className="mb-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light"
              style={{ color: product.color.text }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {product.name}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-neutral-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {product.tagline}
            </motion.p>
          </div>

          <div className="relative h-1 w-full md:w-64 mt-2 md:mt-4">
            <div className="absolute size-full rounded-full bg-neutral-800" />
            <motion.div
              className="absolute h-full rounded-full"
              style={{
                width: useTransform(
                  progress,
                  [threshold, threshold + range],
                  ["0%", "100%"]
                ),
                backgroundColor: product.color.accent,
              }}
            />
          </div>
        </div>

        {/* Right Column / Image Container */}
        <div className="relative flex items-center justify-center h-[50vh] md:h-full">
          <motion.div
            className="absolute w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="size-auto object-fill"
            />
          </motion.div>

          {/* Circular Progress */}
          <svg
            className="absolute right-2 top-2 sm:right-4 sm:top-4 md:right-6 md:top-6 size-8 sm:size-10 md:size-12"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke={product.color.accent}
              strokeWidth="2"
              fill="none"
              strokeDasharray="251.2"
              style={{
                strokeDashoffset: useTransform(
                  circleProgress,
                  [0, 360],
                  [251.2, 0]
                ),
              }}
            />
          </svg>

          {/* Enhanced Button with Animations */}
          <motion.div
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex items-center gap-2 sm:gap-3 md:gap-4"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-xs sm:text-sm"
                variants={buttonTextVariants}
              >
                The design
              </motion.span>
              <motion.div
                className="flex size-8 sm:size-9 md:size-10 items-center justify-center rounded-full ml-2 sm:ml-3 md:ml-4"
                variants={buttonVariants}
              >
                <motion.div variants={arrowVariants}>
                  <ArrowRight className="size-3 sm:size-4 text-white" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
