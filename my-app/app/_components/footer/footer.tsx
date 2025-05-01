import React from 'react'
import Logo from '../header/logo'
import Button from '../button'

const Footer = () => {
  return (
    <div className='flex flex-col gap-5'>

        {/* logo and subscribe section */}
        <div className="flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-4">
                <span className='font-bold text-nowrap'>
                    Ready to collect?
                </span>

                <Button variant='filled'>Subscribe</Button>
            </div>

        </div>

        {/* divider */}
        <div className='h-[1px] bg-white/50 w-full' />

        {/* bottom with links */}
        <div className="flex flex-col gap-8">

            {/* page links - css grid */}
            <div className="grid grid-cols-3 gap-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
