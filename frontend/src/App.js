import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'

// import TopIframe from ".components/TopIframe"

// const url = 'http://localhost:3001/'
function App() {
// const[open,setOpen]=useState(false)
   return (
      
         <Router>
            <Routes>
            <Navbar />
            <Header />
            </Routes>
         </Router>
        
         

   )
}



export default App;


