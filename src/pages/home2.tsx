
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquare } from '@fortawesome/free-solid-svg-icons'
import Homepag from '../Assets/Assets/home1.png'
import './home.css'
const Home2=()=>{
    return(
  <header>
  <div className="container">
  <div className="row">
  <div className="col-md-6 col-lg-6  text-home">
   <h5> We Provide All Health Care Solution </h5>
   <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa velit</h2>
   <button className="btn"><a href="#">Read More</a></button>
   <span className="">+</span>
  </div>
  <div className="col-md-6 col-lg-6">
    <div className="header-box">
    <img src={Homepag}/>
    <FontAwesomeIcon icon={faSquare} />
    </div>
  </div>
  </div>
  </div>
  </header>

    )
}


export default Home2;