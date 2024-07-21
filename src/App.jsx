import React from "react";
import Home from "../pages/Home";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes >
          <Route path="/"  element={<Home/>}>hello</Route>
          <Route path="/contact"  element={<Contact/>}>hello</Route>
          <Route path="/about" element={<About/>}>hello</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
