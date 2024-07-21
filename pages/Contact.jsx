import React from "react";
import Links from "../Components/Links/Linksprofile";
import Navbar from "../Components/Navbar/Navbar";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="container"
    >
    <section id="contact" className="bg-primary w-screen h-screen outline-none">
        <div className="flex flex-col items-center justify-center h-screen">         
          <Navbar/>
        <p className="text-7xl font-normal">
        Let's work together.
        </p>
        <p className="text-7xl font-normal text-grey">
        Get in touch.
        </p>
        </div>
        <div className="flex justify-between items-center p-10 fixed bottom-0 w-[100vw]">
            <h1 className="text-sm">©Harsh 2024</h1>
            <Links/>
        </div>
    </section>
    </motion.div>
  );
};

export default Contact;
