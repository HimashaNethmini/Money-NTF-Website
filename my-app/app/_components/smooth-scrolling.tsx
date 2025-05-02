"use client";

import React from 'react'
import { ReactLenis } from 'lenis/react'

const SmoothScrolling = ( { children } : { children: React.ReactNode}) => {
  return (
    <ReactLenis
      root
      options={{
        lerp:0.5,
        duration: 0.5,
      }}
      >
        {children}
      </ReactLenis>
  )
}

export default SmoothScrolling
