"use client";
import integrations from "@/app/constants/integrations";
import { motion } from "framer-motion";
import Image from "next/image"; // Import for optimized images
import GridLayout from "../GridLayout";

const Integrations: React.FC = () => {
  return (
    <GridLayout>
      <motion.div
        initial={{ opacity: 0.6, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false }}
        className="relative flex flex-col items-center justify-center my-20"
      >
        <h1 className="mb-20 text-4xl md:text-5xl text-center mx-4">
          <span className="text-[#21dbd8]">Pre-built integrations </span>
          <br />
          for limitless possibilities
        </h1>
        <div className="flex flex-wrap gap-28 w-2/3 justify-center items-center">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="h-16 w-auto" // Wrapping div to handle image sizes
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Image
                src={integration}
                alt={`Integration ${index}`} // More descriptive alt text
                width={64} // Adjust size based on your design
                height={64}
                className="object-contain" // Ensures image scaling within its container
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </GridLayout>
  );
};

export default Integrations;
