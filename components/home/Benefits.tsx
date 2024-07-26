"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  infinite: true,
  speed: 3000,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const logos = [
  "/security/1.svg",
  "/security/2.svg",
  "/security/3.webp",
  "/security/4.webp",
  "/security/5.webp",
  "/security/6.webp",
  "/security/7.webp",
  "/security/8.webp",
];

const Benefits: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <header className="mb-20 text-4xl md:text-5xl flex flex-col md:flex-row text-center">
        <span>Service Oriented&nbsp;</span>
        <span className="text-[#21dbd8]">Architecture</span>
      </header>

      <motion.div
        className="border p-2 w-[80vw] md:w-[20vw] h-[12vh] md:rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="border border-dashed md:rounded-3xl p-4 h-[12vh] w-[80vw] md:w-[20vw] bg-[#1F1F1C] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-[#ff9933]">
            Gen-AI Employees
          </h2>
        </div>
      </motion.div>

      <div className="w-1 mt-3 border-l border-dashed h-8 border-gray-400"></div>
      <div className="h-12 w-3/5 border-x border-t rounded-t-full border-dashed border-gray-400"></div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Empty Placeholder */}
        <motion.div
          className="p-2 w-[80vw] md:w-[12vw] h-0 md:h-[8vh] flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-lg text-gray-400 mt-5"></h2>
        </motion.div>

        {/* Sales */}
        <motion.div
          className="border p-2 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] md:rounded-tl-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="border border-dashed md:rounded-tl-3xl p-4 md:p-8 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] bg-[#1F1F1C] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-[#21dbd8]">Sales</h2>
          </div>
        </motion.div>

        {/* Marketing */}
        <motion.div
          className="border p-2 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="border border-dashed p-4 md:p-8 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] bg-[#1F1F1C] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-[#21dbd8]">Marketing</h2>
          </div>
        </motion.div>

        {/* HR-Tech */}
        <motion.div
          className="border p-2 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="border border-dashed p-4 md:p-8 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] bg-[#1F1F1C] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-[#21dbd8]">HR-Tech</h2>
          </div>
        </motion.div>

        {/* Customer Support */}
        <motion.div
          className="border p-2 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="border border-dashed p-4 md:p-8 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] bg-[#1F1F1C] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-[#21dbd8]">
              Customer Support
            </h2>
          </div>
        </motion.div>

        {/* Analytics */}
        <motion.div
          className="border p-2 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] md:rounded-tr-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="border border-dashed md:rounded-tr-3xl p-4 md:p-8 w-[80vw] md:w-[12vw] h-[15vh] md:h-[8vh] bg-[#1F1F1C] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-[#21dbd8]">Analytics</h2>
          </div>
        </motion.div>

        {/* More in Pipeline */}
        <motion.div
          className="p-2 w-[80vw] md:w-[12vw] h-[8vh] flex justify-center items-center -ml-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-lg text-gray-400 mt-5">+ more in pipeline</h2>
        </motion.div>
      </div>

      <div className="h-12 w-3/5 border-x border-b border-gray-400 rounded-b-full border-dashed mt-3 flex justify-center items-center">
        <div className="w-1/2 h-12 border-x border-b border-gray-400 rounded-b-full border-dashed flex justify-center items-center">
          <div className="w-1 h-full border-l border-gray-400 border-dashed"></div>
        </div>
      </div>

      <div className="w-1 border-l border-dashed h-8"></div>

      <motion.div
        className="border p-2 w-[80vw] md:w-[25vw] md:h-[16vh] md:rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="border border-dashed md:rounded-3xl p-4 md:h-[16vh] w-[80vw] md:w-[25vw] bg-[#1F1F1C] flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold text-[#ff9933]">
            Application Layer
          </h2>
        </div>
      </motion.div>

      <h2 className="text-3xl text-[#ffffffbc] my-6">+</h2>

      <motion.div
        className="border p-2 w-[80vw] md:w-[18vw] md:h-[10vh] md:rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="border border-dashed md:rounded-3xl p-4 md:h-[10vh] w-[80vw] md:w-[18vw] bg-[#1F1F1C] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-[#21dbd8] text-center">
            Security + Governance Layer
          </h2>
        </div>
      </motion.div>

      <h2 className="text-3xl text-[#ffffffbc] my-6">+</h2>

      <motion.div
        className="border p-2 w-[80vw] md:w-[25vw] h-[16vh] md:rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="border border-dashed md:rounded-3xl p-4 h-[16vh] w-[80vw] md:w-[25vw] bg-[#1F1F1C] flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold text-[#ff9933]">
            Infrastructure Layer
          </h2>
        </div>
      </motion.div>

      <div className="w-full bg-radial-gradient rounded-full"></div>

      <div className="flex flex-col justify-center items-center overflow-hidden mt-36">
        <h2 className="text-xl mb-16 text-gray-300 text-center">
          ENTERPRISE LEVEL SECURITY AND COMPLIANCE
        </h2>
        <div className="w-[80vw]">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  width={250}
                  height={250}
                  className="h-28 w-auto rounded"
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
