import {useEffect} from 'react'
import { FaFacebook } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Footer from '../components/Footer'


const Card = () => {
    useEffect(() =>{
        aos.init({
          duration: 1000
        })
      },[])
  return (
   <div>
     <div className='card-container '>
      <div className='card mt-5' data-aos="zoom-out">
      <img src='https://cdn.pixabay.com/photo/2021/10/07/07/41/woman-6687692_640.jpg' className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Bridal Makeup</h3> <hr />
            <div className='card-text'>
                <p>Bridal makeup services are tailored specifically for brides to ensure they look stunning on their special day. This includes an initial trial session to discuss the bride's vision, preferences, and skin type, allowing for adjustments and experimentation with different looks. On the wedding day, experienced makeup artists provide professional application, using high-quality products to ensure longevity and a flawless finish, even under varying conditions. Additionally, touch-up services can be offered throughout the day to maintain the bride's perfect appearance during the ceremony and celebrations.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card mt-5' data-aos="zoom-out">
      <img src='https://cdn.pixabay.com/photo/2020/02/18/11/02/make-up-4859135_640.jpg' className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Event Makeup</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card mt-5'  data-aos="zoom-out">
      <img src='https://cdn.pixabay.com/photo/2015/05/31/11/47/makeup-791303_640.jpg' className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Photoshoot Makeup</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card'  data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2022/09/19/02/24/make-up-7464360_640.jpg' className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Makeup lessons</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card'  data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2020/03/08/14/53/makeup-4912678_640.jpg' className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Skin Care and Prep</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card' data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2020/05/31/07/45/beauty-5241620_1280.jpg' className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Special Effects Makeup</h3> <hr />
            <div className='card-text'>
                <p>Special effects makeup is a fascinating art form that transforms performers into unique characters through techniques like prosthetics, face painting, and body art. This service is essential for theatrical performances, films, and themed events, where realism and creativity play key roles. Makeup artists use high-quality materials to create intricate details, such as aging effects, wounds, or fantastical creatures, enhancing the storytelling aspect of a production. </p>
            </div>
           </div>
        </div>
      </div>

      <div className='card' data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2024/07/20/06/18/eyebrow-8907650_640.jpg' className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Lash Extensions and Application</h3> <hr />
            <div className='card-text'>
                <p>Lash extensions and application are popular beauty services designed to enhance the natural lashes, providing length, volume, and a dramatic effect that can elevate any look. The process involves carefully adhering individual synthetic or mink lashes to each natural lash using a specialized, semi-permanent adhesive. This meticulous application not only adds fullness but also creates a beautiful, fluttery appearance that can last for weeks with proper care.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card' data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2024/01/07/00/36/woman-8492233_640.jpg' className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Airbrush Makeup</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
            </div>
           </div>
        </div>
      </div>

      <div className='card' data-aos="fade-up">
      <img src='https://cdn.pixabay.com/photo/2017/10/29/23/40/estetica-2901113_640.jpg' className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Eyebrow Shaping and Tinting</h3> <hr />
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
                <a href="#" className='btn btn-outline-dark'> UP</a>
            </div>
           </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <Footer/>
   </div>
  )
}

export default Card
