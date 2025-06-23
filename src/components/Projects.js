import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
import lioncraftImage from './lioncraft.png';


const projects = [
  {
    title: 'TaskKKing.Ai',
    description: 'A web app built with Python and Django for task management.',
    tools: ['Django', 'MySQL', 'API'],
    image: 'https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2022/02/Blog-cover-copy-5.jpg', // Updated for clarity
    github: 'https://github.com/your-username/taskkking-ai', // Replace with actual link
  },
  {
    title: 'Lioncraft',
    description: 'E-commerce site with Django and MySQL.',
    tools: ['Django', 'MySQL', 'Bootstrap', 'Python'],
     image: lioncraftImage,
    github: 'https://github.com/your-username/lioncraft',
  },
  {
    title: 'Weather Forecasting',
    description: 'A weather forecasting app built with HTML5, CSS, and Bootstrap.',
    tools: ['HTML5', 'CSS', 'Bootstrap'],
    image: 'https://powerslides.com/wp-content/uploads/2020/08/Weather-Forecast-Template-2.jpg',
    github: 'https://github.com/your-username/weather-forecasting',
  },
  {
    title: 'Music Player',
    description: 'A music player app with MySQL integration using Python.',
    tools: ['MySQL', 'Bootstrap', 'Python'],
    image: 'https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-music-player-dark-smartphone-interface-vector-template-streaming-black-digital-vector-png-image_39663480.jpg',
    github: 'https://github.com/your-username/music-player',
  },
];

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
              boxShadow: '0 0 30px #00ff88',
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="tool-tag">{tool}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;