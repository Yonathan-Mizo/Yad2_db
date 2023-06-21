import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Header from './components/Header'

=======
import CarDetails from "./components/CarDetails"
import Hero from "./components/Hero"
import Home from "./Home"
import Footer from "./components/Footer"
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
// import TopIframe from ".components/TopIframe"

// const url = 'http://localhost:3001/'
function App() {
// const[open,setOpen]=useState(false)
   return (
      <>
         <Router>
<<<<<<< HEAD
            <Navbar />
            <Header />
         </Router>
        
=======
            {/* <Navbar /> */}
         </Router>
         {/* <TopIframe/> */}
         <Home/>
         {/* <Hero /> */}
         <br /> <br /> <br /> <br /> <br /> <br />
         <Footer />
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
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


<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d3673a580193d911cdce1a3e1442ad5e3d20de7a
