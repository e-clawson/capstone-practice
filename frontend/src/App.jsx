import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function test() {
      const response = await fetch('http://localhost:8080/test')
      const data = await response.json()
      console.log(data)
    }
    test()
  }, [])

  return (
    
    <>
      <h1>HELLO</h1>
    </>
  
  )
}

export default App
