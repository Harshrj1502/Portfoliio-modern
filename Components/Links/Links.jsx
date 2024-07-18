import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Links = ({color}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-5">
       
        <div className="flex gap-5">
          <a href="https://x.com/HarshRj1502" target="_blank">
            <FaTwitterSquare size={30} className={`text-${color}`} />
          </a>
          <a href="https://www.instagram.com/rharsh.05/?next=%2F" target="_blank">
            <FaInstagram size={30} className={`text-${color}`} />
          </a>
          <a href="https://www.threads.net/@justc.10" target="_blank">
            <BsFillThreadsFill size={30} className={`text-${color}`} />
          </a>
          <a href="https://github.com/Harshrj1502" target="_blank">
            <FaGithub size={30} className={`text-${color}`} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-raj-7584ba297/" target="_blank">
            <FaLinkedin size={30} className={`text-${color}`} />
          </a>
        </div>
        </div>
  )
}

export default Links
