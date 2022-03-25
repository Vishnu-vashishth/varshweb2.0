import React from 'react';
import Navbar from './Navbar/Navbar'
import Hero1 from './HeroSection/Hero1'
import Testimonials from './Testimonials/Testimonial'
import Features from './Features/Feature'
import Contact from './Contactus/Contact'
import Footer from './Footer/Footer'
import {Heads} from './OurHeads/Heads';
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../images/project manager.jpg'
import About from './Aboutus/About'
import Carasoul from './Aboutus/Carasoul'
import Abouttwo from './Aboutus/Abouttwo'
import AboutFooter from './Aboutus/Aboutfooter';
import Process from './Services/Process/Process';
function Main() {
  return (<>
  <FloatingWhatsApp
        phoneNumber="+916387681558"
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
    <Hero1/>
    </div>
    {/* <div className="carousal hide-overflow">
      <Carasoul/>
      </div> */}
    <Abouttwo />
    {/* <Features/> */}

    <Features/>
    <Process/>
    <Testimonials/>
    {/* <Heads/> */}
    <Contact/>
    <AboutFooter/>
  </>);
}

export default Main;
