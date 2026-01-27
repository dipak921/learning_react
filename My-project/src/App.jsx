import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='message'>
      <img className='img' src="https://wallpapers.com/images/hd/hi-bubble-speech-rg5x0jj9qxyamv0x.jpg" alt="Hi message img" />
      <h1>Helow sirji</h1>
    </div>
  )
}

export default App
