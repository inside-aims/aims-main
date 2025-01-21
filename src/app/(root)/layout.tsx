"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import Footer from "@/components/hocs/Contact/Footer";
import Navbar from "@/components/shared/navigation/acert-navbar";
import Particles from "@/components/ui/particles";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#e4a576");

  useEffect(() => {
    // Using the peach color for dark mode particles and slate blue for light mode
    setColor(resolvedTheme === "dark" ? "#e4a576" : "#698ea2");
  }, [resolvedTheme]);

  return (
    <div
      className={`min-h-screen ${
        resolvedTheme === "dark"
          ? "bg-[#121212] text-white"
          : "bg-[#F0F5ED]/90 text-[#2F5233]"
      }`}
    >
      <div className="relative px-2 pb-10 pt-36 sm:px-5 lg:px-28">
        <Navbar />
        <div
          className={`relative z-10 ${
            resolvedTheme === "dark"
              ? "prose-headings:text-[#e4a576] prose-p:text-[#fde6d8]"
              : "prose-headings:text-[#152935] prose-p:text-[#152935]"
          }`}
        >
          {children}
        </div>
        <Particles
          className="pointer-events-none absolute inset-0"
          quantity={200}
          ease={80}
          color={color}
          refresh
        />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
