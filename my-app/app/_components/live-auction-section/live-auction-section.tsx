import React from "react";
import Image from "next/image";
import TextAnimation from "../text-animation";

const LiveAuctionSection = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      {/* monkey frame */}
      <div
        className="relative h-[243px] rounded-lg overflow-hidden 
                    bg-gradient-to-b from-[#EF962E] to-[#FFAF36]"
      >
        <Image
          src="/images/black-monkey.png"
          alt="monkey frame"
          fill
          className="object-cover"
        />
      </div>

      {/* live aution details */}
      <div className="flex flex-col gap-[14px]">
        {/* live action*/}
        <div className="flex gap-[12px]">
          <div className="h-auto w-[4px] rounded-md bg-[#6351DB]" />
          <span className="text-[12px]">
            <TextAnimation delay={0.3} divideBy="word">
              Live Auction
            </TextAnimation>
          </span>
        </div>

        {/* heading */}
        <span className="text-30 font-bold">
          <TextAnimation delay={0.4} divideBy="word">
            Bored_Ape #333
          </TextAnimation>
        </span>

        {/* blocks */}
        
      </div>
    </div>
  );
};

export default LiveAuctionSection;
