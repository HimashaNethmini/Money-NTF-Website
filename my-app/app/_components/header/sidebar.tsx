import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={twMerge(
        "fixed z-[50] top-0 right-0 h-full w-[250px] bg-black transform transition-transform duration-300 ease-in-out",

        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >

      {/* all the links */}
      <div className="flex flex-col gap-[25px] p-[20px] mt-[50px] text-[18px]">
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

        <button className="bg-primary text-white px-[20px] py-[7px] rounded-full">
          Connect Wallet
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
