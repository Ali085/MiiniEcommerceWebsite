import React from 'react'
import HomeHeader from '../../Components/HomeHeader'
import PopularProduct from '../../Components/PopularProduct'
import SpecialOffer from '../../Components/SpecialOffer'
import Testimonial from '../../Components/Testimonial'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function Home() {
  return (
    <>
    <Navbar/>
    <HomeHeader/>
    <PopularProduct/>
    <SpecialOffer/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home