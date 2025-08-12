import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import tuhinPortrait from '../assets/tuhin_portrait.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative flex items-center justify-center w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem]">
              {/* Bubbles */}
              <motion.div
                className="absolute left-2 top-6 w-10 h-10 rounded-full border border-white/30 bg-transparent opacity-60 z-20"
                animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.25, 1] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 0 }}
              />
              <motion.div
                className="absolute right-6 top-10 w-8 h-8 rounded-full border border-white/20 bg-transparent opacity-50 z-20"
                animate={{ y: [0, -30, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
              />
              <motion.div
                className="absolute left-20 bottom-6 w-9 h-9 rounded-full border border-white/10 bg-transparent opacity-40 z-20"
                animate={{ y: [0, 35, 0], x: [0, -25, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 2 }}
              />
              <motion.div
                className="absolute right-12 bottom-8 w-12 h-12 rounded-full border border-white/20 bg-transparent opacity-50 z-20"
                animate={{ y: [0, 45, 0], x: [0, 25, 0], scale: [1, 1.18, 1] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", delay: 1.5 }}
              />

              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: [30, -10, 0, -10, 30], scale: 1 }}
                transition={{
                  opacity: { duration: 1 },
                  y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                  scale: { duration: 0.8 }
                }}
                className="w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden border border-gray-300 bg-background z-30"
                style={{
                  willChange: "transform, opacity",
                  boxShadow: "0 24px 120px 0 rgba(0,0,0,0.95), 0 2px 16px 0 rgba(0,0,0,0.5)"
                }}
              >
                <img
                  src={tuhinPortrait}
                  alt="Tuhin Chowdhury"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Tuhin</span>
              <span className="block">Chowdhury</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
  <span className="block mb-2">
    I build solutions that <span className="font-semibold text-foreground">simplify life</span>.
  </span>
  <span className="block mb-2">
    <span className="italic">Not tied to any stack</span>  I follow the problem.
  </span>
  <span className="block mb-2">
    I can cling to a challenge for days , my longest streak was <span className="font-semibold text-foreground">8 days</span> to crack a single bug.
  </span>
  <span className="block">
    <span className="font-semibold">Currently exploring:</span> Federated Learning &amp; crafting smart workflows with <span className="font-semibold">n8n automation</span>.
  </span>
</p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Chittagong, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:tuhin.sec@gmail.com" className="hover:text-foreground transition-colors">
                  tuhin.sec@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <a href="tel:+8801701538514" className="hover:text-foreground transition-colors">
                  +8801701538514
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-foreground text-background px-8 py-3 rounded-lg font-medium hover:bg-muted-foreground transition-colors"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                View My Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={24} className="animate-bounce group-hover:animate-none" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

