import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skills = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  Backend: ['Node.js', 'Django', 'MySQL'],
  Other: ['Git', 'Video Editing', 'Graphic Design'],
};

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="skills-category"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: '0 0 20px rgba(255, 87, 51, 0.5)',
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3>{category}</h3>
            <ul>
              {items.map((skill, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.3) + (idx * 0.1) }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;