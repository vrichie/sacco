'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { EyeClosed, EyeIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

const LoginPage = () => {
  const [showPassword,setShowPassword]=useState<boolean>(false);
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');
  const router=useRouter()
  const toggleView=()=>{
    setShowPassword((prev)=>!prev)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
    const data={email, password};

    const res= await fetch("http://localhost:8000/api/v1/auth",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const resData=await res.json()
     if(res.ok){
      toast.success(resData?.message || "Loggin successful")
      const userData=JSON.stringify(resData.data)
      localStorage.setItem("user",userData)
      router.push('/dashboard')

    }else{
      toast.warning(resData?.message || "Check email or password")
    }


    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <div className='flex flex-col items-center gap-2 w-full max-w-100'>
      <h1 className='font-bold text-2xl text-green-50'> Login to your account</h1>
      <p className='text-green-100'>Enter your email below to login to your account</p>
      <form className='w-full flex flex-col gap-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <Label className='text-green-100 font-bold'>Email</Label>
          <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='m@example.com' className='text-green-100'/>
        </div>
        <div  className='flex flex-col gap-2'>
          <div className='flex items-center justify-between flex-1'>
            <Label  className='text-green-100 font-bold'>Password</Label>
            <Link href={"/forgot-password"}  className='text-green-100 font-semibold text-xs hover:underline'>Forgot your password?</Link>
          </div>
          <div className='relative w-full'>

          <Input type={showPassword? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*******' required  className='text-green-100'/>
          <button className='absolute right-2 top-1 cursor-pointer' onClick={toggleView}>
            
            {showPassword ? <EyeIcon className='text-green-100  ' size={20}/> : <EyeClosed className='text-green-100  ' size={20}/>}
            </button>
          </div>
        </div>

        <Button variant={"secondary"}>Login</Button>
      </form>
      <Separator/>
      <p className='text-green-100 text-xs'>Don't have an account? <Link href={"/register"} className='underline hover:text-green-50'>Register</Link> </p>

    </div>
  )
}

export default LoginPage
