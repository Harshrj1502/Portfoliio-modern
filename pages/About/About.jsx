import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black outline-none">
      {/* <div className="bg-primary  left-[0] bottom-[0] h-[100px] w-[100px] rounded-full absolute"></div> */}
      <div className="flex flex-col w-[60vw] m-auto gap-5 p-5">
        <h1 className="text-white text-5xl text-center ">-</h1>
        <h1 className="text-white text-4xl text-center font-light">About Me</h1>
        <p className="text-secondary text-lg font-extralight text-center">
          I'm Harsh Raj, a Web developer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Let's collaborate and shape the future of development together.
        </p>
        <div className="text-white flex justify-center items-center gap-10 py-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-secondary text-7xl font-bold">10</h1>
            <p className="text-2xl font-light">Projects Done</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-secondary text-7xl font-bold">1+</h1>
            <p className="text-2xl font-light">Years of Experience</p>
          </div>
        </div>
        <h1 className="text-white text-5xl text-center">-</h1>
      </div>
    </section>
  );
};

export default About;
