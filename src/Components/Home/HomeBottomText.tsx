import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className=" font-[font2] flex items-center justify-center gap-x-5">
      <div className=" border-3 h-28 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] ">
        <Link to={'/projects'} className=" text-[6vw]">Projects</Link>
      </div>
      <div className=" border-3 h-28 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] ">
        <Link to={'/agence'} className=" text-[6vw]" >Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText