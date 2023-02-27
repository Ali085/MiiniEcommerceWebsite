import React from 'react'
import ContactHeader from '../../Components/ContactHeader'
import ContactMessage from '../../Components/ContactMessage'
import ContactNumber from '../../Components/ContactNumber'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar/Index'

function Contact() {
  return (
    <>
    <Navbar/>
    <ContactHeader/>
    <ContactNumber/>
    <ContactMessage/>
    <Footer/>
   
    </>
  )
}

export default Contact