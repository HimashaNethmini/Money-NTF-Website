'use client';

import useWindowSize from "@/app/_hooks/useWindowSize";
import { motion } from "framer-motion";
import React from "react";

const stats = () => {
  //the sliding effect in lg screen
  const isMobile = useWindowSize()

  return (
    <div className="flex items-center justify-center gap-[50px] lg:flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: isMobile ? 0 : -205 }} //x: isMobile ? 0 : -205 - the lg screen sliding effect
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <StatItem name={"Rare Nfts"} number={"10k+"} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: isMobile ? 0 : -105 }} //x: isMobile ? 0 : -105
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <StatItem name={"Products"} number={"70k+"} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: isMobile ? 0 : -20 }} //x: isMobile ? 0 : -20
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <StatItem name={"Clients"} number={"100k+"} />
      </motion.div>
    </div>
  );
};

const StatItem = ({ name, number }: { name: string; number: string }) => {
  return (
    <div className="flex flex-col items-center justify-center uppercase">
      <span className="text-25 font-extrabold lg:text-44">{number}</span>
      <span className="text-10 lg:text-18">{name}</span>
    </div>
  );
};

export default stats;
