import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { TareasProvider } from './context/TareasContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TareasProvider>
          <App />
        </TareasProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
