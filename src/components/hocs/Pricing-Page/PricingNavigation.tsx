import { motion } from "framer-motion";

interface PricingNavigationProps {
  activeSection: "web" | "mobile";
  onSectionChange: (section: "web" | "mobile") => void;
}

export function PricingNavigation({
  activeSection,
  onSectionChange,
}: PricingNavigationProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-zinc-800 p-1 rounded-full">
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: activeSection === "web" ? 0 : "0%" }}
        >
          <motion.div
            className="w-1/2 h-full absolute bg-transparent rounded-full"
            layoutId="activeSection"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button
            className={`px-6 py-2 rounded-full relative z-10 ${
              activeSection === "web" ? "text-white" : "text-zinc-400"
            }`}
            onClick={() => onSectionChange("web")}
          >
            Web Development
          </button>
          <button
            className={`px-6 py-2 rounded-full relative z-10 ${
              activeSection === "mobile" ? "text-white" : "text-zinc-400"
            }`}
            onClick={() => onSectionChange("mobile")}
          >
            Mobile App Development
          </button>
        </motion.div>
      </div>
    </div>
  );
}
