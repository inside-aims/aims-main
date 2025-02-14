import Image from "next/image";

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto size-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex flex-1 flex-col space-y-2">
          <Image
            src="/linear.webp"
            alt="Abstract design representing seamless connections"
            width={400}
            height={400}
            className="w-full h-auto rounded-sm object-cover object-left-top"
            priority
          />
        </div>
      </div>

      {/* Gradient overlays for a smooth transition effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};
