import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* all the links */}
      <div className="flex flex-col gap-[25px] p-[20px] ">
        <Link href={"/"} className="hover:text-primary transition-colors">
          Explore
        </Link>
        <Link href="/" className="hover:text-primary transition-colors">
          Marketplace
        </Link>
        <Link href="/" className="hover:text-primary transition-colors">
          Community
        </Link>
        <Link href="/" className="hover:text-primary transition-colors">
          Creator
        </Link>
        <Link href="/" className="hover:text-primary transition-colors">
          Support
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
