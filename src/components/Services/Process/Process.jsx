import React from 'react'
import './Process.css'
const Process = () => {
  return (
    <>
    <div className="body">
    <div className="heading"><h1>Our process</h1></div>
      <main>
        <ul className="infoGraphic">
          <li>
            <div className="numberWrap">
              <div className="number fontColor1">1</div>
              <div className="coverWrap">
                <div className="numberCover" />
              </div>
            </div>
            <div className="content">
              <div className="icon iconCodepen" />
              <h2>Interpretation</h2>
              <p>
                We first understand our client’s problems and their visions and missions in-depth to efficiently come up with an effective solution.
              </p>
            </div>
          </li>
          <li>
            <div className="numberWrap">
              <div className="number fontColor2">2</div>
              <div className="coverWrap">
                <div className="numberCover" />
              </div>
            </div>
            <div className="content">
              <div className="icon iconSocial" />
              <h2>Creation</h2>
              <p>After heavy research and analysis, we come up with effective solutions that fulfill your business needs and expectations.</p>
            </div>
          </li>
          <li>
            <div className="numberWrap">
              <div className="number  fontColor3">3</div>
              <div className="coverWrap">
                <div className="numberCover" />
              </div>
            </div>
            <div className="content">
              <div className="icon iconAirplane" />
              <h2>Optimization</h2>
              <p>We make continuous improvements to the obtained solution by identifying and implementing new methods with the aim of making it more efficient and cost-effective.</p>
            </div>
          </li>
          <li>
            <div className="numberWrap">
              <div className="number  fontColor4">4</div>
              <div className="coverWrap">
                <div className="numberCover" />
              </div>
            </div>
            <div className="content">
              <div className="icon iconMap" />
              <h2>Implementation</h2>
              <p>After processing the solution it's time to implement it and obtain real-time analysis of the same. We contribute to make you familiar with the process and provide analysis report.</p>
            </div>
          </li>
          
          <li>
            <div className="numberWrap">
              <div className="number  fontColor6">5</div>
              <div className="coverWrap">
                <div className="numberCover" />
              </div>
            </div>
            <div className="content">
              <div className="icon iconPeace" />
              <h2>Succeed</h2>
              <p>Even after the implementation, we are here to help you with the maintenance part whenever you are in need.At last we succeed with you</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
   </>
  )
}

export default Process