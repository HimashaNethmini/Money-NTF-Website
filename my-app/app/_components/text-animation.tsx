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
        divideBy?: 'letter' | 'word';
    }
) => {
  return (
    <span>
        {
        children.split(" ").map((word, index) => (
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
                    duration: 0.5,
                    delay: delay + index * 0.05,
                    ease: 'easeOut',
                }}
                key={index}>
                    {word}&nbsp;
                </motion.span>

        ))}
    </span>
  )
}

export default TextAnimation
