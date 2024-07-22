import React from "react";
import Links from "../Components/Links/Linksprofile";
import Navbar from "../Components/Navbar/Navbar";
import "animate.css/animate.min.css";
import FadeInUp from "../Components/Fadeinup";
const Contact = () => {
  return (
    <section id="contact" className="bg-primary w-screen h-screen outline-none ">
      <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen "> 
        <FadeInUp>        
        <p className="text-7xl font-normal text-center max-sm:text-5xl max-lg:text-6xl">
        Let's work together.
        </p>
        <p className="text-7xl font-normal text-grey text-center max-sm:text-5xl max-lg:text-6xl  ">
        Get in touch.
        </p>
        </FadeInUp>    
        </div>
        <div className="flex justify-between items-center py-10 px-5 fixed bottom-0 w-[100vw]">
            <h1 className="text-sm">©Harsh 2024</h1>
            <Links/>
        </div>
    </section>
  );
};

export default Contact;
