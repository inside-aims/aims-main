import React from "react";

import Particles from "@/components/ui/particles";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative  min-h-screen">
      {children}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
};

export default Layout;
