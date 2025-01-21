/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import { Theme } from "../navbar/Theme-toggler";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
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
      typeof="spring"
      className={cn("fixed top-0 inset-x-0 max-w-1xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/assets/images/AIMS.png"
            width={60}
            height={60}
            alt="AIMS logo"
          />
        </motion.div>

        <div className="flex gap-5 space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>

          {/* <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
            wait={0}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/services"> Services</HoveredLink>
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Products"
            wait={0.5}
          >
            <div className="  grid grid-cols-2 gap-10 p-4 text-sm">
              <ProductItem
                title="Algochurn"
                href="/products"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
            wait={0.7}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem> */}
        </div>

        <Theme />
      </Menu>
    </motion.div>
  );
};

export default Navbar;
