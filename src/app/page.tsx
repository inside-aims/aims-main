import { Button } from "@nextui-org/button";

import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Button color="primary">Button</Button>
      <RainbowButton>Get Unlimited Access</RainbowButton>
    </div>
  );
}
