import { React, useState, useEffect } from "react";
import Navbar from "../../src/Components/Navbar/Navbar";
import Textcard from "../../src/Components/Projectcard/Textcard";
import Projectcardabout from "../../src/Components/Projectcard/Projectcardabout";
import Skills from "../../src/Components/Skills/Skills";
import Bottomlink from "../../src/Components/Footer/Bottomlink";
import Footer from "../../src/Components/Footer/Footer";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="bg-primary outline-none w-[100vw]  dark:bg-black dark:text-white">
      <Navbar />
      <div className=" flex flex-col gap-5 text-center  ">
        <div className="flex flex-col gap-7  ">
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl font-bold h-[80vh] justify-center items-center flex  max-lg:text-6xl max-sm:text-5xl max-sm:h-[65vh]  "
          >
            Hey 👋🏼 I'm Harsh
          </motion.p>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-light text-2xl  "
          >
            Web and App Developer
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ y: 50 }}
            transition={{ duration: 1, ease: "easeOut",delay:0.2 }}
            className="text-xl font-light max-sm:text-base text-grey dark:text-grey "
          >
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-5 place-items-center py-10 max-sm:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-1">
          <Projectcardabout />
        </div>
        <div className="py-36 flex flex-col gap-5 max-sm:py-14">
          <div className="flex justify-center items-center">
            <Textcard text={"About"} />
          </div>
          <div className="flex flex-col gap-2">
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl font-normal  w-[50vw] mx-auto max-sm:text-2xl max-lg:text-3xl"
            >
              My expertise includes building responsive UIs, managing databases,
              and ensuring robust application performance.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 50 }}
              transition={{ duration: 1, ease: "easeOut",delay:0.2 }}
              className="text-3xl font-normal w-[50vw] mx-auto text-grey max-sm:text-xl max-lg:text-2xl"
            >
              Passionate about tech innovation and problem-solving, I deliver
              scalable and efficient web applications.
            </motion.p>
          </div>
        </div>
      </div>
      <Skills />
      <Footer />
      <Bottomlink />
    </section>
  );
};

export default About;
