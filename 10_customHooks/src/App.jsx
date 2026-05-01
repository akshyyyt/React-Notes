import { useState , useEffect , useRef } from 'react';

// Custom Hook
function useCounter(){
  const [ count , setCount ] = useState(0);

  function increament(){
    setCount(count+1);
  }
  
  function decreament(){
    setCount(count-1);
  }

  return ({count: count, increament: increament, decreament: decreament});
}

// useFetch custom hook. We could use setInterval too, if we want to add auto refetching in this, so that UI remains updated.
function useFetch(url){
  const [ data , setData ] = useState({});
  const [ loading , setLoading ] = useState(false);

  async function getData(){
    setLoading(true);

    const res = await fetch(url);
    const content = await res.json();
    setData(content);

    setLoading(false);
  }

  useEffect(() => { 
    getData();
  }, [url])

  return { data , loading };
} 

function App() {
  const { count , increament , decreament } = useCounter();
  const { data , loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
 
  return (
    <>
      {loading ? "Loading..." : <h1>{data.title}</h1>}
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </>
  )
}

export default App