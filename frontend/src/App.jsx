import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export const BASE_URL = import.meta.env.VITE_BASE_URL

function App() {
  const [todos, setToDos] = useState([])
  //better to be an empty array than null cuz you cant do map on a null
  const [input, setInput] = useState('')

  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/todos`)
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
    const response = await fetch(`${BASE_URL}/todos`, {
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
    try{ 
      const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE", 
      })
      if (!response.ok) {
        // create our own error and throw it
        throw new Error('Something went wrong. Status: ' + response.status)
      }

      // make a copy of the state but also remove the document with the matching id
      const newTodos = todos.filter(todo => todo._id !== id)

      // update the state with a new array
      setToDos(newTodos)
    } catch(e) {
      console.log('in the catch')
      console.log(e)
    }
  }

  async function handleComplete(id) {
    // find todo with specified id
    const todo = todos.find((todo) => todo._id == id);

    // make the request with the document id in the path
    const response = await fetch(`${BASE_URL}/todos/${todo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    });

    // format the updated todo
    const updatedTodo = await response.json();

    // make a copy of the state but also replace the document with the matching id
    const updatedTodos = todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo));

    // update the state with a new array
    setToDos(updatedTodos);
  }

  return (
    
    <>
      <h1>To Dos</h1>
      <ul>
        {todos.map(todo =>
        <li key={todo._id}>
          <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo._id)}/>
          {todo.text}
          <button onClick={() => handleDelete(todo._id)}>X</button>
        </li>
      )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange}/>
        <button>Add</button>
      </form>

    </>
  
  )
}

export default App

// need error handling in the front end 
// nest fecth requests in try catch s that the
//errors can make it to the page 