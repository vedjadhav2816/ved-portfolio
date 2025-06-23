import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from './Ved_Jadhav_Resume_Final.pdf'; // Import the PDF
import '../styles/Resume.css';

const Resume = () => {
  return (
    <motion.div
      className="resume"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Education</h3>
          <p>Bachelor of Technology in Computer Science</p>
          <p>Your University, 2020-2024</p>
        </motion.div>
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Certifications</h3>
          <p>Graphics Design Certification </p>
          <p>Full Stack Web Development </p>
        </motion.div>
        <motion.a
          href={resumePDF}
          className="resume-download" // Added className for styling
          download="Ved_Jadhav_Resume_Final.pdf" // Suggested file name for download
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Resume;