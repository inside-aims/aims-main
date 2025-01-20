"use client";

import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GradualSpacing = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.h2
      className={cn(
        "text-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-0",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
};

export default function FeaturedSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features = [
    {
      title: "Sharing with the community",
      description:
        "Share your thoughts and experiences with millions of users anonymously",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Gain Expert help",
      description:
        "Not only about connecting and having fun but also gaining expert help and advice.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Connecting diverse users around the world",
      description:
        "Build meaningful connections in a supportive, inclusive digital environment.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-6 border-b lg:border-none",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative z-20 mx-auto mb-20 max-w-7xl"
    >
      <div className="px-8">
        <GradualSpacing
          className="mx-auto max-w-5xl text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          text="Innovating Connections, Building Safe Spaces"
        />

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center text-lg font-normal text-text-200 dark:text-neutral-300"
        >
          At AIMS, we are dedicated to crafting groundbreaking solutions like
          Xolace to empower people, foster connections, and create spaces where
          everyone feels seen and heard. Our commitment to innovation drives
          everything we do.
        </motion.p>
      </div>

      <div className="relative mt-16">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 rounded-lg bg-text-200/5 p-8 backdrop-blur-lg dark:bg-black/5 lg:grid-cols-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              className={feature.className}
              variants={itemVariants}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="mt-6 size-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

const FeatureCard = motion(
  ({
    children,
    className,
    variants,
  }: {
    children?: React.ReactNode;
    className?: string;
    variants?: any;
  }) => {
    return (
      <motion.div
        variants={variants}
        className={cn(
          `overflow-hidden rounded-lg bg-text-100/5 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800`,
          className
        )}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    );
  }
);

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-200 dark:text-white md:text-2xl">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm text-text-200 dark:text-neutral-300 md:text-base">
      {children}
    </p>
  );
};

const SkeletonOne = () => {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Community
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full rounded-full border-4 border-white/30" />
      </motion.div>
    </div>
  );
};

const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="relative flex h-full flex-col items-start gap-4 overflow-hidden ">
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {images.map((image, idx) => (
          <motion.div
            key={`image-${idx}`}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: Math.random() * 20 - 10,
            }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 1 }}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={image}
              alt={`Expert help image ${idx + 1}`}
              width={100}
              height={100}
              className="h-20 w-20 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative mt-4 flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-500">
      <Globe className="absolute inset-0" />
      <motion.div
        className="z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold">Global Connections</h3>
        <p className="mt-2">Bringing the world together</p>
      </motion.div>
    </div>
  );
};

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const updateSize = () => {
      const container = canvasRef.current?.parentElement;
      if (container && canvasRef.current) {
        canvasRef.current.width = container.clientWidth * 2;
        canvasRef.current.height = container.clientHeight * 2;
      }
    };

    if (!canvasRef.current) return;

    updateSize();
    window.addEventListener("resize", updateSize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasRef.current.width,
      height: canvasRef.current.height,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "auto",
      }}
      className={className}
    />
  );
};
