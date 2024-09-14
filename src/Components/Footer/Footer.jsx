import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[35vw] w-[100vw] dark:bg-black dark:text-white">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-normal text-center"
      >
        Let's work together.
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ y: 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-4xl font-normal text-grey text-center cursor-pointer"
      >
        <Link to={"/contact"} className="hover:opacity-70">
          Get in touch.
        </Link>
      </motion.p>
      
    </div>
  );
};

export default Footer;
