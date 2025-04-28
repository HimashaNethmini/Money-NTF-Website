import { CATEGORY_DATA } from "@/app/_data/category";
import React from "react";

const CollectionCategory = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[14px]">
      {CATEGORY_DATA.map((category) => (
        <div
          key={category.value}
          className="cursor-pointer text-10 rounded-full border border-white/50 px-[20px] py-[18px] text-center"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CollectionCategory;
