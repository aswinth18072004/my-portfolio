/* import Home from "./component/Home"


function App() {
  return (
    <div>
      <Home></Home>
      
    </div>
  );
}

export default App; */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/about";
import Project from "./component/project";
import Contact from "./component/contact";
import Skills from "./component/skills";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    </>
  );
}

export default App;