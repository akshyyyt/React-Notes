import { useState, useEffect } from 'react'
// installed react-router-dom from npm - npm install react-router-dom
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom'
// BrowserRouter help us to provide client-side Routing, and client-side Routing is js being managed by client's browser instead to re-fetching html again and again.
// Routes and Route help managing client-side routing, by giving it the path where to navigate
// Outlet is used to make the Layout...Layout?? The constant part on all the pages.
// Link tag is used for navigating to all the pages without a refresh. In orthodox way, we used anchor but it refreshes every time we go another page. Instead of link we, could also use NavLink by importing it.
// useNavigate is used as a eventHandler and redirects, it doesn't render any component on the screen like Link.

function App() {

  return (
    <>
    Footer {/* This and footer would be called "layouts" since they are constant on all the routes. Constant part is called layout, another way of this is outlet */}
      Anchor Tag (Reloading)<br/> 
      <a href="/main">Home</a><br/>
      <a href="/main/happy">Happy</a><br/>
      <a href="/main/sad">Sad</a><br/>
      {/* Dumb way of navigation, We see a loader when navigating, ie fetching the whole page again, Takes away benifit of SPA 
      Now there are 2 way to fix this, Importing Link or useNavigate from react-router-dom and use it inside Browser Router */}

      <BrowserRouter>
        Link Tag (No Reloading and works on clicking on it )<br/>
        <Link to="/main">Home</Link><br/>
        <Link to="/main/happy">Happy</Link><br/>
        <Link to="/main/sad">Sad</Link><br/>

        <Routes>
          <Route path="main" element={<Layout/>}>
            <Route index element={<Landing/>}></Route> {/* index instead of path, help to use it as same as parents router path */}
            <Route path="happy" element={<Happy/>}></Route>
            <Route path="sad" element={<Sad/>}></Route> 
            <Route path="*" element={<ErrorPage/>}></Route> {/* Error Page, if user try to exesss any path which is not defined, it is called catch all route*/}
          </Route>

          {/* The colon ':' tells React: "Whatever comes after /profile/ is a variable called username" */}
          <Route path="profile/:username" element={<UserProfile/>}></Route>
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
  }, [])

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
  }, [])

  return (
    <h1>I am sad</h1>
  )
}

function ErrorPage(){
  return (
    <div>Aww</div>
  )
}

function UserProfile(){
  const { username } = useParams(); // Hook grabs the variable from the URL, it return object, so we destructure it

  return (
    <div>This user is {username}</div>
  )
}

export default App