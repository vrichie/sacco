import React from 'react'
import { Mission } from './types'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AwardIcon, EyeIcon, RocketIcon } from 'lucide-react';
const MissionVision = () => {
    const missions:Mission[]=[
        {
            title:"Our Mission",
            description:"To socioeconomically transform the lives of our members via affordable, quality, competitive and market-driven financial solutions.",
            icon:<RocketIcon className='text-green-50 ' size="56"/>
        },
        {
            title:"Our Vision",
            description:"To be the preferred provider of transformational, quality and competitive market-driven financial solutions to Kenyans.",
            icon:<EyeIcon className='text-green-50 ' size="56"/>
        },
        {
            title:"Our Values",
            description:"To support and empower the lives of each comrade to the best of our capabilites.",
            icon:<AwardIcon className='text-green-50 ' size="56"/>
        }
    ];


  return (
  
  <div className='w-full p-8 '>

  <div className='w-full max-w-6xl flex gap-10 mx-auto'>

        <div className='w-full flex gap-10 -mt-32'>
            {
            missions?.map((item:Mission,index:number)=>(
                <Card className='flex-1 bg-linear-to-b from-green-700 to-green-500 gap-8' key={index}>
                    <CardHeader className='gap-8'>
                        <CardTitle className='text-3xl font-semibold text-white'>{item.title}</CardTitle>
                        <CardDescription className=' w-fit border-b-4 pb-4'> {item.icon}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-green-100 text-lg'>{item.description}</p>
                    </CardContent>
                   
                </Card>
            ))
        }
        </div>
        
      
    </div>


  </div>
  

  )
}

export default MissionVision
