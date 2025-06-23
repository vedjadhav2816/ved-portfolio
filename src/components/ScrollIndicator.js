import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-line"></div>
      <motion.div
        className="scroll-orb"
        style={{ top: `${scrollPosition}%` }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </div>
  );
};

export default ScrollIndicator;