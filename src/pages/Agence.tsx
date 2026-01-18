import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

const Agence = () => {

  const devRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
  ]
  
      useGSAP(() => {
      gsap.to(devRef.current, {
        scrollTrigger: {
          trigger: devRef.current,
          start: "top 36%",
          end: "top -100%",
          scrub: true,
          pin: true,

          onUpdate: (self) => {
            let imageIndex;
            if (self.progress<1) {
              imageIndex = Math.floor(self.progress*imageArray.length)
            }else{
              imageIndex = imageArray.length-1
            }

            if (imageRef.current) {
              imageRef.current.src = imageArray[imageIndex]
            }
          }
        }
      })
    }, { scope: devRef })



  return (
    <div>
      <div className="section1">
        <div ref={devRef} className=" absolute h-86 w-56   overflow-hidden rounded-4xl top-[20vh] left-[31vw]">
          <img  ref={imageRef}  alt="image" className=" h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"></img>
        </div>
      <div className=" font-[font2] relative ">
        <div className=" mt-[52vh]">
          <h1 className=" text-center text-[20vw] leading-[18vw] uppercase">SEVEN7Y<br></br>TWO</h1>
        </div>
        <div className="  pl-[45vw]">
          <p className=" text-5xl"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
      </div>
      <div className=" section2 h-screen"></div>
    </div>
  )
}

export default Agence