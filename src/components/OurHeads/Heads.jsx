import './Heads.css'
import Card from './Card';
import Img1 from "../../images/project manager.jpg";
import Img2 from "../../images/founder.JPG";
import Img3 from "../../images/managing director.jpeg";
import Img4 from "../../images/invester.jpg";

export const Heads = () => (
    <>
    <div className="heading">
        <h1>Our Pillars</h1>
    </div>
    <div className='Heads'>
    <Card name="Kuldeep Singh" designation=" Chief Operating Officer" image={Img1}/>
    <Card name="Adarsh Geeta Gupta" designation="Founder" image={Img2}/>
    <Card name="Vartika Ranjan" designation="Co-founder & MD" image={Img3}/>
    <Card name="Namish Chauhan" designation="Board Director & Investor" image={Img4} className="investor"/>
    </div>
    </>
  )
  