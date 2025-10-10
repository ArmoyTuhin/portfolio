import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tuhinPortrait from '../assets/tuhin_portrait.jpg';

const TerminalTyping = () => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Terminal commands and outputs
  const terminalLines = [
    { type: 'command', text: '$ cat about_me.txt' },
    { type: 'output', text: '> Love to do code, research and photography' },
    { type: 'output', text: '> Nature lover & love to talk to people' },
    { type: 'command', text: '$ my Dream' },
    { type: 'output', text: '> Dream: Being a great researcher and nomad' },
    { type: 'command', text: '$ Why me ?' },
    { type: 'output', text: '> I have always cravings for learning something new' },
    { type: 'output', text: '> I do anything with full focus and passion' },
    { type: 'output', text: 'tuhin@developer:~$' },
  ];

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false);
      // Restart after a delay
      setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
        setIsTyping(true);
      }, 5000);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    const fullText = currentLine.text;

    if (currentText.length < fullText.length) {
      // Typing effect - Faster speed
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 30); // Faster typing speed (was 50)
      return () => clearTimeout(timeout);
    } else {
      // Move to next line after a brief pause
      const timeout = setTimeout(() => {
        setLines([...lines, { type: currentLine.type, text: currentText }]);
        setCurrentText('');
        setCurrentLineIndex(currentLineIndex + 1);
      }, 300); // Shorter pause between lines (was 500)
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full"
    >
      <div className="bg-black/90 backdrop-blur-sm border-2 border-cyan-500/50 rounded-lg overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)' }}
      >
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 px-3 md:px-4 py-2 md:py-3 flex items-center gap-1.5 md:gap-2 border-b border-cyan-500/30">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-cyan-400 text-xs md:text-sm font-mono ml-1 md:ml-2">tuhin@portfolio:~</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 md:p-6 font-mono text-xs sm:text-sm md:text-base min-h-[300px] sm:min-h-[360px] md:min-h-[420px]">
          {/* Profile Image */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-cyan-500/50" style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'}}>
              <img
                src={tuhinPortrait}
                alt="Tuhin Chowdhury"
                className="w-full h-full object-contain"
                style={{backgroundColor: 'transparent'}}
              />
            </div>
          </div>

          {lines.map((line, index) => (
            <div key={index} className="mb-1.5 md:mb-2 break-words">
              {line.type === 'command' ? (
                <span className="text-cyan-400">{line.text}</span>
              ) : (
                <span className="text-green-400">{line.text}</span>
              )}
            </div>
          ))}
          
          {isTyping && currentText && (
            <div className="mb-1.5 md:mb-2 break-words">
              {terminalLines[currentLineIndex]?.type === 'command' ? (
                <span className="text-cyan-400">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                  />
                </span>
              ) : (
                <span className="text-green-400">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                  />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalTyping;

