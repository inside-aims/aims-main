"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import FloatingDockDemo from "@/components/shared/navigation/floating-dock";
import Particles from "@/components/ui/particles";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative  min-h-screen pt-24 px-2 sm:px-5 lg:px-28">
      {children}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <FloatingDockDemo />
    </div>
  );
};

export default Layout;
