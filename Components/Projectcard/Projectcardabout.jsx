import { React, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Projectcard = () => {
  const [cardclass, setCardclass] = useState("card-class");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
    className={`${cardclass} bg-[url('/image.png')] bg-no-repeat bg-cover bg-center`}
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
  );
};

export default Projectcard;
