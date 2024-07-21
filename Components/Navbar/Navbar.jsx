import React from "react";
import Navbarlink from "./Navbarlink";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
    <div className="flex outline-none rounded-full bg-secondary w-fit fixed top-10">
      <ul className="flex gap-1 cursor-pointer ">
        <Navbarlink link={"/"} text={"Home"} />
        <Navbarlink link={"about"} text={"About"} />
        <Navbarlink link={"contact"} text={"Contact"} />
      </ul>
      <Outlet />
    </div>
    </nav>
  );
};

export default Navbar;
