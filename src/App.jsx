import React from "react";
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Darkmode from "./Components/Darkmode";
const App = () => {
  return (
    <div className="">
      <Router>
        <Routes >
          <Route exact path="/"  element={<Home/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </Router>
    </div>
  );
};

export default App;
