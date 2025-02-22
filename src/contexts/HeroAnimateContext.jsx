import { createContext, useState } from "react";

export const HeroContext = createContext(true)


const HeroAnimateContextProvider= ({children}) => {

    const [isWelcomeAnimating,setWelcomeAnimate] = useState()
  return (
    <HeroContext.Provider value={{isWelcomeAnimating, setWelcomeAnimate}}>
        {children}
    </HeroContext.Provider>
  )
}

export default HeroAnimateContextProvider