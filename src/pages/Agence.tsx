import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

import carl from '../assets/Carl_480x640.jpg'
import cam from '../assets/CAMILLE_480X640_2.jpg'
import chantel from '../assets/ChantalG_480x640.jpg'
import joel from '../assets/joel_480X640_3.jpg'
import meggie from '../assets/MEGGIE_480X640_2.jpg'
import mel from '../assets/MEL_480X640.jpg'
import mich from '../assets/Michele_480X640.jpg'
import oliver from '../assets/Olivier_480x640.jpg'


const Agence = () => {

  const devRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    carl,chantel,joel,meggie,mel,mich,oliver,cam
  ]
  
      useGSAP(() => {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: devRef.current,
            start: "top 36%",
            end: "top -90%",
            scrub: 0.6, 
            pin: true,
            onUpdate: (elem) => {
              let imageIndex;
              if (elem.progress<1) {
                imageIndex = Math.floor(elem.progress*imageArray.length)
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
          <p className=" text-5xl">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
</p>
        </div>
      </div>
      </div>
      <div className=" section2 h-screen"></div>
    </div>
  )
}

export default Agence

