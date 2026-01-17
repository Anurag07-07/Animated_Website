import videoSrc from '../../assets/69496b2d.mp4'

const Video1 = () => {
  return (
    <div className=' h-full w-full'>
      <video className=' w-full h-full object-cover rounded-full' autoPlay muted loop src={videoSrc}></video>
    </div>
  )
}

export default Video1