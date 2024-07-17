import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-6">
         
      <div className="flex cursor-pointer">
      <h1 className="text-xl ">HS</h1>
        
        <h1 className="text-3xl text-primary">DEV</h1>
      </div>
      <div className="">
        <ul className="flex  gap-5 cursor-pointer relative " >
          <a href="#about" className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">About </a>
          <a href="#Services" className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">Services</a>
          <a href="#Portfolio" className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">Portfolio</a>
        </ul>
      </div>
      <Button text={"Let's Talk"}/>
    </nav>
  );
};

export default Navbar;
