"use client";

import React from "react";
import Image from "next/image";
import TextAnimation from "../text-animation";
import {motion} from "framer-motion";
import { TOP_COLLECTION_DATA } from "@/app/_data/top-collection";

const TopCollectionSection = () => {
  return (
    <div 
      className="flex flex-col gap-[16px]">
      <span 
        className="text-30 px-[28px] text-center font-bold lg:text-60">
        <TextAnimation delay={0.2}> Our Top Collection </TextAnimation>
      </span>

      {/* collection list */}
      <div 
        className="flex flex-col items-center justify-center gap-[10px] 
        lg:mt-4 lg:flex-col lg:flex-wrap lg:gap-x-16 ">
        
        {TOP_COLLECTION_DATA.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1, 
              ease: "easeOut"
            }} //how much delay each element should have 
            key={index}
            className="flex w-[100px] max-w-[320px] items-center gap-[8px] border-b-white/40 border-b py-[9px] 
            lg:gap-[19px] lg:py-[28px] lg:w-full"
          >
            <span 
              className="text-16 font-bold lg:text-20">{index + 1}. </span>
            
            <Image
              src={item.image}
              alt="item_name"
              width={35}
              height={35}
              className="rounded-full"
            />

            <div 
              className="flex flex-col gap-[5px]">
              <span 
                className="text-[12px] font-bold lg:text-18">{item.name}</span>
              <span 
                className="font-bold text-10 text-white/40 lg:text-18">
                ${item.price.toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopCollectionSection;
