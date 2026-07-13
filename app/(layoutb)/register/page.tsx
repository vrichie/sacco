"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

const RegisterPage = () => {
  const [fName,setFName]=useState<string>('');
  const [lName,setLName]=useState<string>('');
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const [confirmPassword,setConfirmPassword]=useState<string>('');
  const [errorMsg,setErrorMsg]=useState<null|string>(null)
  const [errorMsgFname,setErrorMsgFname]=useState<null|string>(null)


  const handleSubmit=(e)=>{
    try {
      e.preventDefault()
      console.log("submitted")

      const data = {
        fName,lName,email,password,confirmPassword
      }
     console.log(data)
     if(fName.length<3){setErrorMsgFname("Name is too short"); return;}

      if(password!=confirmPassword){
        setErrorMsg("Password does not match")
        toast("Password does not match")
        return;
      }
    } catch (error) {
      toast("Something went wrong")
    } finally{
       setErrorMsg(null)
    }

  }

  return (
    <div className='flex flex-col items-center gap-2 w-full max-w-100'>
      <h1 className='font-bold text-2xl text-green-50'>Create your account</h1>
      <p className='text-green-100'>Fill in the form below to create your account</p>
      {
        errorMsg && <p className='text-red-400'> {errorMsg}</p>
      }
      <form className='w-full flex flex-col gap-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <Label className='text-green-100 font-bold'>First Name</Label>
          <Input onChange={(e)=>setFName(e.target.value)} type='text' required placeholder='John' className='text-green-100' value={fName}/>
          {errorMsgFname && <p className='text-red-400'> {errorMsgFname}</p>}
        </div>
         <div className='flex flex-col gap-2'>
          <Label className='text-green-100 font-bold'>Last Name</Label>
          <Input type='text' required placeholder='Doe' onChange={(e)=>setLName(e.target.value)} value={lName} className='text-green-100'/>
        </div>
         <div className='flex flex-col gap-2'>
            <Label className='text-green-100 font-bold'>Email</Label>
            <Input type='email' required placeholder='m@example.com' className='text-green-100' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <p className='text-green-100 text-xs'>We'll use this to contact you. We will not share your email with anyone else.</p>
        </div>
        <div  className='flex flex-col gap-2'>
            <Label  className='text-green-100 font-bold'>Password</Label>
          <Input type='password' placeholder='*******' required onChange={(e)=>setPassword(e.target.value)} value={password} className='text-green-100'/>
          <p  className='text-green-100 text-xs' >Must be at least 8 characters long.</p>
        </div>

        <div  className='flex flex-col gap-2'>
          <Label  className='text-green-100 font-bold'>Confirm Password</Label>
          <Input type='password' placeholder='*******' required onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}  className='text-green-100'/>
          <p  className='text-green-100 text-xs'>Please confirm your password.</p>
        </div>


        <Button variant={"secondary"}>Create Account</Button>
      </form>
      <Separator/>
      <p className='text-green-100 text-xs'>Already have an account? <Link href={"/login"} className='underline hover:text-green-50'>Login</Link> </p>

    </div>
  )
}

export default RegisterPage
