import React from "react";
import Image from "next/image";

const CollectionCard = ({
  card,
}: {
  card: {
    name: string;
    username: string;
    avatar: string;
    category: string;
    nfts: {
      bg: string;
      image: string;
    }[];
  };
}) => {
  return (
    <div
      className="flex w-[100%] flex-col gap-[20px] rounded-[10px] bg-white/10 p-[10px]">

      {/* header */}
      <div className="flex items-start justify-between">

        {/* user info */}
        <div className="flex items-center gap-3">
          {/* user image */}
          <div className="relative h-[26px] w-[26px]">

            <Image src={card.avatar} alt="user" fill className="rounded-full object-cover"/>
          </div>

          <div className="flex flex-col">
            {/* user name */}
            <span className="text-12">{card.name}</span>

            {/* user username */}
            <span className="text-10 text-white/50">
              {card.username}
            </span>
          </div>

        </div>

        {/* likes count */}
        <div className="flex items-center gap-2 ">
          <div className="relative h-[18px] w-[18px]">
            <Image src="/images/heart.png" alt="heart" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* grid */}
      <div>Grid</div>
    </div>
  );
};

export default CollectionCard;
