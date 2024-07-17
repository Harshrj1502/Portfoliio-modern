import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" gap-5 bg-black text-white p-20">
      <div className="flex justify-evenly">
        <a href="">
          <div className="flex">
            <h1 className="text-2xl">HS</h1>
            <h1 className="text-5xl text-primary">DEV</h1>
          </div>
        </a>
        <div className="flex gap-5 justify-around items-center">
          <a href="" className="hover:text-darkgrey text-2xl">
            About
          </a>
          <a href="" className="hover:text-darkgrey text-2xl">
            Services
          </a>
          <a href="" className="hover:text-darkgrey text-2xl">
            Porfolio
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center py-10">
        <h1 className="font-light">Follow Me on social media </h1>
        <div className="flex gap-5">
          <a href="">
            <FaTwitterSquare size={30} />
          </a>
          <a href="">
            <FaInstagram size={30} />
          </a>
          <a href="">
            <BsFillThreadsFill size={30} />
          </a>
          <a href="">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
