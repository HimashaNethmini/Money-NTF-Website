import React from 'react'

const menuIcon = () => {
  return (
    <div>
      <div 
      data-menu-icon
      className="flex flex-col gap-[4px] cursor-pointer relative z-[51]">
        <div className="w-[16.5px] h-[1.5px] bg-white transition-all duration-300"></div>
        <div className="w-[16.5px] h-[1.5px] bg-white transition-all duration-300"></div>
        <div className="w-[16.5px] h-[1.5px] bg-white transition-all duration-300"></div>

      </div>

    </div>
  )
}

export default menuIcon
