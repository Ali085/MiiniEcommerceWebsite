import Blog from "./Pages/Blog";
import ClockCatagory from "./Pages/ClockCatagory";
import Contact from "./Pages/Contact";
import Details from "./Pages/Details";
import DiningRoomCatagory from "./Pages/DiningRoomCatagory";
import FurnitureCatagory from "./Pages/FurnitureCatagory";
import Home from "./Pages/Home";
import LampCatagory from "./Pages/LampCatagory";
import LoginRegister from "./Pages/LoginRegister";
import Register from "./Pages/Register";
import Shop from "./Pages/Shop";
import Wishlist from "./Pages/Wishlist";
import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setAll } from "./Redux/cartRedux";

import Buy from "./Pages/Buy";
import Accepted from "./Components/Accepted";
import axios from 'axios'
function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const cart = useSelector(state => state.cart)
    async function load() {
        let obj = JSON.parse(localStorage.getItem("persist:root"))
        let user = JSON.parse(obj.user)
        let user_id = user.currentUser._id
        console.log(cart.products)
        let result = await axios.post("http://localhost:5000/api/basket/load" , {user_id})
        console.log(result.data.products.products)
        dispatch(setAll(result.data.products.products))
    }

    useEffect(()=>{
        // load()
    },[])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <LoginRegister />} />
                <Route path="/register" element={<Register />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/products/clock" element={<ClockCatagory />} />
                <Route path="/products/diningroom" element={<DiningRoomCatagory />} />
                <Route path="/products/furniture" element={<FurnitureCatagory />} />
                <Route path="/products/lamp" element={<LampCatagory />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/accapted"  element={user ? <Accepted /> : <Navigate to='/register' />} />
                <Route path="/buy" element={user ? <Buy/> : <Navigate to='/register' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App