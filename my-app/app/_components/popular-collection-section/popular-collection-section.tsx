import React from 'react'
import TextAnimation from '../text-animation'
import CollectionCategory from './collection-category'

const PopularCollectionsSection = () => {
  return (
    <div className="flex flex-col gap-[29px]">

    <span className="text-30 px-[15px] text-center font-bold">
      <TextAnimation delay={0.2} divideBy='letter' >Get Popular Collection Here</TextAnimation>
    </span>

    {/* category section */}
    <CollectionCategory />

    </div>

  )
}

export default PopularCollectionsSection
