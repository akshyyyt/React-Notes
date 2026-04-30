import { useState, createContext, useContext } from 'react'
// createContext - Storage in layman term...serves as container...could be here outside the component or even make a new file for it(more used new file)
const BulbContext = createContext();

// I defined by state variables here, and prop drilling them below...

// Next step is provider, it wraps part of the application and provide context to all its descendents, how I wrapped LightBulb. All the children of
// LightBulb can use BulbContext now. 
// We need to consume the context now, it is done using useContext wherever we want, in our case it is in toggle and bulbState 
function App() {
  const [bulb, setBulb] = useState(false);
  return (
    <>
      <BulbContext.Provider value={{
        bulb: bulb,
        setBulb: setBulb
      }}>
        <LightBulb />
      </BulbContext.Provider> 
    </>
  )
}


// All this was rolling up the state, instead declaring state in lower components we declare it in least common acestor and then pass them down
// as props. If we want, we CAN, pass prop from child to parent using callbacks, we it is a bad bad bad practise and never to do that...

// If i define my state inside my App component and then pass down to lightBulb and then to respective component, is called Prop Drilling.
// But it is hell lot of mess and also many components don't need those states but has to go thru them bcz that's how prop drilling works.
// It makes complexity and maintaince of code tough.

// BUT there's a way I define by state variable in App and then directly pass them their required component, skipping the components in between.
// "useContext"

// Here I am just passing the props down, not using them, it's just mess getting them from top and passing them down.
// When we remove props from here, it is soo clear now

// function LightBulb({bulb, setBulb}){
//   return (
//     <> 
//       <BulbState bulb={bulb}/>
//       <ToggleBulbState setBulb={setBulb}/>
//     </>
//   ) 
// }

// much cleaner. 
function LightBulb(){

  return (
    <> 
      <BulbState />
      <ToggleBulbState />
    </>
  )
}

//instead of prop we use useContext
function ToggleBulbState(){
  const { setBulb } = useContext(BulbContext)
  return (
    <>
      <button onClick={() => setBulb(bulb => !bulb)}>Toggle</button> {/* If I don't want callback then we have to pass bulb as prop too. */}
    </>
  )
} 

function BulbState(props){
  const { bulb } = useContext(BulbContext)
  return (
    <>
    {bulb ? "Bulb On" : "Bulb Off"}
    </>
  )
}

export default App
