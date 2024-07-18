import React from "react";

import Links from "../../Components/Links/Links";
import Footerlinks from "../../Components/Links/Footerlinks";
const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10">
      <div className="flex justify-evenly py-10">
        <a href="#home">
          <div className="flex">
            <h1 className="text-2xl font-extralight">HR</h1>
            <h1 className="text-5xl text-primary">DEV</h1>
          </div>
        </a>
        <Footerlinks/>
      </div>
      <h1 className="font-light text-lg text-center">Follow Me on social media </h1>
      <Links color={"secondary"}/>
      <h1 className="text-white text-5xl text-center ">-----</h1>
    </footer>
  );
};

export default Footer;
