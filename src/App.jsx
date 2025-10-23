import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Impact from "./components/Impact";
import BusinessModel from "./components/BusinessModel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechnologyDetails from "./components/TechnologyDetails"; 

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <TechnologyDetails />
      <Impact />
      <BusinessModel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
