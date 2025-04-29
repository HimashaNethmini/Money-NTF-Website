"use client";

import React, { useState } from "react";
import TextAnimation from "../text-animation";
import CollectionCategory from "./collection-category";
import { COLLECTION_DATA } from "@/app/_data/collection";
import CollectionCard from "./collection-card";
import { AnimatePresence } from "motion/react";

const PopularCollectionsSection = () => {
  // checking the active collection category
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="flex flex-col gap-[29px]">
      <span className="text-30 px-[15px] text-center font-bold">
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
      <div className="flex flex-col flex-wrap items-center justify-start gap-[29px] lg:flex-row lg:gap-[30px]">

        <AnimatePresence mode="popLayout"> 
        {(activeCategory === "all"
          ? COLLECTION_DATA
          : COLLECTION_DATA.filter((card) => card.category === activeCategory)
        ).map((card, i) => (

          <div key={i} className="w-full">
            <CollectionCard 
              card = {card} />
          </div>

        ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PopularCollectionsSection;
