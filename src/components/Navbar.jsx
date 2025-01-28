import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"


const Navbar = () => {
  return (
   <div>
      <nav className="navbar navbar-expand-lg  navbar-dark navbar-dark" style={{background : '#052c65'}}>
        <div className="container">
          <Link to="/" className="navbar-brand"> <h5> Glamour and Glow Makeup</h5></Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav"> 
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item" >
                <Link to="/" className="nav-link" aria-current="page">Home</Link >
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About us</Link >
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Our services</Link >
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">Contact us</Link >
              </li>
            </ul> <br />
            <div className='d-flex justify-content-center'>
                              <a href = "#"className='me-2  btn btn-primary'style={{borderRadius : '100%'}} ><FaFacebook /></a>
                              <a href="https://x.com/home" className='me-2 btn btn-dark' style={{borderRadius : '100%'}} ><FaSquareXTwitter /></a>
                              <div className='me-2 btn btn-dark' style={{borderRadius : '100%'}} ><i className="bi bi-tiktok" ></i></div>
                              <div className='me-2 btn btn-dark' style={{borderRadius : '100%'}} ><LuInstagram /></div>
              </div>
          </div>
           
        </div>
       </nav>
    </div>
  )
}

export default Navbar
