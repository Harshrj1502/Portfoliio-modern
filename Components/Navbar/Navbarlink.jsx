import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbarlink = ({ link, text }) => {
  const [navbarclass, setNavbarclass] = useState("navbar");
  return (
    <Link
      activeClass="active"
      to={`${link}`}
      className={navbarclass}
    >
      {text}
    </Link>
  );
};

export default Navbarlink;
