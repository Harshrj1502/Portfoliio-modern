import React from "react";
import { TbExternalLink } from "react-icons/tb";
import Projectcard from "../../Components/Projectcard/Projectcard";
const Work = () => {
  return (
    <section id="work" className="px-5 py-10 bg-secondary ">
      <div className="">
        <h1 className="text-4xl font-light text-center ">My Work</h1>
        <p className="text-center p-5 text-lg font-extralight ">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>
      <div className="flex justify-around px-5 py-10 ">
        <Projectcard title={"Porfolio Website"}
        content={"Web Design / Usability Testing"} link={""} imglink={""}/>
        <Projectcard title={"Porfolio Website"}
        content={"Web Design / Usability Testing"} link={""} imglink={""}/>
        <Projectcard title={"Porfolio Website"}
        content={"Web Design / Usability Testing"} link={""} imglink={""}/>
      </div>
    </section>
  );
};

export default Work;
