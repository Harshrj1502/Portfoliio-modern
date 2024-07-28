import { React, useState, useEffect } from "react";
import Navbar from "../../src/Components/Navbar/Navbar";
import Textcard from "../../src/Components/Projectcard/Textcard";
import Projectcardabout from "../../src/Components/Projectcard/Projectcardabout";
import Skills from "../../src/Components/Skills/Skills";
import Bottomlink from "../../src/Components/Footer/Bottomlink";
import Footer from "../../src/Components/Footer/Footer";
import Animation from "../Animation/Animation";
const About = () => {
  return (
    <section className="bg-primary outline-none w-[100vw]  dark:bg-black dark:text-white">
      <Navbar />
      <Animation>
        <div className=" flex flex-col gap-5 text-center  ">
          <div className="flex flex-col gap-7  ">
            <p className="text-7xl font-bold h-[80vh] justify-center items-center flex  max-lg:text-6xl max-sm:text-5xl max-sm:h-[65vh]  ">
              Hey 👋🏼 I'm Harsh
            </p>
            <h1 className="font-light text-2xl  ">Web and App Developer</h1>
            <p className="text-xl font-light max-sm:text-base text-grey dark:text-grey ">
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and let's create something extraordinary together.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 place-items-center py-10 max-sm:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-1">
            <Projectcardabout    />
          </div>
          <div className="py-36 flex flex-col gap-5 max-sm:py-14">
          <Animation>
            <div className="flex justify-center items-center">
              <Textcard text={"About"} />
            </div></Animation>
            <Animation>
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
            </Animation>
          </div>
        </div>
        <Skills />
        <Footer />
        <Bottomlink />
        </Animation>
    </section>
  );
};

export default About;
