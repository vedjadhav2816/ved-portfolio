import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/LionIcon.css';

const LionIcon = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="lion-icon"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        top: visibleSections.length > 0 ? `${visibleSections.length * 10}%` : '20%',
      }}
    >
      <img src="/lion-icon.png" alt="Lion Icon" /> {/* Replace with your icon */}
    </motion.div>
  );
};

export default LionIcon;