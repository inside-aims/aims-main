import { Button } from "@nextui-org/button";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import Navbar from "@/components/shared/navigation/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Button className="bg-primary-500 dark:bg-red-800">Button</Button>
      <RainbowButton>Get Unlimited Access</RainbowButton>
    </main>
  );
}
