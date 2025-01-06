import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/footer'
import ContactUs from './contact-us/contactUs'

const Contact = () => {
  return (
    <>
     <Header/>
     <div className='container-fluid'>
        <ContactUs/>
     </div>
     <Footer/>
    </>
  )
}

export default Contact