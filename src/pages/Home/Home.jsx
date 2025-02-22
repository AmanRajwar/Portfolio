import { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import BackgroundAnimate from '../../components/BackgroundAnimate'
import WelcomeSection from '../../components/WelcomeSection'
import { HeroContext } from '../../contexts/HeroAnimateContext'
import HeroSection from '../../components/HeroSection'

const Home = () => {
  const { isWelcomeAnimating } = useContext(HeroContext)
  const [state, setState] = useState(true)
  useEffect(() => {
    if (isWelcomeAnimating)
      setTimeout(() => {
        setState(false)
      }, 400)
  }, [isWelcomeAnimating])
  return (
    <div className='bg-background min-w-[100dvw] relative'>
      <NavBar />
      <main className='bg-background'>
        <section className='  w-full min-h-[100svh]  relative   flex flex-col items-center justify-center '>
          <BackgroundAnimate />
          {/* {state ? <WelcomeSection /> : <HeroSection />} */}
          <HeroSection />
        </section>
      </main>
      {
        isWelcomeAnimating && <div className='min-h-[100vh]'>

        </div>
      }
    </div>
  )
}

export default Home