"use client";
import Link from "next/link";
import Logo from "./logo";
import MenuIcon from "./menuIcon";
import React, { useState } from "react";
import Sidebar from "./sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center py-[7px]">
        <Logo />

        {/* menu icon hidden for large screens  */}
        <div className="lg:hidden">
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* menu for default screen-small*/}
        <div className="hidden lg:flex gap-[25px] text-[18px]">
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

        <button className="bg-primary hidden lg:block text-white px-[20px] py-[7px] rounded-full">
          Connect Wallet
        </button>
      </div>

      {/* sidebar */}
      <Sidebar/>
    </header>
  );
};

export default Header;
