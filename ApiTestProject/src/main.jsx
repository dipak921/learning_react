import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FetchAPI from './FetchAPI.jsx'
import Student from './Student.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchAPI />
    <Student />

  </StrictMode>
)