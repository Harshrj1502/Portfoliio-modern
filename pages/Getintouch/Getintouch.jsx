import React from "react";
import Button from "../../Components/Button/Button";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Links from "../../Components/Links/Links";
const Getintouch = () => {
  return (
    <section id="contact" className="bg-secondary flex p-5 ">
      {/* <div className="bg-primary top-[20px] h-[140px] w-[140px] rounded-full absolute "></div> */}
      <div className="flex flex-col w-[50vw] py-14 px-20 gap-4">
        <h1 className="text-3xl font-medium">Get in Touch</h1>
        <p className="text-lg font-extralight">
          Have a question or a project in mind? I'd love to hear from you. Let's
          chat and make something amazing together.
        </p>
        <p className="text-lg flex items-center gap-5 font-light">
          <MdLocalPhone />
          +91 9006620183
        </p>
        <p className="text-lg flex items-center gap-5 font-light">
          <MdEmail />
          harshrj1501@gmail.com
        </p>
        <p className="text-lg flex items-center gap-5 font-light">
          <FaLocationDot />
          IIITDM JABALPUR
        </p>
        <div className="flex justify-start">
        <Links/>
        </div>
        
      </div>
      <div className="w-[50vw] px-20">
        <form action="" className="flex flex-col gap-5 p-10  ">
          <input
            type="text"
            className="outline-none h-12  placeholder:text-sm placeholder:font-light p-5 "
            placeholder="First Name"
          />
          <input
            type="email"
            className="outline-none h-12 placeholder:text-sm placeholder:font-light p-5"
            placeholder="Email"
          />
          <input
            type="text"
            className="outline-none h-12  placeholder:text-sm placeholder:font-light p-5"
            placeholder="Phone Number"
          />
          <textarea
            type="textarea"
            className="outline-none  placeholder:text-sm placeholder:font-light p-5"
            placeholder="Your Message"
            rows={6}
          />
          <span className="flex justify-start">
            <Button text={"Send Message"} />
          </span>
        </form>
      </div>
    </section>
  );
};

export default Getintouch;
