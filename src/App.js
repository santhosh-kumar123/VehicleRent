import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Apis/Routing";
import Vehicle from "./components/Vehicles.jsx/Vehicle";
import CrudNavbar from "./Crud/AdminCrud/CrudNavbar";
import Footer from "./Pages/Footer";
import Footer2 from "./Pages/Footer2";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Display from "./CarCart.jsx/Display";
import Checkout from "./CarCart.jsx/checkout/Checkout";
import SideNavBar from "./components/Navbar/navComponents/SideNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SideNavBar />
        <Routing />

        {/* <CrudNavbar />
        <Vehicle />
        <Landingpage />
        <Footer />
        <Footer2 /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App