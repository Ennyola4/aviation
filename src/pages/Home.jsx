import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageEight from '../images/imageEight.jpg'
import imageNine from '../images/imageNine.jpg'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'






const Home = () => {
  return (
    <div>
      <Carousel/>
      <Services titleOne = "Ticketing" titleTwo = "Hotel Reservation" titleThree = "Flight booking" imageFour = {imageFour} imageFive = {imageFive} imageSix = {imageSix} title="Our Services"/>
      <Services titleOne = "Passport" titleTwo = "Branches" titleThree = "Review" imageFour = {imageSeven} imageFive = {imageEight} imageSix = {imageNine}/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
