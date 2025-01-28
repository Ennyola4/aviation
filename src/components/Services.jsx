import {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import imageOne from '../images/imageOne.jpg'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'



const Card = () => {
    useEffect(() =>{
        aos.init({
          duration: 1000
        })
      },[])
  return (
   <div>
     <div className='card-container mt-5'>
      <div className='card 'data-aos="zoom-out">
      <img src={imageFive} className='card-img-top'  alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Bridal Makeup</h3>
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
               
            </div>
           </div>
        </div>
      </div>

      <div className='card' data-aos="zoom-out">
      <img src={imageOne} className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Event Makeup</h3>
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
                
            </div>
           </div>
        </div>
      </div>

      <div className='card'  data-aos="zoom-out">
      <img src='https://cdn.pixabay.com/photo/2015/05/31/11/47/makeup-791303_640.jpg' className='card-img-top' alt="about-us"/>
        <div className='card-body'>
           <div className='card-title'>
           <h3>Photoshoot Makeup</h3>
            <div className='card-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis facilis iure natus nam sint eos quam at exercitationem dolorum illum placeat aperiam fugit quidem deserunt, asperiores veniam molestiae, quos labore.</p>
                <a href="" className='btn btn-danger'> View more...</a>
            </div>
            
           </div>
           
        </div>
        
      </div>

      
    </div>
    
   </div>
  )
}

export default Card
