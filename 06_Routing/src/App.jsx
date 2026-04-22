import { useState, useEffect } from 'react'
// installed react-router-dom from npm - npm install react-router-dom
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  return (
    <>
    Footer {/* This and footer would be called "layouts" since they are constant on all the routes. Constant part is called layout, another way of this is outlet*/}
      Anchor Tag (Reloading)<br/> 
      <a href="/">Home</a><br/>
      <a href="/happy">Happy</a><br/>
      <a href="/sad">Sad</a><br/>
      {/* Dumb way of navigation, We see a loader when navigating, ie fetching the whole page again, Takes away benifit of SPA 
      Now there are 2 way to fix this, Importing Link or useNavigate from react-router-dom and use it inside Browser Router */}

      <BrowserRouter>
        Link Tag (No Reloading and works on clicking on it )<br/>
        <Link to="/">Home</Link><br/>
        <Link to="/happy">Happy</Link><br/>
        <Link to="/sad">Sad</Link><br/>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/happy" element={<Happy/>}></Route>
            <Route path="/sad" element={<Sad/>}></Route> 
            <Route path="*" element={<ErrorPage/>}></Route> {/* Error Page, if user try to exesss any path which is not defined */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Single Page Application (SPA). all data on single HTML page unlike orthodox way of creating new html page for everything

// Now we have 2 Ways... Lazy Loading ie fetch request again when use go on that page to get the required HTML.
// Another is all the data on the first fetch itself and then use it accordingly. (Eager Loading)
// But in both case the application remains single page. Only the difference of optimizations

function Layout(){
  return (
    <>
      This is the heading from Layout
      <Outlet/>
      This is the footer from layout
    </>
  )
}
function Landing(){
  return (
    <h1>Welcome</h1>
  )
}

function Happy(){
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000) // Help to redirect to the page after some time. Or I can use this onClick too.
  })

  return (

    <h1>I am happy</h1>
  )
} 

function Sad(){
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    },5000)
  })

  return (
    <h1>I am sad</h1>
  )
}

function ErrorPage(){
  return (
    <div>Aww</div>
  )
}

export default App