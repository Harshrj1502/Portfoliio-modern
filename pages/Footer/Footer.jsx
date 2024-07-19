import React from "react";
import { Link } from "react-scroll";
import Links from "../../Components/Links/Links";
import Footerlinks from "../../Components/Links/Footerlinks";
const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10">
      <div className="flex justify-evenly py-10">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={800}
          className="flex cursor-pointer"
        >
          <div className="flex">
            <h1 className="text-2xl font-extralight">HX</h1>
            <h1 className="text-5xl text-primary">DEV</h1>
          </div>
        </Link>
        <div className="flex gap-5 justify-around items-center">
          <Footerlinks link={"home"} text={"Home"} />
          <Footerlinks link={"about"} text={"About"} />
          <Footerlinks link={"services"} text={"Services"} />
          <Footerlinks link={"skills"} text={"Skills"} />
          <Footerlinks link={"work"} text={"Work"} />
          <Footerlinks link={"contact"} text={"Contact"} />
        </div>
      </div>
      <h1 className="font-light text-lg text-center">
        Follow Me on social media{" "}
      </h1>
      <Links color={"secondary"} />
      <h1 className="text-white text-5xl text-center ">-----</h1>
    </footer>
  );
};

export default Footer;
