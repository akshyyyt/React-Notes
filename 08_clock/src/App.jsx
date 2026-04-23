import { useState, useRef } from 'react'

function App() {
  const [count, setCount ] = useState(0);
  const time = useRef();

  function startClock(){
    let timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
    time.current = timer;
  }

  function stopClock(){
    clearInterval(time.current)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  )
}

export default App
