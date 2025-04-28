import { CATEGORY_DATA } from "@/app/_data/category";
import React from "react";

const CollectionCategory = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void; //function with a return type of void
}) => {
  return (
    
    <div className="flex flex-wrap items-center justify-center gap-[14px]">
      {CATEGORY_DATA.map((category) => (
        <div
          key={category.value}
          className="cursor-pointer text-10 rounded-full border border-white/50 px-[20px] py-[18px] text-center"
          onClick={() => setActiveCategory(category.value)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CollectionCategory;
