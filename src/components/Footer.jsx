import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Name and Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Tuhin Chowdhury</h3>
            <p className="text-gray-300">Computer Science Engineer & Researcher</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#publications').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Publications
            </button>
            <button
              onClick={() => document.querySelector('#photography').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Photography
            </button>
            <button
              onClick={() => document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-300">
            <a href="mailto:tuhin.sec@gmail.com" className="hover:text-white transition-colors">
              tuhin.sec@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+8801701538514" className="hover:text-white transition-colors">
              +8801701538514
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Chittagong, Bangladesh</span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-600 mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-sm text-gray-400">
            <p className="flex items-center gap-2 mb-4 sm:mb-0">
              © {currentYear} Tuhin Chowdhury. Made with 
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              and lots of coffee.
            </p>
            <p>
              Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

