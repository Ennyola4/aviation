import React from 'react'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"



const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='mt-5 p-5  text-light' style={{background : '#052c65'}}>
           <div className='d-flex justify-content-around'>
             <div>
                  <p>
                    Appland is completly creative, lightweight, clean app landing page
                  </p>
                  <p>
                    Made with ByDesign
                  </p>
                 <div className='d-flex'>
                    <div className='me-4 btn btn-primary' style={{borderRadius : '100%'}}><FaFacebook /></div>
                    <a href="https://x.com/home" className='me-4 btn btn-dark' style={{borderRadius : '100%'}}><FaSquareXTwitter /></a>
                    <div className='me-4 btn btn-dark' style={{borderRadius : '100%'}}><i className="bi bi-tiktok"></i></div>
                    <div className='me-4 btn btn-dark' style={{color : '#ffe69c',borderRadius : '100%'}}><LuInstagram /></div>
                 </div>
             </div>

             <div>
                <ul>
                    <li><h4 href ="#">About</h4></li> <hr />
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Coperate Sales</a></li>
                    <li><a href="#">Terms &amp; Policy</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
             </div>

             <div>
                <ul>
                    <li><h4 href="#">Support</h4></li> <hr />
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Help &amp; Support</a></li>

                </ul>
             </div>

             <div>
                <ul>
                    <li><h4 href="#">Center</h4></li> <hr />
                    <li><a href="#">Email us</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Help Center</a></li> <br /> 
                    <input type="text" style={{height : '4vh'}} /> <br /> <br />
                    <a href="#" className='btn btn-outline-light' style={{height : '5vh'}}>Search</a>
                </ul>
              </div>
         
            </div>
            <div className='text-center'>
               <h6>Created And Designed by Zues✨</h6> <hr />
            </div>
        </div>
    </div>
  )
}

export default Footer
