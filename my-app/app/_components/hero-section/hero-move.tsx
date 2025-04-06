"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroMovingFrame = () => {
  const frames = [
    { src: "/images/hero-monkey-1.png", position: "left" },
    { src: "/images/hero-monkey-2.png", position: "center" },
    { src: "/images/hero-monkey-3.png", position: "right" },
  ];
  return (
    <div className="relative flex h-[200px] items-center justify-center">
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute h-[200px] w-[102px] overflow-hidden rounded-[80px] bg-[#CDCDCD]"
          initial={false}
        >
          <Image
            src={frame.src}
            width={187}
            height={183}
            className="h-full w-full object-cover"
            alt="monkey"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroMovingFrame;
