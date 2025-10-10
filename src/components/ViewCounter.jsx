import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get current view count from localStorage
    const storedCount = localStorage.getItem('portfolioViewCount');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment the count
    const newCount = currentCount + 1;
    
    // Update localStorage
    localStorage.setItem('portfolioViewCount', newCount.toString());
    
    // Update state
    setViewCount(newCount);
  }, []);

  // Format the number with leading zeros
  const formatCount = (count) => {
    return count.toString().padStart(6, '0');
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-cyan-500/30 rounded-lg bg-black/30 backdrop-blur-sm">
      <Eye className="w-4 h-4 text-cyan-400" />
      <span className="text-cyan-400 font-mono text-sm">
        Profile Views: <span className="text-cyan-300 font-bold">{formatCount(viewCount)}</span>
      </span>
    </div>
  );
};

export default ViewCounter;

