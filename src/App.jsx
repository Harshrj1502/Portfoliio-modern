import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
