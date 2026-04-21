import { useState } from 'react'
import react from 'react'

function App() {
  return (
    // <div>
    //   <Card>
    //     <h1>Enter the Email:</h1> {/* Passing the children */}
    //   </Card>
    // </div>

    <>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
      <Card2/> 
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



// Error Boundary - When a error occur in only one part of application but you don't want entire application to go down
// You create a boundry around that card so the error is limited only there.
class ErrorBoundary extends react.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false}
  }

  static getDerivedStateFromError(error){
    return { hasError: true}
  }

  componentDidCatch(error, info){
    console.error("Error Caught", error, info)
  }

  render(){
    if (this.state.hasError){
      return <h1>Something is Wrong</h1>
    }
    return this.props.children
  }
} // This is mostly the formatted code, used as it is
// Also called fallback UI 

function Card1(){
  throw new Error("Error while rendering")
  // Error is only in Card1 but entire application will not render
  // So we will contain the error to only this Card. And give a fallback UI to Card1

  // But but but Error boundary is not there in function Component, so we would need Class based for this

  return (
    <div>Hi there</div>
  )
}

function Card2(){
  return (
    <div>Hello</div>
  )
}


// Fragments, <></> these help get rid of extra div so that children are direct of parent div

export default App