import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import chatbotImage from './chatbot.webp'; // Import chatbot image
import '../styles/VrjAiChatbot.css';

const VrjAiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Trigger pop-up every 5 seconds when chat is closed
  useEffect(() => {
    if (!isOpen) {
      const triggerPopup = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
      };
      triggerPopup(); // Initial trigger
      const interval = setInterval(triggerPopup, 5000); // Repeat every 5 seconds
      return () => clearInterval(interval); // Cleanup
    }
  }, [isOpen]);

  const responses = {
    'Tell me about yourself': `I’m Ved Ramesh Jadhav, a pursuing in BCA from Tilak Maharashtra Vidyapeeth, expected graduate at 2026. I specialize in web development, with hands-on experience in building projects like Lioncraft, an e-commerce platform using Django and MySQL, and TaskKKing.Ai, a task management app. I’m proficient in Python, React, Bootstrap, and APIs, and I enjoy creating user-friendly, scalable applications. As a graphics designer and content creator, I bring a creative edge to my work. I’m eager to contribute my skills to innovative projects and grow as a developer.`,
    'What are your strengths?': `My key strengths include problem-solving, adaptability, and a strong technical foundation in web development. I excel at breaking down complex problems, as demonstrated in my Lioncraft project, where I integrated Django with MySQL for seamless e-commerce functionality. I’m a quick learner, having mastered React for my portfolio and certifications from Coursera and Udemy. My ability to collaborate and communicate effectively ensures I deliver high-quality work in team settings.`,
    'What are your weaknesses?': `I used to overcommit to tasks, which sometimes stretched my time management. However, I’ve improved by prioritizing tasks and using tools like TaskKKing.Ai, which I built to streamline workflows. I’m now better at balancing quality and deadlines, but I continue to refine this skill through practice and feedback.`,
    'Why should we hire you?': `You should hire me because I bring a blend of technical expertise, creativity, and a proven track record of delivering projects. My work on Lioncraft and TaskKKing.Ai showcases my ability to build functional, user-focused applications with Django and React. My certifications in React and Full Stack Development from Coursera demonstrate my commitment to learning. I’m passionate about solving real-world problems and would bring dedication and innovation to your team.`,
    'Where do you see yourself in 5 years?': `In five years, I see myself as a senior developer, contributing to cutting-edge projects in web or AI development. I aim to deepen my expertise in full-stack development and explore emerging technologies like machine learning. I hope to mentor junior developers, drawing from my experience building projects like Lioncraft, and make a meaningful impact at a company that values innovation.`,
  };

  const questions = Object.keys(responses);

  const handleQuestionClick = (question) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    setMessages((prev) => [...prev, { text: responses[question], sender: 'bot' }]);
  };

  return (
    <div className="chatbot-container">
      <motion.div
        className="chatbot-button"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px #00ff88' }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={chatbotImage} alt="VRJ.AI Chatbot" className="chatbot-image" />
        {showPopup && !isOpen && (
          <motion.div
            className="chatbot-popup"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            Ask Me Anything
          </motion.div>
        )}
      </motion.div>
      {isOpen && (
        <motion.div
          className="chatbot-window"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="chatbot-header">
            <h3>VRJ.AI Chatbot</h3>
            <button onClick={toggleChatbot} className="chatbot-close">
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <p className="chatbot-welcome">
                Hi! I’m VRJ.AI, here to answer common interview questions. Select an option below to get started!
              </p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-options">
            {questions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="chatbot-option-button"
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VrjAiChatbot;