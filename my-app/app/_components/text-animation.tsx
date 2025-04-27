'use client';

import React from 'react'
import { motion } from 'motion/react';
import { clipPath } from 'motion/react-client';

const TextAnimation = (
    {
        children,
        delay=0
    }: {
        children: string;
        delay?: number;
    }
) => {
  return (
    <span>
        {
        children.split("").map((letter, index) => (
            <motion.span
                className='relative inline-block overflow-hidden'
                initial ={{
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0 100%)",
                    y: -5,
                }}
                whileInView={{
                    clipPath: "polygon(0 0, 100% 0,  100% 100% 0 100%)",
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: delay + index * 0.02,
                    ease: 'easeOut',
                }}
                key={index}>
                    <span className='inline-block'>
                        { letter === " " ? "\u00A0" : letter }
                    </span>
                </motion.span>

        ))}
    </span>
  )
}

export default TextAnimation
