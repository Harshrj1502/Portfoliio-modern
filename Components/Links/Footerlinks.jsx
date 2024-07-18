import React from "react";
import { Link } from "react-scroll";
const Footerlinks = ({ link, text }) => {
  return (
    <Link
      activeClass="active"
      to={`${link}`}
      spy={true}
      smooth={true}
      duration={600}
      className="hover:text-darkgrey text-2xl font-extralight"
    >
      {text}
    </Link>
  );
};

export default Footerlinks;
