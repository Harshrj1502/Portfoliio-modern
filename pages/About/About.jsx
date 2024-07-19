import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black outline-none">
      {/* <div className="bg-primary  left-[0] bottom-[0] h-[100px] w-[100px] rounded-full absolute"></div> */}
      <div className="flex flex-col w-[60vw] m-auto gap-5 p-5">
        {/* <h1 className="text-white text-5xl text-center ">-</h1> */}
        <h1 className="text-white text-4xl text-center font-light">About Me</h1>
        <p className="text-secondary text-lg font-extralight text-center">
        I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a drive for perfection, I specialize in creating dynamic, responsive, and user-friendly web applications.
        </p>
        <p className="text-secondary text-lg font-extralight text-center">
        My expertise in both front-end and back-end technologies allows me to handle a wide range of development tasks, ensuring a cohesive and efficient workflow.I prioritize the end-user experience, ensuring that the applications I develop are not only functional but also intuitive and enjoyable to use.I am committed to staying up-to-date with the latest industry trends and technologies, continuously improving my skills and expanding my knowledge base.
        </p>
        <div className="text-white flex justify-center items-center gap-10 py-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-secondary text-7xl font-bold">10+</h1>
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
