import React from "react";

const Textcard = ({ text }) => {
  return (
    <div className="text-sm font-normal rounded-full p-3 items-center bg-secondary dark:bg-darkgrey dark:text-white">
      {text}
    </div>
  );
};

export default Textcard;
