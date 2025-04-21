import { motion } from "framer-motion";
import React from "react";

const stats = () => {
  return (
    <div className="flex items-center justify-center gap-[50px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <StatItem name={"Rare Nfts"} number={"10k+"} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <StatItem name={"Products"} number={"70k+"} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
      <span className="text-25 font-bold">{number}</span>
      <span className="text-10">{name}</span>
    </div>
  );
};

export default stats;
