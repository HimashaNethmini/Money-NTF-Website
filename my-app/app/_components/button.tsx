import React from "react";

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
        className="flex w-full items-center justify-center 
        rounded-lg px-[24px] py-[9px] bg-primary 
        font-semibold text-white"
    >
      {children}
    </button>
  );
};

export default Button;
