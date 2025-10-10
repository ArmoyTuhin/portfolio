import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const [bootSequence, setBootSequence] = useState([]);

  const bootMessages = [
    '> Initializing GPU cores...',
    '> Loading neural networks...',
    '> Compiling shaders...',
    '> Rendering reality...',
    '> Initializing portfolio system...',
    '> Loading 3D assets...',
    '> Establishing connection...',
    '> System ready.',
  ];

  useEffect(() => {
    // Boot sequence animation
    bootMessages.forEach((message, index) => {
      setTimeout(() => {
        setBootSequence(prev => [...prev, message]);
      }, index * 300);
    });

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 100);
    }, 1500);

    // Complete loading after animation
    const completeTimer = setTimeout(() => {
      clearInterval(glitchInterval);
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black" />
          <div className="grid-background" />
        </div>

        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="matrix-column"
              style={{ left: `${i * 5}%` }}
              animate={{
                y: ['0vh', '100vh'],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              {[...Array(10)].map((_, j) => (
                <div key={j} className="text-green-500 text-xs opacity-70">
                  {String.fromCharCode(33 + Math.random() * 94)}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* GPU Blast Title */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`mb-8 ${showGlitch ? 'glitch' : ''}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 10px rgba(0,255,255,0.5)',
                    '0 0 20px rgba(255,0,255,0.8)',
                    '0 0 30px rgba(0,255,255,0.5)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOADING
              </motion.span>
            </h1>
          </motion.div>

          {/* Boot Sequence Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 mb-8 text-left font-mono"
          >
            {bootSequence.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green-400 text-sm mb-2"
              >
                {message}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  _
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <motion.div
              initial={{ width: 0 }}
              className="h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/30"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                style={{ width: `${progress}%` }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0,255,255,0.5)',
                    '0 0 20px rgba(255,0,255,0.8)',
                    '0 0 10px rgba(0,255,255,0.5)',
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              className="text-cyan-400 text-lg font-bold mt-3"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Orbiting Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * Math.PI / 4) * 200, 0],
                  y: [0, Math.sin(i * Math.PI / 4) * 200, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          animate={{
            y: ['0vh', '100vh'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

