import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import React from 'react'

function LayoutA({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav/>
      {children}
      <Footer/>
    </div>
  )
}

export default LayoutA
