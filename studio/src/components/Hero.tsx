import { ArrowDown } from "lucide-react"
import gsap from 'gsap'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const textRef = useRef<HTMLHeadingElement>(null);
  

  useEffect(() => {
      const textElement = textRef.current;
       
      if(!textElement) return;

      const splitText = textElement.textContent!.split("").map((char) => {
      
        if(char === " ") {
           return `<span class="whitespace"> </span>`;
        }

        return  `<span class="letter">${char}</span>`;
      }).join("");

      textElement.innerHTML = splitText;

      const letters = textElement.querySelectorAll("span");

      gsap.fromTo(letters, {
          opacity: 0,
          y: 100
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: {
          each: 0.05,
          from: 'start',
          ease: 'elastic.out(1, 0.5)'
        },

        scrollTrigger: {
          trigger: textElement,
          toggleActions: 'play none none none',
        }
      })
  }, [])

  return (
    <div className="w-full  min-h-screen flex items-center justify-center">
        <div className=" w-full md:w-4/5 text-center flex items-center flex-col gap-8"  >
            <h1 ref={textRef} className="text-yellow-500 text-6xl md:text-8xl title " style={{lineHeight: "7rem"}}>Unleash Your <span className="text-white ">Strength, </span><span className="text-white">Elevate</span> Your Wellness</h1>
            <span className="w-1/2 md:w-full bg-white h-0.5"></span>
            <p className="text-white text-2xl">Join the Buzz at BeeGym – Your Ultimate Fitness Destination</p>
             <span className="text-white flex flex-col items-center text-xl">Scroll <ArrowDown /></span>
        </div>
    </div>
  )
}

export default Hero
