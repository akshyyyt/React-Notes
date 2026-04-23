import { useState, useRef } from 'react'
// useRef help us to create a reference to a value (which we can do by useState too but in this, on updating the value, UI won't re-render)
// or creating reference to DOM Element. in which if we change value, it doesn't trigger re-render. but persist on re-renders
// one of the use case is highlighting Input Box
// But you would think that why not just make a raw variable only, if we don't want to trigger re-renderig...
// They'd get re-initialised on every re-render

function App() {
  const inputRef = useRef();

  // const val = 1; // Bad way, we would rarely use normal variable. Since they will get re-initialised on every render
  // const [val, setVal] = useState(1); // Triggers Re-redering on Updating value, in clock if we use timer are state, I'll cause 1 extra re-render
  // const val = useRef(); // So, this remains the best approach.

  function focus(){
    inputRef.current.focus();
  }

  return (
    <>
      SignUp
      <input type="text" ref={inputRef}/>
      <input type="text" />
      <button onClick={focus}>Submit</button>
    </>
  )
}

export default App
