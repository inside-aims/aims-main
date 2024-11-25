"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";
import FloatingDockDemo from "@/components/shared/navigation/floating-dock";

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
    <div className="relative  min-h-screen px-10 md:px-28 pt-24">
      {children}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <FloatingDockDemo/>
    </div>
  );
};

export default Layout;
