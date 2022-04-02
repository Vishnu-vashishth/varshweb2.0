import React from 'react';
import "./AboutReal.css";
import AnimationLottie from "../../AnimationLottie";
import Lottie13 from '../../lotties/lottie13.json';
import Lottie14 from '../../lotties/lottie10.json';
import Lottie15 from '../../lotties/lottie15.json';
function AboutReal() {
  return (<>
<div className="pset">
  <div className="container">
    <div className="row listar-feature-items">

      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
        <p></p>
    
          <div className="listar-feature-item-inner">

            <div className="listar-feature-right-border"></div>

            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                  <div style={{padding:"15px"}}>
                    <AnimationLottie name={Lottie13} height={120} width={120}/>
                  </div>
                </div>
              <div className="listar-feature-content-wrapper" style={{paddingTop: "0px"}}>

                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span style={{fontWeight:"500"}}><span style={{fontWeight:"500"}}>01</span>
                    Businesses </span>
                </div>

                <div className="listar-feature-item-excerpt" style={{fontSize:"15px",fontWeight:"500"}}>
                We employ the best business development processes to provide high-quality, cost-effective, and customized business solutions for several ranges of businesses. Every methodology that we adopt is based upon our extensive research and expertise to successfully deliver robust, scalable, as well as secured business solutions.

                   </div>

              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
        <p></p>
          <div className="listar-feature-item-inner">

            <div className="listar-feature-right-border"></div>

            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                  <div style={{padding:"15px"}}>
                  <AnimationLottie name={Lottie14} height={120} width={120}/>
                  </div>
              </div>

              <div className="listar-feature-content-wrapper" style={{paddingTop: "0px"}}>

                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span style={{fontWeight:"500"}}><span style={{fontWeight:"500"}}>02</span>
                    Customers </span>
                </div>

                <div className="listar-feature-item-excerpt" style={{fontSize:"15px",fontWeight:"500"}}>
                We providing our customer a unique and seamless experience while working with your organization. Acquire an entire perspective of customer interactions, keep track of your sales, organize your business operations, facilitate collaborations, and much more.

                  </div>

              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
        <p></p>
          <div className="listar-feature-item-inner">

            <div className="listar-feature-right-border"></div>

            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                  <div style={{padding:"15px"}}>
                  <AnimationLottie name={Lottie15} height={100} width={120}/>
                  </div>
              </div>

              <div className="listar-feature-content-wrapper" style={{paddingTop:"0px"}}>

                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span style={{fontWeight:"500"}}><span style={{fontWeight:"500"}}>03</span>
                    Feedback </span>
                </div>

                <div className="listar-feature-item-excerpt" style={{fontSize:"15px",fontWeight:"500"}}>
                  Visitors discuss listings to share experiences, so businesses get reputation consolidated. We are trying very hard to implement those changes through out feedback of people just like you. Give us your feedback that we can implement more amazing ideas to our service or product.</div>

              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>
    </div>
  </div>
</div>
  </>);
}

export default AboutReal;