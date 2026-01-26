import { useRef } from 'react'
import cam from '../assets/CAMILLE_480X640_2.jpg'
import carl from '../assets/Carl_480x640.jpg'
import chantel from '../assets/ChantalG_480x640.jpg'
import meggie from '../assets/MEGGIE_480X640_2.jpg'
import mel from '../assets/MEL_480X640.jpg'
import michele from '../assets/Michele_480X640.jpg'
import olivier from '../assets/Olivier_480x640.jpg'
import joel from '../assets/joel_480X640_3.jpg'

const Agence = () => {

  const imageref = useRef<HTMLImageElement>(null)

  const actors = [cam,carl,chantel,meggie,mel,michele,olivier,joel]

  return (
    <div>
      <div className='section-1'>
        <div className=' overflow-hidden  w-50 h-75 absolute  top-[26%] left-[31%] rounded-4xl'>
          <img ref={imageref}  className=' overflow-hidden  h-full w-full object-cover rounded-4xl' src={carl} alt=''></img>
        </div>
        <div className=" relative font-[font2]">
          <div className=" mt-[55vh]">
            <h1 className=" text-[20vw] text-center uppercase leading-[17vw] ">SEVEN7Y<br></br>TWO</h1>
          </div>
          <div className=' pl-[50%] mt-20'>
            <p className=' text-5xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className=' section-2 h-screen'></div>
    </div>
  )
}

export default Agence