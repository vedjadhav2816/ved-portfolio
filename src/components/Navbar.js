import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking a link
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span onClick={() => scrollToSection('home')}>VED</span>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <span
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          Home
        </span>
        <span
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </span>
        <span
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </span>
        <span
          className={activeSection === 'resume' ? 'active' : ''}
          onClick={() => scrollToSection('resume')}
        >
          Resume
        </span>
        <span
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </span>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;