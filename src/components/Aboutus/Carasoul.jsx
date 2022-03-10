import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import c4 from "../../images/c4.jpg";
import Aboutcard from './Aboutcard'
class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '320px',
      width: '300px',
      paddingTop: '80px',
      textAlign: 'center',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
            <Aboutcard Heading="Business Development Solutions" image={c1} text="hello"/>
            <Aboutcard Heading="Online Marketing" image={c2} text="hello"/>
            <Aboutcard Heading="WEB Development & CRM Software" image={c3} text="hello"/>
            <Aboutcard Heading="Digital Marketing & Informetic Center" image={c4} text="hello"/>

           
            
      </ReactCardCarousel>
    );
  }
}

export default MyCarousel;