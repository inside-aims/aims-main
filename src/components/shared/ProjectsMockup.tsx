"use client";

import { motion } from "framer-motion";

const ProjectsMockup = () => {
  return (
    <div className="relative col-span-6 mx-auto w-full max-w-md  md:col-span-3 lg:col-span-4">
      <motion.div
        className="overflow-hidden rounded-sm bg-white shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-gray-800 p-4">
          <div className="flex space-x-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 h-8 rounded bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-4 w-5/6 rounded bg-gray-200"></div>
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="h-4 w-4/6 rounded bg-gray-200"></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-blue-500 px-4 py-2 font-semibold text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Xolace
      </motion.div>

      <motion.div
        className="absolute left-[10%] top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-green-500 px-4 py-2 font-semibold text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Network Achievers Hub
      </motion.div>
    </div>
  );
};

export default ProjectsMockup;
