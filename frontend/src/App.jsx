import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setToDos] = useState([])
  //better to be an empty array than null cuz you cant do map on a null
  const [input, setInput] = useState('')

  useEffect(() => {
    async function test() {
      const response = await fetch('http://localhost:8080/todos')
      const data = await response.json()
      console.log(data)
      setToDos(data)
    }
    test()
  }, [])

  function handleChange(e){ 
    setInput(e.target.value)
  }

  async function handleSubmit(e){
    //stop the page refresh 
    e.preventDefault()
    //formet our data - this should match the schema 
    const todo = {
      text: input
    }
    //make the request  - fetch 
    const response = await fetch('http://localhost:8080/todos', {
      method: 'POST', 
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newToDo = await response.json()
    setToDos([...todos, newToDo])
    console.log(newToDo)
    setInput("")
  }
// make the request with document id in path (at end)
  async function handleDelete(id) {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE", 
    })
    //make a copy od the sate but also remove the document with the matching id
    const newToDos = todos.filter(todo => todo._id !== id )
    setToDos(newToDos)
  }


  return (
    
    <>
      <h1>HELLO</h1>
      <ul>
        {todos.map(todo =>
        <li key={todo._id}>
          {todo.text}
          <button onClick={() => handleDelete(todo._id)}>X</button>
        </li>
      )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange}/>
        <button>Submit</button>
      </form>

    </>
  
  )
}

export default App
