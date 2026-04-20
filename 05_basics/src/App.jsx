import { useState } from 'react'

function App() {
  return (
    // <div>
    //   <Card>
    //     <h1>Enter the Email:</h1> {/* Passing the children */}
    //   </Card>
    // </div>

    <>
      
    </>
  )
}

// Children
function Card({ children }){
  return (
    <div style={{backgroundColor: "black", borderRadius: 10, color: "white", padding: 10}}>
      {children}
    </div>
  )
}

export default App
