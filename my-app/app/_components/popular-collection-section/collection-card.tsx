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

            <Image src={card.avatar} alt="user" fill />
          </div>
        </div>
      </div>

      {/* grid */}
      <div>Grid</div>
    </div>
  );
};

export default CollectionCard;
