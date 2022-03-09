import React from 'react'
import Opport from "./components/opportunity/Opportunity";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contactus/Contact";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
    
                       <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/contact' element={<><Navbar/> <Contact/></>} />
                        <Route path='/careers' element={<><Navbar/><Opport/></>} />
                     </Routes>
    </>
  )
}

export default App