import { createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

export const MobileViewContext = createContext(false)



const MobileViewProvider = ({ children }) => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    return (
        <MobileViewContext.Provider value={isMobile}>
            {children}
        </MobileViewContext.Provider>
    )
}

export default MobileViewProvider