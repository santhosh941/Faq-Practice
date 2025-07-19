import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Faq from './Components/Faq.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Faq />
  </StrictMode>,
)
