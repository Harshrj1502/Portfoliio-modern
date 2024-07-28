import React from "react";
import Animation from "../../Animation/Animation";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[35vw] w-[100vw] dark:bg-black dark:text-white">
      <Animation>
        <p className="text-4xl font-normal text-center">Let's work together.</p>
        <p className="text-4xl font-normal text-grey text-center ">
          Get in touch.
        </p>
      </Animation>
    </div>
  );
};

export default Footer;
