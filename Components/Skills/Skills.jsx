import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Textcard from "../../Components/Projectcard/Textcard";
const Skills = () => {
  return (
    <section id="skills" className="bg-white outline-none flex flex-col justify-center items-center py-10 w-[100vw]">
      <Textcard text={"Skills"}/>
      <div className="grid grid-cols-4 gap-10 p-10 m-auto w-[100vw] ">
        <FaHtml5 size={70} className="  "/>
        <IoLogoCss3 size={70} className="" />
        <IoLogoJavascript size={70} className="" />
        <FaReact size={70} className="" />
        <RiTailwindCssFill size={70} className="" />
        <FaNodeJs  size={70} className="" />
        <SiExpress  size={70} className="" />
        <SiMongodb  size={70} className="" />
        <SiPostman size={70} className="" />
        <FaGithub size={70}className="" />
        <VscVscode size={70} className="" />
      </div>
    </section>
  );
};

export default Skills;
