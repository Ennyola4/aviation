import React from 'react'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='mt-5 p-5 bg-black text-light'>
        <div className='d-flex justify-content-around'>
            <div>
                <p>
                    Appland is completly creative, lightweight, clean app landing page
                </p>
                <p>
                    Made with ByDesign
                </p>
                <div className='d-flex'>
                <div className='me-5'><FaFacebook /></div>
                <div className='me-5'><FaSquareXTwitter /></div>
                <div className='me-5'><i class="bi bi-skype"></i></div>
                <div className='me-5'><i class="bi bi-tiktok"></i></div>
                </div>
            </div>

            <div>
                <ul>
                    <li><h4 href ="#">About</h4></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Coperate Sales</a></li>
                    <li><a href="#">Terms &amp; Policy</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h4 href="#">Support</h4></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Help &amp; Support</a></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li><h4 href="#">Center</h4></li>
                    <li><a href="#">Email us</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer
