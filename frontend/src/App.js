import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CarDetails from "./components/CarDetails"
import Hero from "./components/Hero"
import Home from "./Home"
import Footer from "./components/Footer"
// import TopIframe from ".components/TopIframe"

// const url = 'http://localhost:3001/'
function App() {
// const[open,setOpen]=useState(false)
   return (
      <>
         <Router>
            {/* <Navbar /> */}
         </Router>
         {/* <TopIframe/> */}
         <Home/>
         {/* <Hero /> */}
         <br /> <br /> <br /> <br /> <br /> <br />
         <Footer />
      </>
      // <Router>
      //   <div className='container'>
      //     <Routes>
      //       <Route path='/' element={<Home/>} />
      //     </Routes>
      //   </div>
      // </Router>


   )
}


export default App;
