import Link from "next/link";
import { Button } from "./ui/button"
import { NavLink } from "./types";



export const Nav=()=>{

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

    return(
        <nav className="w-full bg-green-950 p-8 flex justify-center items-center">
            <div className="flex w-full max-w-6xl items-center justify-between">
                <h2 className="text-green-50 text-xl font-bold">My Sacco</h2>
                        <div className="flex gap-8 items-center">
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
            </div>
         
        
        </nav>
    )
}