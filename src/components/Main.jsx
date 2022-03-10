import React from 'react';
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero'
import Testimonials from './Testimonials/Testimonial'
import Features from './Features/Feature'
import Contact from './Contactus/Contact'
import Footer from './Footer/Footer'
import {Heads} from './OurHeads/Heads';
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../images/founder.JPG'
import About from './Aboutus/About'
function Main() {
  return (<>
  <FloatingWhatsApp
        phoneNumber="+919264970728"
        accountName="Varsh Services"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
        avatar ={WhatsappImg} 
        className ="whatsapp"
        statusMessage = ""
        chatMessage = "Welcome To Varsh"
      />
      <div className='main'>
   <Navbar/>
    <Hero/>
    </div>
    {/* <Features/> */}
    <Testimonials/>
    {/* <Heads/> */}
    <Contact/>
    <Footer/>
  </>);
}

export default Main;
