import React from 'react'
import Opport from "./components/opportunity/Opportunity";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contactus/Contact";
import Navbar from "./components/Navbar/Navbar";
import About from './components/Aboutus/About';
import Bus from './components/Services/Business';
import   WebProcess from './components/Services/webProcess/WebProcess';
import Process from './components/Services/Process/Process';
import Webcrm from './components/Services/Web&Crm';
import  AboutFooter from './components/Aboutus/Aboutfooter';
const App = () => {
  return (
    <>
    
                       <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/contact' element={<><Navbar/> <Contact/></>} />
                        <Route path='/careers' element={<><Navbar/><Opport/></>} />
                        <Route path='/about' element={<><Navbar/><About/></>} />
                        <Route path='/bus' element={<><Navbar/><Bus/><Process/><AboutFooter/></>} />
                        <Route path='/web' element={<><Navbar/><Webcrm/><WebProcess/><AboutFooter/></>} />
                     </Routes>
    </>
  )
}

export default App