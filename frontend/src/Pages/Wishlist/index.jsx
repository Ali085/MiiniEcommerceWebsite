import React from 'react'
import WishlistHeader from '../../Components/WishlistHeader'
import WishlistSec from '../../Components/WishlistSec'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function Wishlist() {
  return (
    <>
    <Navbar/>
    <WishlistHeader/>
    <WishlistSec/>
    <Footer/>
    </>
  )
}

export default Wishlist