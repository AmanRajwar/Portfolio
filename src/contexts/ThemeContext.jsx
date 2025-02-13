import {createContext, useState } from "react";

export const ThemeContext = createContext('dark')
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    return (
        <ThemeContext.Provider value={{setTheme,theme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
