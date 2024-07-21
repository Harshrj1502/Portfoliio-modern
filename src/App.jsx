import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
