"use client";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Theme } from "../navbar/Theme-toggler";

const Navbar = ({ className }: { className?: string }) => {
  // const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/price-page", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.7,
        duration: 0.34,
      }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/assets/images/AIMS.webp"
                width={60}
                height={60}
                alt="AIMS logo"
              />
            </motion.div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-900"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Theme />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 top-full w-full bg-white shadow-lg dark:bg-gray-900 md:hidden`}
      >
        <div className="space-y-1 pb-3 pt-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4 dark:border-gray-700">
          <div className="flex items-center px-5">
            <Theme />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
