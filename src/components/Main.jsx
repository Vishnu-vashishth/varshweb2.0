import React from 'react';
import Navbar from './Navbar/Navbar'
import Hero1 from './HeroSection/Hero1'
import Testimonials from './Testimonials/Testimonial'
import Features from './Features/Feature'
import Contact from './Contactus/Contact'
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../images/managing director.jpg'
import Abouttwo from './Aboutus/Abouttwo'
import AboutFooter from './Aboutus/Aboutfooter';
import Process from './Services/Process/Process';
// import Icons from './floatingicons/Icons'
import "../App.css";
function Main() {
  return (<>
  <FloatingWhatsApp
        phoneNumber="+919264970728"
        accountName="Varsh Services"
        allowClickAway
        notification
        notificationDelay={60000}
        notificationSound
        avatar ={WhatsappImg} 
        className ="whatsapp"
        statusMessage = ""
        chatMessage = "Welcome To Varsh"
      />
      {/* <Icons/> */}
      <div className='main'>
   <Navbar/>
    <Hero1/>
    </div>
    {/* <Abouttwo /> */}

    <Features/>
    <div class="timeline">
  <div class="circle"></div>
  <ul>
    <li><em>Our service</em> <strong>Web Development & CRM Software</strong></li>
    <li><em>Our socialization</em> <strong>Digital Marketing</strong></li>
    <li><em>Our solution</em> <strong>Business Development support</strong></li>
    <li><em>Forever</em> <strong>Launch and Support</strong></li>
  </ul>
  <div class="circle"></div>
</div>
    <Process/>
    <Testimonials/>
    <Contact/>
    <AboutFooter/>
  </>);
}

export default Main;
