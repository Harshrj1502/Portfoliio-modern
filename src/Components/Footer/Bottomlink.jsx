import React from "react";
import Linksprofile from "../Links/Linksprofile";
import CV from "../CV";
const Bottomlink = () => {
  return (
    <div className="flex justify-between items-center px-5 py-10 w-[100vw] dark:bg-black dark:text-white">
      <h1 className="text-sm font-light">© Harsh 2024</h1>
      <Linksprofile />
    </div>
  );
};

export default Bottomlink;
