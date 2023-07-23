import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Footer from "./components/Footer"
import Header from './components/Header'
import './index.css'

// const url = 'http://localhost:3001/'
function App() {

   return (
      <>
         <Router>
         <Navbar /> 
         <Header/>
         </Router>
         {/* <Main />  <br /> <br /> */}
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