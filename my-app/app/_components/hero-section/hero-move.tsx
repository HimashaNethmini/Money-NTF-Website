"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroMovingFrame = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    { src: "/images/hero-monkey-1.png", position: "left" },
    { src: "/images/hero-monkey-2.png", position: "center" },
    { src: "/images/hero-monkey-3.png", position: "right" },
  ];

  //making a timer to change the frame every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(timer); //cleanup function to clear the timer
  }, []);

  const getPosition = (index: number) => {
    const positions = {
      left: { x: -50, opacity: 0.65, scale: 0.8 },
      center: { x: 0, opacity: 1, zIndex: 20, scale: 1 },
      right: { x: 50, opacity: 0.65, scale: 0.8 },
    };

    const diff = (index - currentFrame + 3) % 3; // to get the index of the frame in the array
    if (diff === 0) return positions.center;
    if (diff === 1) return positions.right;
    return positions.left;
  };

  return (
    <div className="relative flex h-[200px] items-center justify-center">
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute h-[200px] w-[102px] overflow-hidden rounded-[80px] bg-[#CDCDCD]"
          initial={false}
          animate={getPosition(index)}
          transition={{
            x: {
              duration: 0.8,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
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
