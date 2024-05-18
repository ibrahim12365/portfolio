"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on the screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the function to set the initial value
    handleResize();
       // Remove event listener on cleanup
       return () => window.removeEventListener('resize', handleResize);
      }, []); 
  return (
    <motion.div
      initial="hidden"
      animate="visible"
     
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center text-start w-full md:w-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-lg text-gray-400 my-5 max-w-[600px]"
      style={{ color: isMobile ? 'inherit' : 'white',fontWeight: "bold" }}
    >
      I&apos;m a Full Stack Software Engineer with experience in Website
      and Software development. Check out my projects and skills.
    </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
