import React from 'react'
import 'animate.css';
import Animation from '../../Animation/Animation';
const Footer = () => {
  return (
   
    <div className="flex flex-col items-center justify-center h-[35vw] w-[100vw] dark:bg-black dark:text-white">
       <Animation>
        <p className="text-4xl font-normal text-center animate__animated animate__fadeInUp animate__slow ">Let's work together.</p>
        </Animation>
        <Animation>
        <p className="text-4xl font-normal text-grey text-center  animate__animated animate__fadeInUp animate__slow">Get in touch.</p>
        </Animation>
      </div>
    
  )
}

export default Footer
