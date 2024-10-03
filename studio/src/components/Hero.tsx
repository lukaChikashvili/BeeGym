import { ArrowRight } from "lucide-react"
import { useState } from "react"


const Hero = () => {
   
  const [showArrow, setShowArrow] = useState(false);


  return (
    <div className="w-full  min-h-screen flex items-center justify-center">
        <div className=" w-full md:w-1/2 text-center flex items-center flex-col gap-8"  >
            <h1 className="text-yellow-500 text-6xl md:text-8xl ">Unleash Your <span className="text-white ">Strength, </span><span className="text-white">Elevate</span> Your Wellness</h1>
            <span className="w-1/2 md:w-full bg-white h-0.5"></span>
            <p className="text-white text-2xl">Join the Buzz at BeeGym – Your Ultimate Fitness Destination</p>
            <button className="flex  items-center gap-4  bg-yellow-500 px-4 py-2 text-xl rounded-md shadow-lg shadow-black 
             duration-500 ease hover:bg-transparent hover:shadow-none hover:text-white" onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>Start Your Fitness Journey Today <ArrowRight style={{display: showArrow ? "block" : "none"}} /></button>
        </div>
    </div>
  )
}

export default Hero
