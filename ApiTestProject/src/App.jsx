import { useEffect } from 'react'
import './App.css'
import AppAPI from './AppAPI'

function App() {

  useEffect(() => {
    getPost()
      .then((data) => 
        console.log("API Data from AppAPI.js:", data)
      );
  },[]);

  return (
    <>
      <h2>Check Console for API Data</h2>
    </>
  )
}

export default App