import Image from 'next/image';
import React from 'react'

function LayoutB({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-dvw h-dvh flex' suppressHydrationWarning>
      <div className='w-1/2 h-full bg-green-950  p-8'>
        <h2 className="text-green-50 text-xl font-bold ">My Sacco</h2>

        <div className='flex-1 w-full h-full  py-4 flex items-center justify-center'> {children}</div>
      </div>
      <div className='w-1/2 h-full relative'>
      <Image src="/hero-bg2.jpg" fill alt="saving" className='object-cover object-center'/>
      </div>
    </div>
  )
}

export default LayoutB