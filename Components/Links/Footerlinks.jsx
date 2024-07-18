import React from 'react'

const Footerlinks = () => {
  return (
    <div className="flex gap-5 justify-around items-center">
          <a
            href="#home"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            Services
          </a>
          <a
            href="#work"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            Work
          </a>
          <a
            href="#skills"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-darkgrey text-2xl font-extralight"
          >
            Contact
          </a>
        </div>
  )
}

export default Footerlinks
