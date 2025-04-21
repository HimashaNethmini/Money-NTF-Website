import React from "react";

const stats = () => {
  return (
    <div className="flex items-center justify-center gap-[50px]">
      <StatItem name={"Rare Nfts"} number={"10k+"} />
      <StatItem name={"Products"} number={"70k+"} />
      <StatItem name={"Clients"} number={"100k+"} />
    </div>
  );
};

const StatItem = ({ name, number }: { name: string; number: string }) => {
  return (
    <div className="flex flex-col items-center justify-center uppercase">
      <span className="text-25 font-bold">{number}</span>
      <span className="text-10">{name}</span>
    </div>
  );
};

export default stats;
