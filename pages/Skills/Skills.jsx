import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
const Skills = () => {
  return (
    <div id="skills" className="px-5 py-10 bg-secondary">
      <h1 className="text-4xl font-light text-center px-5 py-10">Core Skills</h1>
      <div className="flex justify-evenly px-5 py-10">
        <FaHtml5 size={80} className=" "/>
        <IoLogoCss3 size={80} className="" />
        <IoLogoJavascript size={80} className="" />
        <FaReact size={80} className="" />
        <RiTailwindCssFill size={80} className="" />
        <VscVscode size={80} className="" />
      </div>
    </div>
  );
};

export default Skills;
