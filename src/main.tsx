import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ModeContextProvider } from './components/store/ModeContext'
import { WeatherContextProvider } from './components/store/WeatherContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </ModeContextProvider>
  </StrictMode>,
)