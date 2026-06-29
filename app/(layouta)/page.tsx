import About from "@/components/about";
import { Button } from "@/components/button";
import { HeroSection } from "@/components/hero-section";
import MissionVision from "@/components/mission-vision";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
     <HeroSection/>
     <MissionVision/>
     <About/>
    </div>
  );
}