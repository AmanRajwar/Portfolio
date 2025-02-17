import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './contexts/ThemeContext.jsx'
import HeroAnimateContextProvider from './contexts/HeroAnimateContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <HeroAnimateContextProvider>
      <App />
    </HeroAnimateContextProvider>
  </ThemeContextProvider>
)
