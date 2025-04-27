import React from 'react'

const Button = (
    {
        children,
        variant = "filled"
    }: {
        children: React.ReactNode;
        variant?: "filled" | "outlined" ;
    }
) => {
  return <button>
        {children}
    </button>>
};

export default Button
