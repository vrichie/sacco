import React from 'react'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full p-8 mb-10'>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-10">
            <div className='flex flex-col gap-6'>
                <h3 className='text-green-400 tracking-widest'>ABOUT US</h3>
                <h2 className='capitalize text-3xl font-semibold text-indigo-600'>
                    Providing financial services to all comrades.
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio natus accusamus vero, ipsam non vitae odio veniam magni molestias quo.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio natus accusamus vero, ipsam non vitae odio veniam magni molestias quo.</p>
                <Button className='w-fit'> Read More <ArrowRightIcon/></Button>
            </div>
            <div className='w-full relative h-full '>
                <Image src="/hero-bg.jpg" fill alt="saving" className='object-cover object-bottom'/>
            </div>

        </div>
      
    </div>
  )
}

export default About
