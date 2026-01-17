import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className=' font-[font1] flex justify-center items-center gap-2 '>
      <Link to={'/projects'} className=" text-[6.5vw] leading-[6vw]  border-3 px-6 pt-3 uppercase pb-0   rounded-full "  >Projects</Link>
      <Link to={'/agencies'} className=" text-[6.5vw] leading-[6vw]  border-3 px-6 pt-3 uppercase pb-0   rounded-full "  >Agency</Link>
    </div>
  )
}

export default HomeBottomText