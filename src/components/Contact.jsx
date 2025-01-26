import React from 'react'
import MotionBackground from './MotionBackground'



const Contact = () => {
  return (
    <div className='contact-overall-container' style={{height:'80vh'}}> <br />
    <MotionBackground/>
    <h2 className='text-center text-white' >Contact us</h2> <br /> <br /><br /><br /><br />
      <div className='d-flex align-item-center justify-content-center'>
        <div className='white d-flex justify-content-center text-dark align-items-center text-center'style={{background : '#dee2e6', width : '50%'}}>
          <div>
          <h1>We Are Here</h1>
          <p>our door is always open for a cup of coffee</p>
          <hr />
          </div> 
        </div>
        <div className=' coloured d-flex justify-content-center align-items-center text-white' style={{background : '#052c65'}}>
          <div>
            <h1>Let's Talk</h1>
            <p>Share your excitment with us</p>
            <a href="mailto:info@yummygum.com" className='text-decoration-none text-white'>info@yummygum.com</a> <br /> <br />
            <a href="/Contact" className='btn btn-outline-light'>View more..</a>
            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Contact
