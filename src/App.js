import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./routing/Routing";
import Vehicle from "./components/Vehicles.jsx/Vehicle";
import CrudNavbar from "./Crud/AdminCrud/CrudNavbar";
import Footer from "./Pages/Footer";
import Footer2 from "./Pages/Footer2";
import Landingpage from "./Pages/LandingPage/LandingPage";
// import Display from "./CarCart.jsx/Display";
// import Checkout from "./CarCart.jsx/checkout/Checkout";
import SideNavBar from "./components/Navbar/navComponents/SideNavBar";
// import DisplayVehicle from "./CarCart.jsx/DisplayVehicle";
import CheckoutProduct from "./CarCart.jsx/CheckOutCar/Checkoutproduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./components/Navbar/navComponents/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ToastContainer/> */}
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
