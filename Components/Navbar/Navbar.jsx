import React from "react";
import Navbarlink from "./Navbarlink";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center outline-none rounded-full bg-secondary  mx-auto w-fit  right-[25vw] left-[25vw] fixed top-10   ">
      <ul className="flex gap-1 cursor-pointer ">
        <Navbarlink link={"/"} text={"Home"} />
        <Navbarlink link={"about"} text={"About"} />
        <Navbarlink link={"contact"} text={"Contact"} />
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
