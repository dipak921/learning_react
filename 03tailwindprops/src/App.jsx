import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // USING PROPS IN REACT 
  // let myObj ={username: "Tech Channel", 
  //    followers: 1000,        
  // }
  // let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 m md:rounded-none rounded-full mx-auto" src="/src/assets/img/download.jpg"  alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

{/* <Card channel="Tech Channel" someObj={myObj} newArr={newArr}/> */}

<Card username="Tech Channel" btnText="Follow"/>
<Card username="Web Dev Simplified"btnText="Subscribe"/>
    </>
  )
}

export default App
