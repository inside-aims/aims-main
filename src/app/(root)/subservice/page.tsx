"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable websites that stand out.",
    points: [
      "Custom websites tailored to your needs",
      "SEO-friendly and high-performance code",
      "Integration with modern tools and APIs",
    ],
    image: "/assets/illustrations/webdev-1.webp",
    reverse: false,
    id: "web dev",
  },
  {
    title: "Mobile Development",
    description: "Transform your ideas into seamless mobile experiences.",
    points: [
      "iOS & Android app development",
      "Cross-platform solutions with Flutter & React Native",
      "Optimized performance for all devices",
    ],
    image: "/assets/illustrations/mobiledev.webp",
    reverse: true,
    id: "mobile dev",
  },
  {
    title: "Interface Design",
    description: "Craft stunning, interactive interfaces that engage users.",
    points: [
      "Pixel-perfect designs with modern aesthetics",
      "Interactive prototypes for better visualization",
      "Consistent branding across all platforms",
    ],
    image: "/assets/illustrations/interfacedesign.webp",
    reverse: false,
    id: "interface design",
  },
  {
    title: "UI/UX Design",
    description: "Enhance usability with intuitive design experiences.",
    points: [
      "User research & journey mapping",
      "Wireframing & interactive prototypes",
      "A/B testing for user optimization",
    ],
    image: "/assets/illustrations/ui-ux.webp",
    reverse: true,
    id: "ui-ux design",
  },
  {
    title: "SEO Optimization",
    description: "Get discovered faster with powerful SEO strategies.",
    points: [
      "Keyword research & content optimization",
      "On-page and technical SEO improvements",
      "Performance tracking & analytics",
    ],
    image: "/assets/illustrations/seo.webp",
    reverse: false,
    id: "seo optimizaiton",
  },
];

export default function Services() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-12 font-montserrat"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Services
        </motion.h1>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${service.reverse ? "md:flex-row-reverse" : ""} items-center mb-16`}
            initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 font-montserrat">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4 font-poppins text-sm sm:text-base">
                {service.description}
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="font-poppins"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              className="w-full md:w-1/2 relative px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full object-contain opacity-80 transition-opacity duration-500 hover:opacity-100"
              />
            </motion.div>
          </motion.div>
        ))}
        <motion.div
          className="text-center mt-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold font-montserrat">
            Let’s Build Something Amazing!
          </h2>
          <p className="text-gray-600 mt-2 font-poppins text-sm sm:text-base">
            From websites to mobile apps and digital marketing, we have the
            expertise to bring your vision to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
