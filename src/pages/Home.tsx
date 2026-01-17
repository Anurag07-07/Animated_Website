import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
    <div className=' h-screen w-screen bg-red-900 fixed'>
      <Video></Video>
    </div>
    <div className=' h-screen w-screen relative flex flex-col  justify-between pb-5'>
      <HomeHeroText></HomeHeroText>
      <HomeBottomText></HomeBottomText>
    </div>
    </div>
  )
}

export default Home