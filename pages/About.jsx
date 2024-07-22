import { React, useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Textcard from "../Components/Projectcard/Textcard";
import Projectcardabout from "../Components/Projectcard/Projectcardabout";
import Skills from "../Components/Skills/Skills";
import Bottomlink from "../Components/Footer/Bottomlink";
import Footer from "../Components/Footer/Footer";
import "animate.css/animate.min.css";
import FadeInUp from "../Components/Fadeinup";
const About = () => {
  return (
    <section className="bg-primary outline-none w-[100vw] ">
      <Navbar />
      <FadeInUp>
        <div className=" flex flex-col gap-5 text-center  ">
          <div className="flex flex-col gap-5  ">
            <p className="text-7xl font-bold h-[80vh] justify-center items-center flex  max-lg:text-6xl max-sm:text-5xl  ">
              Hey 👋🏼 I'm Harsh
            </p>
            <h1 className="font-light text-xl  ">Web and App Developer</h1>
            <p className="text-base font-light  ">
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and let's create something extraordinary together.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 place-items-center max-sm:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-1">
            <Projectcardabout    />
          </div>
          <div className="py-40 flex flex-col gap-5 ">
            <div className="flex justify-center items-center">
              <Textcard text={"About"} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-normal text-cente w-[50vw] mx-auto max-sm:text-2xl max-lg:text-3xl">
                My expertise includes building responsive UIs, managing
                databases, and ensuring robust application performance.
              </p>
              <p className="text-3xl font-normal text-cente w-[50vw] mx-auto text-grey max-sm:text-xl max-lg:text-2xl">
                Passionate about tech innovation and problem-solving, I deliver
                scalable and efficient web applications.
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <Footer />
        <Bottomlink />
      </FadeInUp>
    </section>
  );
};

export default About;
