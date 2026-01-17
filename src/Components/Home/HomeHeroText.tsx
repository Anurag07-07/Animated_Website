import Video1 from './Video1'

const HomeHeroText = () => {
  return (
    <div className=' font-[font1] pt-4 text-center'>
      <div className=' uppercase text-[9.5vw] leading-[8.5vw] flex justify-center items-center ' >The spark for</div>
      <div className=' uppercase text-[9.5vw] leading-[8.5vw] flex justify-center items-start ' >
        all
        <div className=' h-[7vw] w-[16vw]  overflow-hidden rounded-full'>
          <Video1></Video1>
        </div>
        things</div>
      <div className=' uppercase text-[9.5vw] leading-[8.5vw] flex justify-center items-center ' >creative</div>
    </div>
  )
}

export default HomeHeroText