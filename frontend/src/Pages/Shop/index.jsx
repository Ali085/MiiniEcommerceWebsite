import React from 'react'
import ShopAllProduct from '../../Components/ShopAllProduct'
import ShopHeader from '../../Components/ShopHeader'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function Shop() {
  return (
    <>
    <Navbar/>
    <ShopHeader/>
    <ShopAllProduct/>
    <Footer/>
    </>
  )
}

export default Shop