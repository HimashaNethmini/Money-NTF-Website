"use client";

import React, { useRef } from "react";
import Image from "next/image";
import TextAnimation from "../text-animation";
import Button from "../button";
import { useScroll, useTransform, motion } from "framer-motion";

const LiveAuctionSection = () => {
  //adding animation to the monkey frame
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  const monkeyY = useTransform(scrollYProgress, [0, 0.7], [300, 0]);

  return (
    <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[89px]">
      {/* monkey frame */}
      <div
        ref={containerRef}
        className="relative h-[243px] rounded-lg overflow-hidden 
                    bg-gradient-to-b from-[#EF962E] to-[#FFAF36]
                    lg:h-[600px] lg:flex-1 lg:rounded-3xl"
      >
        <motion.div
          style={{ y: monkeyY }}
          className="relative h-[100%] w-[100%] bottom-0 left-0 right-0 ml-auto mr-auto"
        >
          <Image
            src="/images/black-monkey.png"
            alt="monkey frame"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* live aution details */}
      <div className="flex flex-col gap-[14px] lg:flex-1 lg:justify-between">
        {/* live action*/}
        <div className="flex gap-[12px]">
          <div className="h-auto w-[4px] lg:w-[12px] rounded-md bg-[#6351DB]" />
          <span className="text-[12px] lg:text-[20px]">
            <TextAnimation delay={0.3} divideBy="word">
              Live Auction
            </TextAnimation>
          </span>
        </div>

        {/* heading */}
        <span className="text-30 lg:text-[35px] font-bold">
          <TextAnimation delay={0.4} divideBy="word">
            Bored_Ape #333
          </TextAnimation>
        </span>

        {/* blocks */}
        <div className="flex justify-between gap-[20px]">
          <Block
            title="Creator"
            image="/images/avatars/avatar-1.avif"
            name="@obsjduro"
          />

          <Block
            title="Collection"
            image="/images/avatars/avatar-2.avif"
            name="Your Dream"
          />
        </div>

        {/* Bid blocks */}
        <div className="flex justify-between gap-[20px] py-[20px]">
          <BidBlock title="Current Bid" name="1.23 ETH" />

          <BidBlock title="Time Left" name="12:50:23" />
        </div>

        {/* buttons */}
        <div className="flex gap-[20px] pt-[10px]">
          <Button>Start Mining</Button>
          <Button variant="outlined">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

// defining block
const Block = ({
  title,
  image,
  name,
}: {
  title: string;
  image: string;
  name: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-[14px]">
      <span className="text-15 lg:text-20">
        <TextAnimation delay={0.5}>{title}</TextAnimation>
      </span>

      <div className="flex gap-[14px] rounded-lg bg-[#454448] px-[20px] py-[11px]">
        <div className="relative h-[25px] w-[25px]">
          <Image src={image} alt={"3d avatar"} fill className="rounded-full" />
        </div>
        <span className="text-14 lg:text-18">
          <TextAnimation delay={0.5}>{name}</TextAnimation>
        </span>
      </div>
    </div>
  );
};

// defining bid blocks
const BidBlock = ({ title, name }: { title: string; name: string }) => {
  return (
    <div className="flex flex-1 flex-col gap-[14px]">
      <span className="text-15">
        <TextAnimation delay={0.5}>{title}</TextAnimation>
      </span>

      <span className="text-30">
        <TextAnimation delay={0.5}>{name}</TextAnimation>
      </span>
    </div>
  );
};

export default LiveAuctionSection;
