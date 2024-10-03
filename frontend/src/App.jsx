import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setToDos] = useState([])
  //better to be an empty array than null cuz you cant do map on a null

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
      {todos.map(todo =>
        <li key={todo._id}>
          {todo.text}
        </li>
      ) }
    </>
  
  )
}

export default App
