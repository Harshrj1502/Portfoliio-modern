import { React, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Animation from "../../Animation/Animation";
const Projectcard = () => {
  const [cardclass, setCardclass] = useState("card-class");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Animation>
    <section
    className={`${cardclass} `}
      onMouseEnter={() => {
        setCardclass("cardclass-hover");
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setCardclass("card-class");
        setIsHovered(false)
      }}
    >
       {isHovered && <div className="text-base font-normal text-white flex justify-between p-7  ">Arial <BsArrowUpRightCircleFill  size={45} className="bg-black rounded-full text-white"/>
       </div>}
    </section>
    </Animation>
  );
};

export default Projectcard;
