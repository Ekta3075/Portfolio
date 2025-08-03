import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;