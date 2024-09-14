import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
const CV = ({ name, text }) => {
  return (
    <div
      className={`outline-none rounded-full  top-10 bg-secondary dark:bg-darkgrey dark:text-white ${name}`}
    >
      <a href="" download="sample.pdf" className="flex items-center gap-2">
        {text}
        <HiOutlineDownload size={25} />
      </a>
    </div>
  );
};

export default CV;
