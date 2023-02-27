import React from 'react'
import ClockCat from '../../Components/CatagoryPages/ClockCat'
import ShopHeader from '../../Components/ShopHeader'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function ClockCatagory() {
  return (
    <>
    <Navbar/>
    <ShopHeader/>
    <ClockCat/>
    <Footer/>
    </>
  )
}

export default ClockCatagory