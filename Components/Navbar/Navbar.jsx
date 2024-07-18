import React from "react";
import Button from "../Button/Button";
import Navbarlink from "../Links/Navbarlink";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-3 fixed bg-secondary w-[100%] outline-none  ">
      <a href="#home" className="flex cursor-pointer">
        <h1 className="text-xl font-extralight">HR</h1>
        <h1 className="text-3xl font-normal text-primary">DEV</h1>
      </a>
      <div className="">
       <Navbarlink/>
      </div>
      <a href="#contact"> <Button text={"Contact"} /></a>
     
    </nav>
  );
};

export default Navbar;
