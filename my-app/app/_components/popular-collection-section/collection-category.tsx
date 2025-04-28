"use client";

import { CATEGORY_DATA } from "@/app/_data/category";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const CollectionCategory = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void; //function with a return type of void
}) => {
  // adding stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-[14px]"
    >
      {CATEGORY_DATA.map((category) => (
        <motion.div
          variants={itemVariants}
          key={category.value}
          
          //include tailWind merge - if the selected category is the current category then the border bg is orange
          className={twMerge(
            "cursor-pointer text-12 rounded-full border border-white/50 px-[20px] py-[18px] text-center",

            activeCategory === category.value && "bg-primary border-none"
          )}
          onClick={() => setActiveCategory(category.value)}
        >
          {category.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CollectionCategory;
