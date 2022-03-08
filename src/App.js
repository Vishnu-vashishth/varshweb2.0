import React from 'react'
import Opport from "./components/opportunity/Opportunity";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contactus/Contact";
const App = () => {
  return (
    <>
    
    <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/careers' element={<Opport/>} />
                    </Routes>
    </>
  )
}

export default App