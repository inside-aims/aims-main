"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Layout,
  Smartphone,
  Search,
  Palette,
} from "lucide-react";
import ServiceCards from "@/components/Services/EnhancedLightModeCards";

const ServicesPage = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      description:
        "Full-stack development solutions with cutting-edge technologies",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      id: "02",
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: <Layout className="h-6 w-6" />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "03",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "04",
      title: "SEO Optimization",
      description: "Boost your visibility and organic traffic",
      icon: <Search className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "05",
      title: "UI/UX Design",
      description: "User-centered design that drives engagement",
      icon: <Palette className="h-6 w-6" />,
      color: "from-red-400 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="block text-text-200">
                  Transform your ideas into
                </span>
                <span className="mt-2 block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent h-20">
                  digital excellence
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-text-300">
                We deliver cutting-edge technology solutions that drive
                innovation and growth for businesses of all sizes.
              </p>
              <div className="mt-10 flex items-center gap-6">
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
                        className="inline-block h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                        // black:bg-gradient-to-r from-gray-700 to-gray-600 ring-2 ring-black dark mode
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-300">
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
                className="relative h-[600px] w-full"
              >
                <div className="absolute right-0 top-0 h-[500px] w-[300px] rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-3xl" />
                <Image
                  src="/assets/images/services.jpg"
                  alt="Interface mockup"
                  width={400}
                  height={600}
                  className="absolute right-8 top-8 rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-200">
            Our Services
          </h2>
          <p className="mt-4 text-text-300">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        {/* <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-r from-green-400 to-emerald-500"
              // bg-gradient-to-r from-green-400 to-emerald-500
              //  bg-text-300/50
            >
              <div className="relative z-10">
                <div
                  className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${service.color} p-3`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="mt-4 inline-flex items-center text-sm text-green-400 hover:text-green-300"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-500/10 blur-2xl transition-all duration-300 group-hover:scale-150" />
            </motion.div>
          ))}
        </div> */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative z-10">
                <div
                  className={`mb-4 inline-block rounded-lg ${service.color} p-3`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 opacity-50 transition-all duration-300 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        <ServiceCards />
      </section>

      {/* Stats Section */}
      <section className="border-t border-text-300 ">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Team Members", value: "50+" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
