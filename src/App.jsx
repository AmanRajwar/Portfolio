import { useContext } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import { ThemeContext } from './contexts/ThemeContext.jsx'


function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme} w-[100dvw]  overflow-hidden`}>
      <Home ></Home>
    </div>
  )
}

export default App
