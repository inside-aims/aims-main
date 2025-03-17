import { motion } from "framer-motion";

interface AnimatedSectionHeaderProps {
  title: string;
  description: string;
}

export function AnimatedSectionHeader({
  title,
  description,
}: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4 mb-12"
    >
      <motion.h1
        className="text-4xl font-bold text-text-200"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-text-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
