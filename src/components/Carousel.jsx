import React from 'react'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
import imageThirtyOne from '../images/imageThirtyOne.jpg'
import imageThirtyTwo from '../images/imageThirtyTwo.jpg'
import imageThirtyThree from '../images/imageThirtyThree.jpg'
import imageThirtyFour from '../images/imageThirtyFour.jpg'
import imageFour from '../images/imageFour.jpg'



const Carousel = () => {

  
  return (
     <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{height : '25vh'}}>
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <img src={imageThirtyOne} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageTwo} className = "d-block w-100"alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageThree} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageFour} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageThirtyTwo} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageThirtyThree} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
              <div className="carousel-item">
                 <img src={imageThirtyFour} className="d-block w-100" alt="aircraft" style={{height : '92.50vh'}}/>
              </div>
           </div>

           
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Previous</span>
              </button>
  
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Next</span>
              </button>

  
        </div>
     </div>
  )
}

export default Carousel
