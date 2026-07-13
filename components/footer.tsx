import Link from "next/link"
import { Button } from "./button"
import { NavLink } from "./types"


export const Footer=()=>{

    const navLinks:NavLink[]=[
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
    const year=new Date().getFullYear()
    return(
         <footer className="bg-green-950 p-8">
           
           <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="w-full">
                <h2 className="text-xl font-bold text-green-50">My Sacco</h2>
                <p className="text-green-100">
                    We are a Savings and Credit Society headquartered in Njoro and with over 30,000 members drawn from varied professions and statuses.
                </p>  
            </div>

            <div className="w-full">
                <h2 className="text-lg font-bold text-green-50">Important Links</h2>
                       <div className="flex flex-col gap-2">
                        {
                            navLinks?.map((link:NavLink,i:number)=>(
                                <Link href={link.href} key={i} className="text-green-100">
                                    {link?.name}
                                </Link>
                            ))
                        }
                       </div>
            </div>

            <div className="border-t-2 md:col-span-2 text-center">
                <p className="pt-2 text-green-200 text-xs">

                Copyright © {year} My Sacco
                </p>
            </div>


           </div>

        
        </footer>
    )
}
