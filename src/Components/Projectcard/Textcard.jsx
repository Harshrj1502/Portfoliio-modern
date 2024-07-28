import React from "react";

const Textcard = ({ text }) => {
  return (
    <div className="text-sm font-light rounded-full py-2 px-5 max-sm:px-5 max-sm:py-3 max-sm:text-center  bg-secondary dark:bg-darkgrey dark:text-white ">
      {text}
    </div>
  );
};
export default Textcard;
