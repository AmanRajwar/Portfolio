import React from 'react'
import NavBar from '../../components/NavBar'
import BackgroundAnimate from '../../components/BackgroundAnimate'
import HeroSection from '../../components/HeroSection'
const Home = () => {
  return (
    <div className='bg-background w-full relative '>
      <NavBar />
      <main className='bg-background'>
        <section className='  w-full min-h-[100svh]  relative   flex flex-col items-center justify-center '>
          <BackgroundAnimate />
          <HeroSection />
        </section>
      </main>
      <div className='min-h-[100vh]'>

      </div>
    </div>
  )
}

export default Home