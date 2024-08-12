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
      <h2 className='text-center pt-5'>About Us</h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-3'>
            <img src={imageTen} alt="about-us" data-aos="zoom-out-right"/>
        </div>
        <div className='about-text-container m-2' data-aos="zoom-out-left">
            <h4 className='text-center'>What we are about</h4> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione a magni animi, neque voluptatibus dignissimos illo at enim molestias consequuntur vel culpa alias architecto adipisci dolor molestiae assumenda vero fuga.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus enim corporis doloribus. Exercitationem ducimus magni nemo earum laudantium quae excepturi odio voluptatem quas, in cupiditate, temporibus vero facere tempore.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus enim corporis doloribus. Exercitationem ducimus magni nemo earum laudantium quae excepturi odio voluptatem quas, in cupiditate, temporibus vero facere tempore.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus enim corporis doloribus. Exercitationem ducimus magni nemo earum laudantium quae excepturi odio voluptatem quas, in cupiditate, temporibus vero facere tempore.</p>
        </div>
      </div>
    </div>
  )
}

export default About
