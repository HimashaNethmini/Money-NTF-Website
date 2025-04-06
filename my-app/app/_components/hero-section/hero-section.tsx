import React from "react";
import HeroFrame from "./hero-frame";
import HeroMovingFrame from "./hero-move";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-[38x] lg:gap-[16px] lg:py-[11px]">
      {/* slogan */}
      <div className="text-center px-[10px]">
        Money NTF is a platform that allows you to create and Sell.
      </div>

      {/* hero title */}
      <div className="text-25 flex flex-col items-center justify-center gap-[14px] font-bold py-[15px]">
        {/* first line */}
        <div className="flex items-center gap-[15px]">
          <span>Discover</span>

          <HeroFrame
            height={{ base: 34, lg: 68 }}
            width={{ base: 123, lg: 326 }}
            bgImage="/images/hero-frame-1.jpg"
            />

          <span>Collect</span>
        </div>

        {/* second line */}
        <div className="flex items-center gap-[15px]">
        <HeroFrame
            height={{ base: 34, lg: 68 }}
            width={{ base: 123, lg: 251 }}
            bgImage="/images/hero-frame-2.png"
            animationType="move"
            />

            <span> & Sell Extraordinary </span>
        </div>

        {/* third line */}
        <span>Rare NTFs</span>
      </div>

      {/* frame rotation */}
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <div>
        <HeroMovingFrame />
        </div>

        <div>
          <span>Stats</span>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
