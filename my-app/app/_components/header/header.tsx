"use client";
import Logo from './logo'
import MenuIcon from './menuIcon'
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
        <div className="flex justify-between items-center">
            <Logo />
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

    </header>
  )
}

export default Header
