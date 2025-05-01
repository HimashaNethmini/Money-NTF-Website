import React from 'react'
import Logo from '../header/logo'
import Button from '../button'
import Link from 'next/link'

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

            {/* page links - css grid into 3 cols*/}
            <div className="grid grid-cols-3 gap-4">

                {/* column 1 */}
                <div className='flex flex-col gap-4 text-16'>
                    <span className='text-primary font-bold'>Marketplace</span>
                    <div className="flex flex-col gap-2">
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>
                
                    {/* column 2 */}
                <div className='flex flex-col text-16 gap-4'>
                    <span className='text-primary font-bold'> Category</span>
                    <div className='flex flex-col gap-2'>
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>

                <div className='text-16 flex flex-col gap-4' >
                    <span className='text-primary font-bold'>Help</span>
                    <div className="flex flex-col gap-2">
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
