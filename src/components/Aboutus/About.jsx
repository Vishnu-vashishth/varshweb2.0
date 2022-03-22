import React from 'react'
import Aboutone from './Aboutone'
import Abouttwo from './Abouttwo'
import Aboutzero from './Aboutzero'
import Aboutfooter from './Aboutfooter'
import Aboutthree from './Aboutthree'
import Carasoul from './Carasoul'
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../../images/project manager.jpg'
import {Heads} from '../OurHeads/Heads';
// import Aboutthree from '../Footer/'
const About = () => {
  return (
    <>
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
    <div className='Aboutus'>
      <Aboutzero/>
      <Aboutone/>
      <Aboutthree/>
      <div className="carousal">
      <Carasoul/>
      </div>
      <Abouttwo/>
      <Heads/>
    </div>
    <Aboutfooter/>
    </>
  )
}

export default About