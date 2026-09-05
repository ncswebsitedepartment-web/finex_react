import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Gallery from "./components/Gallery";
import About from "./components/About";
import ServiceDetail from './components/ServiceDetail';
import SubcategoryDetail from './components/SubcategoryDetail';
import Timeline from "./components/Timeline";
import ProjectDetail from "./components/ProjectDetail";
import CSR from './components/CSR';
import Projects from "./components/Projects";
import Infrastructure from "./components/Infrastructure"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
<Route path="/services/:slug" element={<ServiceDetail />} />
   <Route path="/:subSlug" element={<SubcategoryDetail />} />
   <Route path="/timeline" element={<Timeline />} />
   <Route path="/csr" element={<CSR />} />
<Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;