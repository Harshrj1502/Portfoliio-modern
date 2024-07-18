import React from 'react'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Footer from '../pages/Footer/Footer'
import Getintouch from '../pages/Getintouch/Getintouch'
import Skills from '../pages/Skills/Skills'
import Work from '../pages/Work/Work'
const App = () => {
  return (
    <div className=''>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Work/>
      <Getintouch/>
      <Footer/>     
    </div>
  )
}

export default App
