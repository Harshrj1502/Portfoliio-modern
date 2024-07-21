import React, { useState } from "react";
import Projectcard from "../Components/Projectcard/Projectcard";
import Textcard from "../Components/Projectcard/Textcard";
import Navbar from "../Components/Navbar/Navbar";
import Linksprofile from "../Components/Links/Linksprofile";
const Work = () => {
  return (
    <section className="outline-none grid h-[100vh] bg-primary ">
      <Navbar />
      <div className="h-[90vh] flex flex-col justify-center items-center gap-7 ">
        <p className="text-7xl font-normal text-center ">
          Let's craft exceptional digital experiences together.
        </p>
        <p className="text-2xl font-normal text-center text-grey">
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
      <div className="grid grid-cols-2 mx-auto gap-5">
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
      <div className="flex flex-col items-center justify-center h-[35vw]">
        <p className="text-4xl font-normal">Let's work together.</p>
        <p className="text-4xl font-normal text-grey">Get in touch.</p>
      </div>
      <div className="flex justify-between items-center p-10  w-[100vw]">
        <h1 className="text-sm">©Harsh 2024</h1>
        <Linksprofile />
      </div>
    </section>
  );
};

export default Work;
