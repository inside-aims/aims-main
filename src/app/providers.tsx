import { NextUIProvider } from "@nextui-org/system";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
