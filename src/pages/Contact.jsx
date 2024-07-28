import React from "react";
import Links from "../../src/Components/Links/Linksprofile";
import Navbar from "../../src/Components/Navbar/Navbar";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary w-screen h-screen outline-none "
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen dark:bg-black dark:text-white">
        <Animation>
          <p className="text-7xl font-normal text-center max-sm:text-5xl max-lg:text-6xl">
            Let's work together.
          </p>
        </Animation>
        <Animation>
          <p className="text-7xl font-normal text-grey text-center max-sm:text-5xl max-lg:text-6xl py-2 hover:opacity-50 ">
          <Link to={"/contact"}>Get in touch.</Link>
          </p>
        </Animation>
      </div>
      <div className="flex justify-between items-center py-10 px-5 fixed bottom-0 w-[100vw] dark:bg-black dark:text-white">
        <h1 className="text-sm">©Harsh 2024</h1>
        <Links />
      </div>
    </section>
  );
};

export default Contact;
