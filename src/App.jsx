import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Photography from './components/Photography';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Volunteering from './components/Volunteering';
import Certificates from './components/Certificates';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Blog />
        <Volunteering />
        <Certificates />
        <Recommendations />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

