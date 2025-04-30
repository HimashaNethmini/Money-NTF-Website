import React from 'react'
import TextAnimation from '../text-animation'

const SubscribeSection = () => {
  return (
    <div 
        className='flex flex-col w-full items-center justify-center gap-[16px]'>
      <span 
        className='text-30 px-[28px] text-center font-bold'>
        <TextAnimation delay={0.5} divideBy='letter'>
            Subscribe to get latest updates
        </TextAnimation>
        </span>

        <span className='text-[9px]'>
            <TextAnimation delay={0.4} divideBy='word'>
                Lorem ispum is simply the dummy text for printing and types.
            </TextAnimation>
        </span>

    </div>
  )
}

export default SubscribeSection
