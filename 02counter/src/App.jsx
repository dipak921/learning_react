import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(2) 

  // let counter = 5;

  const addValue = () =>{
    // console.log("clicked",counter);
     if(counter < 20){
      setCounter(counter + 1)
    }
    else{
      alert("Not Allowed in Greather than 20")
    }
  }
  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("Last Value")
    }
  }

  return (
    <>
      <h1>Chai  aur React</h1>
      <h2>Countr Value : {counter}</h2>

      <button 
      onClick={addValue}>Add Value: {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >Decrease Value: {counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
