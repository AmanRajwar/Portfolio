import { createContext, useState } from "react";

export const HeroContext = createContext(true)


const HeroAnimateContextProvider= ({children}) => {

    const [heroAnimate,setHeroAnimate] = useState()
  return (
    <HeroContext.Provider value={{heroAnimate, setHeroAnimate}}>
        {children}
    </HeroContext.Provider>
  )
}

export default HeroAnimateContextProvider