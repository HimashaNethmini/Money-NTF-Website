import React from "react";
import Image from "next/image";
import TextAnimation from "../text-animation";
import { TOP_COLLECTION_DATA } from "@/app/_data/top-collection";

const TopCollectionSection = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className="text-30 px-[28px] text-center font-bold">
        <TextAnimation delay={0.2}> Our Top Collection </TextAnimation>
      </span>

      {/* collection list */}
      <div className="flex flex-col items-center justify-center gap-[10px]">
        {TOP_COLLECTION_DATA.map((item, index) => (
          <div key={index} className="">
            <span className="text-16 font-bold">{index + 1} </span>
            <Image src={item.image} alt="item_name" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollectionSection;
