import React from 'react'
import BlogAbout from '../../Components/BlogAbout'
import BlogHeader from '../../Components/BlogHeader'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function Blog() {
  return (
    <>
    <Navbar/>
    <BlogHeader/>
    <BlogAbout/>
    <Footer/>
    </>
  )
}

export default Blog