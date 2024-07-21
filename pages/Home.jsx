import React, { useState } from "react";
import Projectcard from "../Components/Projectcard/Projectcard";
import Textcard from "../Components/Projectcard/Textcard";
import Navbar from "../Components/Navbar/Navbar";
import Linksprofile from "../Components/Links/Linksprofile";
import Footer from "../Components/Footer/Footer";
import Bottomlink from "../Components/Footer/Bottomlink";
import "animate.css/animate.min.css";
const Work = () => {
  return (
    <section className="outline-none grid h-[100vh] bg-primary w-[100vw]  ">
      <Navbar />
      <div className="h-[90vh] flex flex-col justify-center items-center gap-7 ">
        <p className="text-7xl font-normal text-center animate__animated animate__fadeInUp animate__slow   ">
          Let's craft exceptional digital experiences together.
        </p>
        <p className="text-2xl font-normal text-center text-grey animate__animated animate__fadeInUp animate__slow  ">
          Explore my design services, from user interface and experience to
          prototyping and testing.
        </p>
        <div className="flex gap-5 items-center">
          <h1 className="text-sm font-normal ">Expertise</h1>
          <Textcard text={"Web Design"} />
          <Textcard text={"Web Dev"} />
          <Textcard text={"App Dev"} />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-4">
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
      <Footer/>
      <Bottomlink/>
    </section>
 
  );
};

export default Work;
