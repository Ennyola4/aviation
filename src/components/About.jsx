import {useEffect} from 'react'
import imageTen from '../images/imageTen.jpg'
import '../css/components/about.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'




const About = () => {

  useEffect(() =>{
    aos.init({
      duration: 1000
    })
  },[])

  return (
    <div className='about-overall-container'> 
    
          <h2 className='text-center pt-5' >About us</h2> 
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-3'>
            <img src={imageTen} alt="about-us" data-aos="zoom-in" className='' style={{height : '33rem'}}/>
        </div>
        <div className='about-text-container m-2' style={{textAlign : 'center'}}  data-aos="fade-up"> <br /><br />
           <div>
              <h3>Welcome to Glamour & Glow Makeup Studio!</h3>
              
              At Glamour & Glow, we believe that beauty is an art, and every face is a canvas waiting to be transformed. Whether you’re prepping for a special event, a photoshoot, or simply want to indulge in some self-care, our talented makeup artists are here to bring your vision to life
              <br /> <br />

              <h3> Why Choose Glamour & Glow?</h3> <hr />
              <p>✨ Personalized Experience: Every client is unique, and so are your beauty needs. We take the time to understand your style, preferences, and the look you want to achieve, ensuring that your makeup reflects your personality.</p>

              <p>✨ Expert Artists: Our skilled team is trained in the latest trends and techniques, from classic elegance to bold, modern looks. With a keen eye for detail and a passion for perfection, we ensure you look flawless from every angle.</p>
              <a href="/About" className='btn btn-outline-light'>View more...</a>
          
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
