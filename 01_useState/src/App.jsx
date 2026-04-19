import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  function increament(){
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={increament}>Count {count}</button>
    </>
  ) 
}

export default App