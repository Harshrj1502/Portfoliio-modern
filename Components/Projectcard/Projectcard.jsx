import { React, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Projectcard = () => {
  const [xyz, setXyz] = useState("hello");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className={xyz}
      onMouseEnter={() => {
        setXyz("helloo");
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setXyz("helloo");
        setIsHovered(false)
      }}
    >
        {isHovered && <div className="text-base font-normal text-white flex justify-between p-7 ">Arial <BsArrowUpRightCircleFill  size={45} className="bg-black rounded-full text-white"/></div>}
    </section>
  );
};

export default Projectcard;
