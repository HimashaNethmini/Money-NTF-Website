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

      
    </div>
  )
}

export default Footer
