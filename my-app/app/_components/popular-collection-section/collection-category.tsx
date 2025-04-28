import { CATEGORY_DATA } from "@/app/_data/category";
import React from "react";
import { twMerge } from "tailwind-merge";

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
          
          //include tailWind merge - if the selected category is the current category then the border bg is orange
          className={twMerge(
            "cursor-pointer text-10 rounded-full border border-white/50 px-[20px] py-[18px] text-center",

            activeCategory === category.value && "bg-primary border-none"
          )}
          onClick={() => setActiveCategory(category.value)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CollectionCategory;
