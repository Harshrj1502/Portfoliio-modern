import React, { useState } from "react";
import Projectcard from "../Components/Projectcard/Projectcard";
import Textcard from "../Components/Projectcard/Textcard";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Bottomlink from "../Components/Footer/Bottomlink";
import "animate.css/animate.min.css";
import FadeInUp from "../Components/Fadeinup";
const Work = () => {
  return (
    <section className="outline-none h-[100vh] bg-primary w-[100vw]">
      <Navbar />
      <FadeInUp>
        <div className="h-[90vh] flex flex-col justify-center items-center gap-7 w-[100vw]  ">
          <p className="text-7xl font-normal text-center max-sm:text-5xl  max-lg:text-6xl ">
            Let's craft exceptional digital experiences together.
          </p>
          <p className="text-2xl font-normal text-center text-grey max-lg:text-xl max-sm:text-lg  ">
            Explore my design services, from user interface and experience to
            prototyping and testing.
          </p>
          <div className="flex gap-5 items-center ">
            <h1 className="text-sm font-normal ">Expertise</h1>
            <Textcard text={"Web Design"} />
            <Textcard text={"Web Dev"} />
            <Textcard text={"App Dev"} />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1  max-lg:grid-cols-1 max-lg-gap-10 max-xl:grid-cols-1">
            <Projectcard />
            <Projectcard />
            <Projectcard />
            <Projectcard />
            <Projectcard />
            <Projectcard />
          </div>
        </div>
      </FadeInUp>
      <Footer />
      <Bottomlink />
    </section>
  );
};

export default Work;
