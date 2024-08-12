import {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'



const Services = (props) => {
  

  useEffect(() =>{
    aos.init({
      duration: 1000
    })
  },[])
  
  return (
    <div className='container my-5'>
        <h3 className='text-center my-4'>{props.title}</h3>
        <div className='d-flex'>
        <div className='card mx-2'data-aos="fade-up">
        <img src={props.imageFour} className='card-img-top' alt="about-aircraft" style={{height : '30vh'}}/>
        <div className='card-body'>
            <h5 className='card-title'>{props.titleOne}</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
      </div> 
      <div className='card mx-2' data-aos="fade-up">
        <img src={props.imageFive} className='card-img-top' alt="about-aircraft" style={{height : '30vh'}}/>
        <div className='card-body'>
            <h5 className='card-title'>{props.titleTwo}</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
      </div> 
      <div className='card mx-2' data-aos="fade-up">
        <img src={props.imageSix} className='card-img-top' alt="about-aircraft" style={{height : '30vh'}}/>
        <div className='card-body'>
            <h5 className='card-title'>{props.titleThree}</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
        </div>
      </div>
        </div>
    </div>
  )
}

export default Services
