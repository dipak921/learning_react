import { useEffect, useState } from 'react'
import axios from 'axios'
import viteLogo from '/vite.svg'


function App() {
  //const [count, setCount] = useState(0)

  const[stdudetn, setStudent] = useState([])

  useEffect(() => {
    axios.get("https://localhost:7035/api/Students")
    .then((res) => {
      setStudent(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);





  return (
    <>
      <h1>React </h1>
      {/* <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button> */}

      <table className="table-auto border-collapse border border-slate-400 table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Eductions</th>
          </tr>
        </thead>
        <tbody>
          {stdudetn.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.eduction}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </>
  )
}

export default App
