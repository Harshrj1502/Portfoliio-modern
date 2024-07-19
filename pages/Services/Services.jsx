import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { CgDesignmodo } from "react-icons/cg";
const Services = () => {
  return (
    <section id="services" className=" bg-white p-10 outline-none">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl font-light"> Services</h1>
        <p className="text-lg font-extralight">
          We offer comprehensive website design and development services
        </p>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 gap-5 m-auto justify-around p-10">
        <div className="h-[20vw] py-5 flex flex-col gap-5 ">
        <CgDesignmodo className="text-primary" size={70} />
          <h1 className="text-3xl ">Web design</h1>
          <p>
            We specialize in creating stunning,user friendly websites that help
            businesses and individuals establish a strong online presence
          </p>
        </div>
        <div className="h-[20vw] py-5 flex flex-col gap-5 ">
          <MdOutlineWeb className="text-primary" size={70} />
          <h1 className="text-3xl">Web Development</h1>
          <p>
            Our team of experienced designers and developers work closely with clients to craft custom websites tailored to their uniwue needs and goals.
          </p>
        </div>
        <div className="h-[20vw] py-5 flex flex-col gap-5">
        <PiAppStoreLogoBold  className="text-primary" size={70}/>
          <h1 className="text-3xl">App Development</h1>
          <p>
          We specialize in creating dynamic, responsive, and user-friendly web and mobile applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
