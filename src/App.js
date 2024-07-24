// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/Home/Home';
import About from './components/About_Me/Aboutme';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import "./App.css"

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  );
};

export default App;
