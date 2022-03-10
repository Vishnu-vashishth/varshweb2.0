import React from 'react'
import Aboutone from './Aboutone'
import Abouttwo from './Abouttwo'
import Aboutzero from './Aboutzero'
import Aboutfooter from './Aboutfooter'
import Aboutthree from './Aboutthree'
import {Heads} from '../OurHeads/Heads';
// import Aboutthree from '../Footer/'
const About = () => {
  return (
    <>
    <div className='Aboutus'>
      <Aboutzero/>
      <Aboutone/>
      <Aboutthree/>
      <Abouttwo/>
      <Heads/>
    </div>
    <Aboutfooter/>
    </>
  )
}

export default About