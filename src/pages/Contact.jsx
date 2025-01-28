import {useEffect} from 'react'
import MotionBackground from '../components/MotionBackground'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"
import { FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Footer from '../components/Footer'





const Contact = () => {
    useEffect(() =>{
        aos.init({
          duration: 1000
        })
      },[])

  return (
    <div>
        <MotionBackground/>
         <div className ="container bg-primary text-white mt-5 p-5 ml-1 mr-1  rounded border" style={{
        width : '50%'}}>
        
      
      
      <form data-aos="zoom-out" >
           <h2 className='text-center'>Contact us</h2> <hr />
           <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos quod. Alias    omnis ut eos libero ex sed, modi totam dignissimos incidunt labore at commodi saepe explicabo facilis autem iusto.</p>
            <div className="mt-3 mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" placeholder="Name"/>
            </div>
            <div className="mt-3 mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" placeholder="Email"/>
            </div>

            <div className ="mt-3 mb-3">
                <label className="form-label">Comment</label>
                <textarea className="form-control" rows="2"></textarea>
            </div>

            <div className="mt-3 mb-3">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"/>Remember me
                </label>
                
            </div>
            
            <button className="btn btn-danger">Submit</button>
        </form>
        
        <br /><br /><br />
    </div>
    <div className='contact-overall-container mt-5' data-aos="fade-up">
      <div className='d-flex'>
        <div className='white d-flex justify-content-center align-items-center text-center' style={{background : '#dee2e6', width : '50%'}}>
          <div>
            <ul>
              <li>
              <p><FaWhatsapp style={{ fontSize: '30px', color: 'green' }} />   Whatsapp : +2348102656596</p>
              </li>
 
              <li>
             <p><SiGmail style={{ fontSize: '30px', color: '#D50029',borderRight: '20vh' }} /> Gmail : infogmail@gmail.com</p>
            </li>

            <li>
                <p><MdEmail style={{ fontSize: '30px', color: '#000' }} />Add:28,Ogunsola street,Ogba</p>
            </li>
        
          </ul> <hr />
          </div> 
        </div>
        <div className=' coloured d-flex justify-content-center align-items-center text-white' style={{background : '#052c65'}}>
          <div>
            <h1>Let's Talk</h1>
            <p>Share your excitment with us</p>
            <a href="mailto:info@yummygum.com" className='text-decoration-none btn btn-danger text-white'>info@yummygum.com</a> <br /> <br />
            <hr />
          </div>

        </div>
      </div>
      
    </div>

    <Footer/>
    </div>
  )
}

export default Contact
