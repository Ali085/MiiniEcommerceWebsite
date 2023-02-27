import React from 'react'
import FurnitureCat from '../../Components/CatagoryPages/FurnitureCat'
import ShopHeader from '../../Components/ShopHeader'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function FurnitureCatagory() {
  return (
    <>
    <Navbar/>
    <ShopHeader/>
    <FurnitureCat/>
    <Footer/>
    </>
  )
}

export default FurnitureCatagory