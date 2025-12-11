import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
    >
      <div className="text-center w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <img 
            src="/Sandy Loading.gif" 
            alt="Loading animation" 
            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 font-mono text-xs sm:text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
