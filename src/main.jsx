import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './contexts/ThemeContext.jsx'
import HeroAnimateContextProvider from './contexts/HeroAnimateContext.jsx'
import MobileViewProvider from './contexts/MobileViewContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <HeroAnimateContextProvider>
      <MobileViewProvider>
        <App />
      </MobileViewProvider>
    </HeroAnimateContextProvider>
  </ThemeContextProvider>
)
