import React from "react";
import { twMerge } from "tailwind-merge";

const Button = (
    {
  children,
  variant = "filled",
}: {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
}) => {
  return (
    <button 
        className={twMerge("flex w-full items-center justify-center rounded-lg px-[24px] py-[9px] text-white",
        variant === "filled" ? "bg-primary" : "border-primary border-[2px]")}>      {children}
    </button>
  );
};

export default Button;
