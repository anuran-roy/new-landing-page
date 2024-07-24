"use client";
import { motion } from "framer-motion";

const TalkToFounder: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0.6, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: false }}
      className="relative flex mx-4 md:mx-auto flex-col items-center justify-center md:w-[66vw] my-20 p-10 md:p-12 space-y-6 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-2xl text-white"
      >
        Need a demo?
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-5xl font-semibold text-white text-center"
      >
        Speak to the Founding Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-white max-w-lg"
      >
        Automate end-to-end workflows in minutes, not months. 90% lesser time &
        50x increased productivity.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        className="shadow-sm shadow-gray-300 p-3 px-8 bg-white rounded-full text-black font-medium hover:bg-gray-200 transition-all duration-300"
      >
        Book A Demo
      </motion.button>
    </motion.div>
  );
};

export default TalkToFounder;
