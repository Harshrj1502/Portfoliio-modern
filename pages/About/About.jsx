import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black relative ">
      <div className="flex flex-col justify-center items-center w-[60vw] m-auto gap-5 p-5">
        <h1 className="text-white text-5xl">-</h1>
        <h1 className="text-white text-5xl">About Me</h1>
        <p className="text-white text-lg font-light text-center">I'm Harsh Raj, a Web developer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of development together.</p>
        <div className="text-white flex items-center gap-10 py-5">
        <div>
        <h1 className="text-secondary text-7xl">10</h1>
        <p className="text-2xl">Projects Done</p>
        </div>
       <div>
       <h1 className="text-secondary text-7xl">1+</h1>
       <p className="text-2xl">Years of Experience</p>
       </div>    
      </div>
        <h1 className="text-white text-5xl">-</h1>
      </div>
      <div className="bg-primary  left-[30vw] bottom-[-70px] h-[100px] w-[100px] rounded-full absolute"></div>
    </section>
  );
};

export default About;
