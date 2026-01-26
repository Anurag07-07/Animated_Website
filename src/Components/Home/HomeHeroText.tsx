import Video from "./Video"

const HomeHeroText = () => {
  return (
    <div className="  font-[font2] pt-5 text-center -mt-5">
      <div className=" tracking-[0.5vw]  text-[8.5vw] uppercase  leading-[8vw] flex items-center justify-center"  >The spark for</div>
      <div className=" text-[8.5vw] uppercase  leading-[8vw] flex items-center justify-center "  >all   <div className="h-[8vw] rounded-full overflow-hidden"><Video></Video></div> things</div>
      <div className=" text-[8.5vw] uppercase  leading-[8vw] flex items-center justify-center"  >creative</div>
    </div>
  )
}

export default HomeHeroText