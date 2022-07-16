import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/Navbar/navComponents/Home";
import India from "../components/Navbar/navComponents/India";
import Location from "../components/Navbar/navComponents/Location";
import ListOfVehicles from "../components/Navbar/navComponents/ListOfVehicles";
import MyOffers from "../components/Navbar/navComponents/MyOffers";
import MyPlans from "../components/Navbar/navComponents/MyPlans";
import MyProfile from "../components/Navbar/navComponents/MyProfile";
import Create from "../Crud/AdminCrud/Create";
import Delete from "../Crud/AdminCrud/Delete";
import Edit from "../Crud/AdminCrud/Edit";
import Display from "../CarCart.jsx/Display";
import Checkout from "../CarCart.jsx/checkout/Checkout";
import CheckoutProduct from "../CarCart.jsx/CheckOutCar/Checkoutproduct";

const Routing = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/india",
      element: <India />,
    },
    {
      path: "/location",
      element: <Location />,
    },
    {
      path: "/listofvehicles",
      element: <ListOfVehicles />,
    },
    {
      path: "/myoffers",
      element: <MyOffers />,
    },
    {
      path: "/myplans",
      element: <MyPlans />,
    },
    {
      path: "/myprofile",
      element: <MyProfile />,
    },
    {
      path: "/Create",
      element: <Create />,
    },
    {
      path: "/Delete",
      element: <Delete />,
    },
    {
      path: "/Edit/:id",
      element: <Edit />,
    },
    {
      path: "/Display",
      element: <Display />,
    },
    {
      path: "/check",
      element: <Checkout />,
    },
    {
      path: "/checkout",
      element: <CheckoutProduct/>,
    },
  ]);
  return routes;
};

export default Routing;
