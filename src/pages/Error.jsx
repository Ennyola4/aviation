import React from 'react'
import { CgDanger } from "react-icons/cg";
// import MotionBackground from '../components/MotionBackground';
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"
import Footer from '../components/Footer';


const Error = () => {
  return (
    
   <div>
     <div className='d-flex justify-content-center align-items-center text-center  text-dark' style={{height: "120vh" , backgroundColor : '#dee2e6', }}>
      
      <div className='text-white p-5' style={{background : '#052c65' ,borderRadius : '50px'}}>
        <h1><CgDanger /></h1>
        <h1><strong>404</strong></h1>
        <h3>We searched everywhere</h3>
        <h6>But could not find the page you requested</h6> <br /> <br /> <br />
        <a href="/" className='btn btn-danger' > HOMEPAGE</a>
      </div>
      

      
      
    </div>
      <Footer/>
   </div>
    
  )
}

export default Error
