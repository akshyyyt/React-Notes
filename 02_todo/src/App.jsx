import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([
    {
      title: "Go to Gym",
      status: false 
    },
    {
      title: "Study",
      status: true
    }
  ])

  function appendTodo(){
    setTodo([...todo, {title: "React", status: false}])
  }

  function Map(){
    return (
      todo.map((todo, index) => <div key={index}>{todo.title}, {todo.status ? "Done" : "Not Done"}</div>) // Here we give key to it so react can distinguish between the elements
    )
  }

  return (
    <>
      <button onClick={appendTodo}>Add Todo</button>
      <Map/>
    </>
  )
}
export default App