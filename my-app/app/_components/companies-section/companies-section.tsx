import React from 'react'
import Image from 'next/image'

const CompaniesSection = () => {
  return (
    <div
        className='relative w-full py-10 overflow-hidden'>
            <div className="whitespace-nowrap animate-scroll">
                {
                    Array.from({ length: 7 }).map((_, index) => (
                        <div className="inline-block">
                            <Image 
                                src={`/images/companies/${index + 1}.png`}
                                alt={`Company ${index + 1}`}
                                height={150}
                                width={150}
                                className="min-w-[100px] w-[150px] h-[150px] object-contain"
                            />
                        </div>  
                ))}
            </div>
      
    </div>
  )
}

export default CompaniesSection
