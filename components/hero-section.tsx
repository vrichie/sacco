import { Button } from "./ui/button"

export const HeroSection=()=>{
    return (
        <div className="w-full h-[70dvh] " id="hero-section">
            <div className="w-full h-full bg-black/50 p-8 flex items-center justify-center">
                <div className="w-full max-w-6xl">
                <div className=" md:w-100 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-green-50">
                        The Comrade Sacco
                    </h1>
                    <p className="text-green-100 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nulla recusandae? Possimus tempore beatae ratione earum sint molestias. Illo, alias!z
                    </p>
                    <Button className="bg-green-700 w-fit">Register Today</Button>
                </div>


                </div>
                
                
            </div>

        </div>
    )
}