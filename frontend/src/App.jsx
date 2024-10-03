import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setToDos] = useState([])

  useEffect(() => {
    async function test() {
      const response = await fetch('http://localhost:8080/todos')
      const data = await response.json()
      console.log(data)
      setToDos(data)
    }
    test()
  }, [])

  return (
    
    <>
      <h1>HELLO</h1>
      <h1>Backend says: </h1>
    </>
  
  )
}

export default App
