'use client'
import Link from "next/link";
import { Button } from "./ui/button"
import { NavLink } from "./types";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";



export const Nav=()=>{
    const [menu,setMenu]=useState(false);
    const navLinks:NavLink[] =[
        {
            name:"Home",
            href:'/',
        },
        {
            name:"About",
            href:"/about"
        },
        {
            name:"Contact",
            href:"/contact"
        },
        {
            name:"FAQs",
            href:"/faqs"
        }
    ]
    const toggleMenu=()=>{
        setMenu((prev)=>!prev)
    }

    return(
        <nav className="w-full bg-green-950 p-8 flex justify-center items-center relative">
            <div className="flex w-full max-w-6xl items-center justify-between">
                <h2 className="text-green-50 text-xl font-bold">My Sacco</h2>
                        <div className="md:flex hidden gap-8 items-center">
                            <div className="flex gap-8">
                                {
                                    navLinks?.map((link:NavLink,index:number)=>(
                                        <Link className="text-green-50" key=  {index} href={link.href}>
                                            {link.name}
                                        </Link> 
                                    ))
                                }
                            </div>
                            <Link href="/login"><Button className="bg-green-700">Login</Button></Link>
                            <Link href="/register"> <Button variant="secondary">Register</Button></Link>
                       
                        </div>
                        <button onClick={toggleMenu} className="md:hidden block">
                           {menu ? <X className="text-red-400"/> : <MenuIcon className="text-green-100"/>}
                        </button>
                       <div className={`absolute md:hidden block transition delay-150 duration-300 ease-in-out left-0 top-full bg-green-950 w-full ${menu ? "translate-x-0":"translate-x-full"} p-8`}>
                             <div className="flex gap-8 flex-col mb-8">
                                {
                                    navLinks?.map((link:NavLink,index:number)=>(
                                        <Link className="text-green-50" key=  {index} href={link.href}>
                                            {link.name}
                                        </Link> 
                                    ))
                                }
                            </div>
                            <Link href="/login"><Button className="bg-green-700 w-full mb-8">Login</Button></Link>
                            <Link href="/register"> <Button variant="secondary" className=" w-full">Register</Button></Link>
                        </div>
            </div>
         
        
        </nav>
    )
}