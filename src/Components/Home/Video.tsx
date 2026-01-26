import screen from '../../assets/69496b2d.mp4'
const Video = () => {
  return (
    <div className=' h-full w-full'>
      <video className=' h-full w-full object-cover' src={screen} autoPlay loop muted ></video>
    </div>
  )
}

export default Video