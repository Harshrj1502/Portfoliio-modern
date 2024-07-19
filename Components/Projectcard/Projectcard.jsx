import React from "react";
import { TbExternalLink } from "react-icons/tb";
const Projectcard = ({imglink,link,  title, content, }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={`${imglink}`} alt="Image" className="h-[180px] w-[300px] outline-none" />
      <h1 className="text-lg font-medium">{title}</h1>
      <span className="flex justify-between items-center">
        <p className="text-sm font-light">{content}</p>
        <a href={`${link}`} target="_blank">
          <TbExternalLink className="cursor-pointer text-primary" size={25} />
        </a>
      </span>
    </div>
  );
};

export default Projectcard;
