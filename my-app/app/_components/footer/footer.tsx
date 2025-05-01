import React from 'react'
import Logo from '../header/logo'
import Button from '../button'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col gap-5'>

        {/* logo and subscribe section */}
        <div className="flex items-center justify-between lg:justify-around">
            <Logo />

            <div className="flex items-center gap-4">
                <span className='font-bold text-nowrap lg:text-25'>
                    Ready to collect?
                </span>

                <Button variant='filled'>Subscribe</Button>
            </div>

        </div>

        {/* divider */}
        <div className='h-[1px] bg-white/50 w-full' />

        {/* bottom with links */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

            {/* page links - css grid into 3 cols*/}
            <div className="grid grid-cols-3 gap-4 lg:order-2 lg:gap-10">

                {/* column 1 */}
                <div className='flex flex-col gap-4 text-16 lg:text-20'>
                    <span className='text-primary font-bold'>Marketplace</span>
                    <div className="flex flex-col gap-2">
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>
                
                    {/* column 2 */}
                <div className='flex flex-col text-16 gap-4 lg:text-20'>
                    <span className='text-primary font-bold'> Category</span>
                    <div className='flex flex-col gap-2'>
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>

                <div className='text-16 flex flex-col gap-4 lg:text-20' >
                    <span className='text-primary font-bold'>Help</span>
                    <div className="flex flex-col gap-2">
                        <Link href="/">Create</Link>
                        <Link href="/">Mining</Link>
                        <Link href="/">Selling</Link>
                        <Link href="/">Collect</Link>
                    </div>
                </div>              
            </div>

            {/* two lines and social icons */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:justify-between">
                <div>
                    <span className='text-16 lg:text-25'>
                        Create, sell and collect
                    </span>
                    <br />
                    <span className='text-16 font-bold lg:text-25'>
                        NFTs Digital with us
                    </span>
                </div>

                {/* social links */}
                <div className=" flex items-center gap-4">
                    <Link href="/">
                        <img src="/images/social/facebook.png" alt="facebook" width={40} height={40} />
                    </Link>

                    <Link href="/">
                        <img src="/images/social/insta.png" alt="insta" width={40} height={40} />
                    </Link>

                    <Link href="/"> 
                        <img src="/images/social/linkedin.png" alt="linkedin" width={40} height={40} />
                    </Link>

                    <Link href="/">
                        <img src="/images/social/x.png" alt="x" width={40} height={40} />
                    </Link>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
