import { useState , useRef , useEffect } from 'react'

// usePrev custom hook, it used to get the last value of my state.
function usePrev(value){
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = value
  }, [ value ])

  return ref.current
}
// Here first the value is returned, then it is updated without causing re-render since useRef is used.

function App() {
  const [ count , setCount ] = useState(0);
  const prev = usePrev(count);

  return (
    <>
      <h1>Current Value is {count}</h1>
      <h1>Last value was {prev}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
