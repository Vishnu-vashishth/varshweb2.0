import React from 'react';
import Lottie from 'react-lottie';
import lottie1 from '../../lotties/lottie2.json';
import lottie2 from '../../lotties/lottie1.json';
import lottie3 from '../../lotties/lottie3.json';
import { NavLink } from 'react-router-dom';
import "./Opportunity.css"; 

function Opportunity() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie1,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: lottie2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: lottie3,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (<>
  <NavLink exact="true" to="/opport" id='underline'>
    <div className="opportunities">
    <div>
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    <div>
    <Lottie 
	    options={defaultOptions1}
        height={400}
        width={400}
      />
    </div>
    <div>
    <Lottie 
	    options={defaultOptions2}
        height={400}
        width={400}
      />
    </div>
    </div>
    <div className='h'>
        <h1>Sorry!! Our Hiring is just close for now.</h1>
    </div>
    </NavLink>
  </>);
}

export default Opportunity;
