import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModeContextProvider } from './components/store/ModeContext.jsx'
import { WeatherContextProvider } from './components/store/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </ModeContextProvider>
  </StrictMode>,
)