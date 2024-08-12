import React from 'react'

const Contact = () => {
  return (
    <div className='contact-overall-container'>
      <h2 className='text-center'>Contact Us</h2>
      <div className='d-flex'>
        <div className='white d-flex justify-content-center align-items-center text-center'>
          <div>
          <h1>We Are Here</h1>
          <p>our door is always open for a cup of coffee</p>
          </div>
        </div>
        <div className='bg-info coloured d-flex justify-content-center align-items-center text-white'>
          <div>
            <h1>Let's Talk</h1>
            <p>Share your excitment with us</p>
            <a href="mailto:info@yummygum.com" className='text-decoration-none text-white'>info@yummygum.com</a>
            <hr />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
