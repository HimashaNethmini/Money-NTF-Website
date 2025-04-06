"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../hero-section/hero.frame.module.css"

//define animations
const animations = {
    scaleDown: {
        initial: { backgroundSize: "150%" },
        animate: { backgroundSize: "100%" },
        transition: { duration: 3.5, ease: "easeInOut" },
    },
    move: {
        initial: { backgroundSize: "100% center" },
        animate: { backgroundSize: "50% center" },
        transition: { duration: 3, ease: "easeInOut" },
    },
}
const HeroFrame = ({
  height,
  width,
  bgImage,
  animationType = "scaleDown",
}: {
  height: {
    base: number;
    lg: number;
  };
  width: {
    base: number;
    lg: number;
  };
  bgImage: string;
  animationType?: "scaleDown" | "move";
}) => {
    const animation = animations[animationType] || animations.scaleDown;
  return (
    <motion.div
    className={styles.frame}
      style={
        {
          backgroundImage: `url(${bgImage})`,
          height: `${height.base}px`,
          width: `${width.base}px`,
          "--lg-width": `${width.lg}px`,
          "--lg-height": `${height.lg}px`,
        } as React.CSSProperties
      }

      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};

export default HeroFrame;
