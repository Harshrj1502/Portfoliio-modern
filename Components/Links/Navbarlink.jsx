import React from "react";
import { Link } from "react-scroll";
const Navbarlink = ({ link, text,color }) => {
  return (
    <Link
      activeClass="active"
      to={`${link}`}
      spy={true}
      smooth={true}
      duration={800}
      className={`text-xl font-semibold hover:text-${color} hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110`}
    >
      {text}
      {/* <a
      href="#Portfolio"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Contact
    </a> */}
    </Link>
  );
};

export default Navbarlink;
