import React from 'react'
import NavBar from '../../components/NavBar'
import BackgroundAnimate from '../../components/BackgroundAnimate'
const Home = () => {
  return (
    <div className='bg-background w-full h-full relative overflow-hidden flex flex-col items-center justify-center'>
      <NavBar />
      <BackgroundAnimate/>
      <div className=' w-full h-[100dvh] '>

      </div>
    </div>
  )
}

export default Home