import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar";
//import { Header } from "antd/es/layout/layout";
import Header from "./features/Header"
// import Home from "./pages/Home";
// import Consulting from "./pages/Consulting";
// import Contactus from "./pages/Contactus";
// import Design from "./pages/Design";
// import Development from "./pages/Development";
// import Marketing from "./pages/Marketing";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
// import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        
        {/* <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
        </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;