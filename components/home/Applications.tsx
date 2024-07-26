"use client";
import Application from "@/app/types/applications";
import { motion } from "framer-motion";

interface ApplicationProps {
  applications: Application[];
}

const Applications: React.FC<ApplicationProps> = ({ applications }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: false }}
      className="flex flex-col items-center w-4/5 md:w-2/3 mx-auto my-16"
    >
      <h1 className="mb-10 text-4xl md:text-5xl text-center">
        <span className="text-lg text-gray-400">
          Alchemyst Labs makes it easier for
        </span>{" "}
        <br />
        <span className="text-[#21dbd8]">Enterprises to adopt AI</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className={`${app.bgColor} ${app.round} p-10`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05 }}
            style={{ overflow: "hidden" }}
          >
            <div className="mb-4">
              {/* Ensure SVGs are accessible if they are interactive */}
              {app.svg}
            </div>
            <h2 className="text-3xl font-semibold my-5">{app.title}</h2>
            <p className="text-lg">{app.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Applications;
