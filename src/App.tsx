import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const App = () => {
  
  useGSAP(()=>{

    const tl = gsap.timeline()
    
    tl.from('.stairs ',{
      height:0,
      stagger:{
        amount:-0.3
      }
    })

    tl.to('.stairs ',{
      y:"100%",
      stagger:{
        amount:-0.3
      }     
    })

  })

  return (
    <div className=" text-6xl text-white">
      <div className=" w-full h-full fixed z-20 top-0 flex">
        <div className=" stairs  w-1/5 h-screen bg-black"></div>
        <div className=" stairs  w-1/5 h-screen bg-black"></div>
        <div className=" stairs  w-1/5 h-screen bg-black"></div>
        <div className=" stairs  w-1/5 h-screen bg-black"></div>
        <div className=" stairs  w-1/5 h-screen bg-black"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/agence" element={<Agence></Agence>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  )
}

export default App