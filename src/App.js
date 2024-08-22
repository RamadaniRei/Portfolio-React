import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Education from "./components/pages/education/Education";
import Portfolios from "./components/pages/portfolios/Portfolios";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/educations" element={<Education />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
    </Router>
  );
}

export default App;
