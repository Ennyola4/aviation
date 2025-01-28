import {useEffect} from 'react'
import imageTen from '../images/imageTen.jpg'
import '../css/components/about.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/components/footer.css'
import Footer from '../components/Footer'







const About = () => {

  useEffect(() =>{
    aos.init({
      duration: 1000
    })
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,         // Number of slides to show at once
    slidesToScroll: 1,       // Number of slides to scroll at once
    centerMode: true,         // Enable center mode
    centerPadding: '40px',    // Space around the center slide
    responsive: [
      {
        breakpoint: 768,      // Adjust for smaller screens
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        },
        
      },
    ],
  };

  const images = [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690_640.jpg' },
    { id: 2, src: 'https://cdn.pixabay.com/photo/2021/10/07/07/41/woman-6687692_640.jpg' },
    { id: 3, src: 'https://cdn.pixabay.com/photo/2024/07/28/10/37/woman-8927114_640.jpg' },
    { id: 4, src: 'https://cdn.pixabay.com/photo/2024/09/22/05/16/woman-9065236_640.jpg' },
    { id: 5, src: 'https://cdn.pixabay.com/photo/2014/08/27/15/15/model-429242_640.jpg' },
    { id: 6, src: 'https://cdn.pixabay.com/photo/2021/01/17/14/35/woman-5925344_640.jpg' },
    { id: 7, src: 'https://cdn.pixabay.com/photo/2024/08/17/18/03/ai-generated-8976420_640.png' },
    { id: 8, src: 'https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690_640.jpg' },
    { id: 9, src: 'https://cdn.pixabay.com/photo/2023/10/06/12/35/woman-8298204_640.jpg' },
    { id: 10, src: 'https://cdn.pixabay.com/photo/2020/06/08/09/01/hair-5273705_640.jpg' },

    

  ];
  
  const sliderContainerStyle = {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%', // Keep image width full within its slide
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
   
    }



  const dotStyle = {
    color: '#eee', // Dot color
    opacity: 0.5, // Dot transparency
  };

  return (
    <div className='about-overall-container'> 
      <h2 className='text-center pt-5' >About us</h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-3'>
            <img src={imageTen} alt="about-us" data-aos="zoom-out" style={{height : '38rem'}}/>
        </div>
        <div className='about-text-container m-2' data-aos="fade-up"> <br /> 
            
            <div  style={{textAlign : 'center'}}>
              <h3>Welcome to Glamour & Glow Makeup Studio!</h3> <hr />
              
              At Glamour & Glow, we believe that beauty is an art, and every face is a canvas waiting to be transformed. Whether you’re prepping for a special event, a photoshoot, or simply want to indulge in some self-care, our talented makeup artists are here to bring your vision to life
              <br /> <br />

             <h3> Why Choose Glamour & Glow?</h3> <hr />
              <p>✨ Personalized Experience: Every client is unique, and so are your beauty needs. We take the time to understand your style, preferences, and the look you want to achieve, ensuring that your makeup reflects your personality.</p>

              <p>✨ Expert Artists:Our skilled team is trained in the latest trends and techniques, from classic elegance to bold, modern looks. With a keen eye for detail and a passion for perfection, we ensure you look flawless from every angle.</p>

              <p>✨ High-Quality Products:We use only the best makeup products that are gentle on your skin and deliver stunning results. Our carefully curated selection includes both luxury brands and eco-friendly options to suit every preference.</p>

              <p>
              4. Relaxing Atmosphere: Step into our studio and leave your worries at the door. Our serene environment is designed to help you relax and enjoy the pampering experience, making it a perfect retreat from your busy life.
              </p>

        
          
              
            </div>
            
        </div>

      </div> 

      <div >
          <div className='d-flex text-center justify-content-center align-items-center'data-aos="fade-up" style={{width : '100%'}}>
            <p>
            🎉 Book Your Appointment Today!
              Join the countless satisfied clients who have experienced the magic of Glamour & Glow. Whether you’re a makeup novice or a beauty aficionado, we’re here to make you shine.
              Get ready to embrace your beauty—because at Glamour & Glow, we don’t just do makeup; we create masterpieces!
              Contact us today to schedule your consultation! Beauty begins with healthy skin. Our skincare consultations help you understand your skin type and the best products to use. We will guide you through a personalized skincare regimen to enhance your natural glow, ensuring that your makeup application is not just beautiful but also nourishing for your skin.Feel free to adjust the descriptions to fit your studio's style Beauty begins with healthy skin. Our skincare consultations help you understand your skin type and the best products to use. We will guide you through a personalized skincare regimen to enhance your natural glow, ensuring that your makeup application is not just beautiful but also nourishing for your skin.Feel free to adjust the descriptions to fit your studio's style


            </p>
          </div>
        </div> <br />
      <div data-aos="fade-up">
      <Slider {...settings} >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={`Slide ${image.id}`} style={{ width: '100%' }}/>
          </div>
        ))}
      </Slider>
      
      </div>
  

      
      <Footer/>
    </div>
  )
}

export default About
