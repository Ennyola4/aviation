import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
// import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
// import imageSix from '../images/imageSix.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageThree from '../images/imageThree.jpg'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'








const Home = () => {
  return (
    <div>
      <Carousel/>
      {/* <Services titleOne = "Bridal Makeup" titleTwo = "Event Makeup" titleThree = "Makeup Lessons"  imageFour = {imageFour} imageFive = {imageFive} imageSix = {imageSix}/> */}
      <Services titleOne = "Special Effects Makeup" titleTwo = "Airbrush Makeup"   titleThree = "Skincare Consultations" imageFour = {imageSeven} imageFive = {imageFive} imageSix = {imageThree}/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
