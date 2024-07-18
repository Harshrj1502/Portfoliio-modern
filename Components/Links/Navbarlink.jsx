import React from 'react'

const Navbarlink = () => {
  return (
    <div className="flex  gap-5 cursor-pointer  ">
    <a
      href="#home"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Home
    </a>
    <a
      href="#about"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      About
    </a>
    <a
      href="#services"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Services
    </a>
    <a
      href="#skills"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Skills
    </a>
    <a
      href="#work"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Work
    </a>
    {/* <a
      href="#Portfolio"
      className="text-xl font-semibold hover:text-white hover:font-bold  transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
    >
      Contact
    </a> */}
  </div>
  )
}

export default Navbarlink
