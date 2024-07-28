import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  return (  
       <MdDarkMode  onClick={toggleDarkMode}  size={25}  />   
  );
}

export default Darkmode;
