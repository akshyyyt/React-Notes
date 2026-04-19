import { useState, useEffect } from 'react'

// Side Effects - Operation that interact with outer world and have effect on component re-rendering
// Fetch(), SetInterval, DOM Manipulation
// Basically these are the things that we want to do in side, which doesn't get effected by react's re rendering.

// What if we directlyy introduce SideEffect to React vaguely?
// These will run again and again and it would create chaos, ie multiple api calls, multiples clocks etc   
// This will also cause major performance issue

// useEffect help run the specific code only upon mounting (or on the state change of  variable inside dependency arr), not everytime on rerendering like in case of setInterval, which cause flashing.
// Flashing as in if we don't use useEffect, on every state change, component will re render and new setInterval will start.

// Lifecycle of a Component

function App(){
  let [flag, setFlag] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setFlag(prevFlag => !prevFlag)
    }, 5000)
  }, [])

  return (
    <>{flag && <Counter/>}</>
  )
}

// mounting, re-rendering, unmounting
function Counter(){
  let [count, setCount] = useState(0);
   
  // Guarding our setInterval from re rendering
  useEffect(()=> {
    console.log("mounted") 

    let clock = setInterval(()=>{
      // setCount(count+1) // But here the value will be pinned to 0. Since it is kind of hard coded. 
      setCount(count =>  count+1) // This is the correct way to do it. or pass it into dependency or call above one.
      console.log("Inside Clock")
    }, 1000) 

    // Cleanup
    return function (){
      clearInterval(clock)
      console.log("Unmounted")
    } // This function gets called whenever this component gets removed from the UI, ie this set Interval gets cleaned up
    // and new is started .
  }, []) // This effect will run only on mounting since dependency array is empty.
  
  return (
    <h1>{count}</h1>
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
