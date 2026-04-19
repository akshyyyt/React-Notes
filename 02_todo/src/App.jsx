import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([{
    title: "Go to Gym",
    status: false 
  }])

  function appendTodo(){
    let newArray = [...todo]
    newArray.push({
      title: "React",
      status: false
    })
    setTodo(newArray) 
  }

  return (
    <>
      <button onClick={appendTodo}>Add Todo</button>
      {JSON.stringify(todo)}
    </>
  )
}
export default App