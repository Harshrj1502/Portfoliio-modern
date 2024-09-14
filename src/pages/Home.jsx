import React, { useState } from "react";
import Projectcard from "../../src/Components/Projectcard/Projectcard";
import Textcard from "../../src/Components/Projectcard/Textcard";
import Navbar from "../../src/Components/Navbar/Navbar";
import Footer from "../../src/Components/Footer/Footer";
import Bottomlink from "../../src/Components/Footer/Bottomlink";
import "animate.css/animate.min.css";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <section className="outline-none h-[100vh] bg-primary w-[100vw] dark:bg-black dark:text-white">
      <Navbar />
      <div className="h-[90vh] flex flex-col justify-center items-center gap-5 w-[100vw] ">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl font-normal text-center max-sm:text-5xl  max-lg:text-6xl "
        >
          Let's craft exceptional digital experiences together.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-2xl font-normal text-center text-grey max-lg:text-xl max-sm:text-lg  py-4 "
        >
          Explore my design services, from user interface and experience to
          prototyping and testing.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex gap-5 items-center max-sm:gap-3 max-sm:grid max-sm:grid-cols-2 "
        >
          <h1 className="text-sm font-normal max-sm:text-center max-sm:text-base ">
            Expertise
          </h1>
          <Textcard text={"Web Design"} />
          <Textcard text={"Web Dev"} />
          <Textcard text={"App Dev"} />
        </motion.div>
      </div>
      <div className="flex justify-center dark:bg-black dark:text-white">
        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-1">
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
        </div>
      </div>
      <Footer />
      <Bottomlink />
    </section>
  );
};

export default Work;
