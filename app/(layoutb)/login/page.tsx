import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center gap-2 w-full max-w-100'>
      <h1 className='font-bold text-2xl text-green-50'> Login to your account</h1>
      <p className='text-green-100'>Enter your email below to login to your account</p>
      <div className='w-full flex flex-col gap-8 py-4'>
        <div className='flex flex-col gap-2'>
          <Label className='text-green-100 font-bold'>Email</Label>
          <Input type='email' required placeholder='m@example.com' className='text-green-100'/>
        </div>
        <div  className='flex flex-col gap-2'>
          <div className='flex items-center justify-between flex-1'>
            <Label  className='text-green-100 font-bold'>Password</Label>
            <Link href={"/forgot-password"}  className='text-green-100 font-semibold text-xs hover:underline'>Forgot your password?</Link>
          </div>
          <Input type='password' placeholder='*******' required  className='text-green-100'/>
        </div>

        <Button variant={"secondary"}>Login</Button>
      </div>
      <Separator/>
      <p className='text-green-100 text-xs'>Don't have an account? <Link href={"/register"} className='underline hover:text-green-50'>Register</Link> </p>

    </div>
  )
}

export default LoginPage
