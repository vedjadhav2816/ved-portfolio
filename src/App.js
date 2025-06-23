import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ScrollIndicator from './components/ScrollIndicator';
import VrjAiChatbot from './components/VrjAiChatbot';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio showcasing projects, skills, and contact details of Your Name." />
      </Helmet>
      <Navbar />
      <div className="content">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
     
      <ScrollIndicator />
      <Footer />
       <VrjAiChatbot />
    </div>
  );
}

export default App;