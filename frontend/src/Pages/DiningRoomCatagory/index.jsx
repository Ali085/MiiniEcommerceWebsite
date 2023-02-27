import React from 'react'
import DiningRoomCat from '../../Components/CatagoryPages/DiningRoomCat'
import ShopHeader from '../../Components/ShopHeader'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function DiningRoomCatagory() {
  return (
    <>
    <Navbar/>
    <ShopHeader/>
    <DiningRoomCat/>
    <Footer/>
    </>
  )
}

export default DiningRoomCatagory