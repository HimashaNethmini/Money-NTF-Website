"use client";

import React, { useState } from "react";
import TextAnimation from "../text-animation";
import CollectionCategory from "./collection-category";
import { COLLECTION_DATA } from "@/app/_data/collection";
import CollectionCard from "./collection-card";
import { motion, AnimatePresence } from "motion/react";

const PopularCollectionsSection = () => {

  // checking the active collection category
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="flex flex-col gap-[29px] lg:gap-[76px]">
      <span className="text-30 px-[15px] text-center font-bold lg:text-60">
        <TextAnimation delay={0.2} divideBy="letter">
          Get Popular Collection Here
        </TextAnimation>
      </span>

      {/* category section - passing params */}
      <CollectionCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* collection cards - filtered for the selected category*/}
      <div 
      className="flex flex-col flex-wrap items-center justify-start gap-[29px] 
        lg:flex-row lg:gap-[30px] lg:min-h-[755px] lg:justify-center lg:gap-x-[42px] lg:gap-y-[25px]">

        <AnimatePresence mode="popLayout">
          {(activeCategory === "all"
            ? COLLECTION_DATA
            : COLLECTION_DATA.filter((card) => card.category === activeCategory)
          ).map((card, i) => (

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }} //in view animation
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              layout
              key={i}
              className="w-full lg:w-auto"
            >
              <CollectionCard card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PopularCollectionsSection;
