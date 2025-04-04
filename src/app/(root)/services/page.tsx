"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layout,
  Smartphone,
  Search,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ServiceCards from "@/components/Services/EnhancedLightModeCards";

const ServicesPage = () => {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Full-stack development solutions with cutting-edge technologies",
      icon: <Code className="size-6" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      id: "interface-design",
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: <Layout className="size-6" />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="size-6" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Boost your visibility and organic traffic",
      icon: <Search className="size-6" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design that drives engagement",
      icon: <Palette className="size-6" />,
      color: "from-red-400 to-rose-500",
    },
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
                <span className="block text-text-200">
                  Transform your ideas into
                </span>
                <span className="mt-2 block h-20 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  digital excellence
                </span>
              </h1>
              <p className="mt-4 text-base leading-7 text-text-300 sm:mt-6 sm:text-lg sm:leading-8">
                We deliver cutting-edge technology solutions that drive
                innovation and growth for businesses of all sizes.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#services"
                    className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-400"
                  >
                    Explore Services
                  </Link>
                </motion.div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="inline-block size-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 sm:size-8"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-text-300 sm:text-sm">
                    <strong className="text-text-300">500+</strong> Happy
                    Clients
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[300px] w-full sm:h-[400px] lg:h-[600px]"
              >
                <div className="absolute right-0 top-0 h-[250px] w-[200px] rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-3xl sm:h-[350px] sm:w-[250px] lg:h-[500px] lg:w-[300px]" />
                <Image
                  src="/assets/images/services.webp"
                  alt="Interface mockup"
                  width={400}
                  height={600}
                  className="absolute right-4 top-4 h-auto w-[180px] rounded-xl shadow-2xl sm:right-8 sm:top-8 sm:w-[250px] lg:w-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text-200 sm:text-3xl ">
            Our Services
          </h2>
          <p className="mt-4 text-sm text-text-300 sm:text-base">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-8"
            >
              <div className="relative z-10">
                <div
                  className={`mb-4 inline-block rounded-lg ${service.color} p-3`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {service.description}
                </p>
                <Link
                  href={`/subservice#${service.id}`}
                  className="mt-4 inline-flex items-center text-xs font-medium text-emerald-600 hover:text-emerald-700 sm:text-sm"
                >
                  Learn more <ArrowRight className="ml-1 size-3 sm:size-4" />
                </Link>
              </div>
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 opacity-50 transition-all duration-300 group-hover:scale-150 sm:size-40" />
            </motion.div>
          ))}
        </div>

        <ServiceCards />
      </section>

      {/* Stats Section */}
      <section className="border-t border-text-300">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Projects Delivered", value: "72+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Team Members", value: "10+" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-400 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400 sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
