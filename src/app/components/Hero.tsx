"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { Download } from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.5, 0.2, 1],
    },
  },
};

const Hero: React.FC = () => {
  const cvLink =
    "https://drive.google.com/file/d/1G5E9Fy7wEkVYniDFX6JUGucuzfhfY4cN/view?usp=drive_link";
  const cvFileName = "MoeChanMyaeHtun_Resume.pdf";

  return (
    <motion.section
      id="home"
      className="flex items-center lg:mt-16 mt-10 py-60 lg:py-20 min-h-[calc(100vh-4rem)] bg-cover bg-center lg:bg-fixed bg-[url('/img/mobile.png')] lg:bg-[url('/img/01.png')]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="rounded-2xl bg-[#c0dbf9] py-5 max-w-sm mx-auto px-2 md:max-w-xl md:px-8 lg:max-w-lg lg:mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-xl lg:text-2xl font-extrabold text-center tracking-tight mb-4"
            variants={itemVariants}
          >
            Hello, I'm Moe Chan Myae Htun.
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-8 font-extrabold text-center"
            variants={itemVariants}
          >
            FullStack Developer.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-center"
          >
            <a
              href={cvLink}
              download={cvFileName}
              target="_blank"
              className="inline-flex items-center justify-center bg-[#ea97b8] hover:bg-[#286094] border-2 border-[#ea97b8] hover:border-[#286094] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 mr-3 transition-colors duration-300 group-hover:text-[#ea97b8]" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
