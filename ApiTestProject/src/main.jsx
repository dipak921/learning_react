import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FetchAPI from './FetchAPI.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchAPI />
  </StrictMode>
)