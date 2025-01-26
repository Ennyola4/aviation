import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Error from './pages/Error'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";







const App = () => {
  
  return (
    <div> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App