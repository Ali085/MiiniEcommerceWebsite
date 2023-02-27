import { useSelector } from "react-redux";
import {createBrowserRouter} from "react-router-dom";
import Blog from "../Pages/Blog";
import ClockCatagory from "../Pages/ClockCatagory";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";
import DiningRoomCatagory from "../Pages/DiningRoomCatagory";
import FurnitureCatagory from "../Pages/FurnitureCatagory";
import Home from "../Pages/Home";
import LampCatagory from "../Pages/LampCatagory";
import LoginRegister from "../Pages/LoginRegister";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";
import Wishlist from "../Pages/Wishlist";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "/login",
      element: <LoginRegister/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/shop",
      element: <Shop/>,
    },
    {
      path: '/wishlist',
      element: <Wishlist/>,
    },
    {
      path: "/products/clock",
      element: <ClockCatagory/>,
    },
    {
      path: "/products/diningroom",
      element: <DiningRoomCatagory/>,
    },
    {
      path: "/products/furniture",
      element: <FurnitureCatagory/>,
    },
    {
      path: "/products/lamp",
      element: <LampCatagory/>,
    },
    {
      path: "/details/:id",
      element: <Details/>,
    },
  ]);

  export default router