import { useState, useEffect } from 'react'
// useEffect help run the specific code only upon mounting, not everytime on rerendering like in case of setInterval, which cause flashing.
// Flashing as in if we don't use useEffect, on every state change component will call again t o re render and new setInterval will start.



// mounting, re-rendering, unmounting
function Counter(){
  let [count, setCount] = useState(0)
  
  console.log("rerender") 
  
  // Guarding our setInterval from re rendering
  useEffect(()=> {
    setInterval(()=>{
      setCount(count =>  count+1)
    }, 1000)  
    console.log("mounted")
    
    return function(){
      console.log("Unmounted") // This function gets called whenever the state is changed, ie called cleanup or unmounting.
    }
  }, []) // dependency array, cleanup, fetch inside in useEffect
  
  
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

function ToggleMessage(){
  // Conditional Rendering
  const [visibility, setVisibility] = useState(false); // defining is a state variable
  // When value of state variable is changed
  // The comoponent which uses state variable re-renders

  function toggle(){
    setVisibility(!visibility);
  }

  return (
    <>
      <button onClick={toggle}>Toggle Message</button>
      {visibility && <p>This is conditionally rendered</p>}
      {visibility === true ? <p>This is conditionally rendered</p>: null}
    </>
  )
}

export default App
