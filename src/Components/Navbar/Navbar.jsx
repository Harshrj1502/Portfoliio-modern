import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Darkmode from "../Darkmode";
import CV from "../CV";
const Navbar = () => {
  const [navbarclass, setNavbarclass] = useState("navbar");
  return (
    <nav className="flex justify-center items-center ">
      <div className=" flex outline-none rounded-full fixed top-10 bg-secondary dark:bg-darkgrey dark:text-white">
        <ul className="flex gap-2 cursor-pointer items-center px-2 ">
          <Link to={"/"} className={navbarclass}>
            Home
          </Link>
          <Link to={"/about"} className={navbarclass}>
            About
          </Link>
          <Link to={"/contact"} className={navbarclass}>
            Contact
          </Link>
          <Darkmode className={navbarclass} />
          <CV className={navbarclass} />
        </ul>
      </div>
     
    </nav>
  );
};

export default Navbar;
