import React from 'react';
import { ArrowUp } from 'lucide-react';
import ViewCounter from './ViewCounter';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-cyan-500/30 py-12 relative" style={{boxShadow: '0 -4px 20px rgba(0, 255, 255, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all group"
            aria-label="Back to top"
            style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'}}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Name and Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400 font-mono sci-fi-glow">TUHIN CHOWDHURY</h3>
            <p className="text-purple-400 font-mono">Computer Science Engineer & Researcher</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <button
              onClick={() => document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [HOME]
            </button>
            <button
              onClick={() => document.querySelector('#education').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [EDUCATION]
            </button>
            <button
              onClick={() => document.querySelector('#research').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [RESEARCH]
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [PROJECTS]
            </button>
            <button
              onClick={() => document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [SKILLS]
            </button>
            <button
              onClick={() => document.querySelector('#activities').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [ACTIVITIES]
            </button>
            <button
              onClick={() => document.querySelector('#teaching').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [TEACHING]
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              [CONTACT]
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-400 font-mono">
            <a href="mailto:tuhin.sec@gmail.com" className="hover:text-cyan-400 transition-colors">
              tuhin.sec@gmail.com
            </a>
            <span className="hidden sm:inline text-cyan-500">|</span>
            <span>Chittagong, Bangladesh</span>
          </div>

          {/* View Counter */}
          <div className="flex justify-center mb-6">
            <ViewCounter />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-cyan-500/30 mb-8" style={{boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)'}}></div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-center w-full text-sm text-gray-500 gap-4">
            <p className="flex items-center gap-2 font-mono">
              © {currentYear} Tuhin Chowdhury - This website has been made by AI with one cup of 
              <span className="text-lg">☕</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

