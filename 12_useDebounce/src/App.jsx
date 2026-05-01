import { useState , useEffect , useRef } from 'react'

// useDebounce, when we write something very fast in search bar, it would lead to spamming http request to the server to search instead we can let a little timer to let user finish typing.
// There will be a parent function that will be sending request to backend, it's just a middleman that will hold the request if the user starts typing very fast.  


// 1st way

// function useDebounce(reqBackend){
//     let currentClock = useRef();

//      return () => {
//       clearTimeout(currentClock.current);
//       currentClock.current = setTimeout(reqBackend, 200);
//      }
// } 
  

// function App() {
//   function reqBackend(){
//     console.log("Request Sent") // Fetch request
//   }

//   const debounceFn = useDebounce(reqBackend);
     
//   return (
//     <>
//       <input type="text" onChange={debounceFn} />
//     </>
//   )
// }



// 2nd Way

function useDebounce( inputVal , delay ){
  const [ debounceVal , setDebounceVal ] = useState(inputVal);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceVal(inputVal)
    }, delay)

    return () => clearTimeout(timer)
  }, [ inputVal , delay ])

  return debounceVal
}

function App(){
  const [ val , setVal ] = useState("")
  const debounceVal = useDebounce(val,200)

  
  useEffect(() => {
    function reqBackend(){
      console.log("Fetched from server")
    }
    reqBackend()
  }, [ debounceVal ])


  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
    </>
  )
}


export default App
