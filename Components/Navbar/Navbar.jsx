import {React ,useState}from "react";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  const [navbarclass, setNavbarclass] = useState("navbar");
  return (
    <nav className="flex justify-center items-center">
      <div className="flex outline-none rounded-full bg-secondary w-fit fixed top-10">
        <ul className="flex gap-1 cursor-pointer ">
          <Link to={"/"} className={navbarclass}>
            Home
          </Link>
          <Link to={"/about"} className={navbarclass}>
            About
          </Link>
          <Link to={"/contact"} className={navbarclass}>
            Contact
          </Link>
        </ul>
        <Outlet />
      </div>
    </nav>
  );
};

export default Navbar;
