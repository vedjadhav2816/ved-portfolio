import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaPlay, FaPause } from 'react-icons/fa';
import myPhoto from './myphoto.png'; // Import the image
import dustGif from './dust.gif'; // Import the background GIF
import musicMp3 from './music.mp3'; // Import the music file
import '../styles/Hero.css';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Optional: Reset to start on pause
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      console.error('Audio ref is not defined');
    }
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${dustGif})` }}>
      <div className="hero-content">
        <motion.img
          src={myPhoto}
          alt="Ved Ramesh Jadhav"
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm VED RAMESH JADHAV
        </motion.h1>
        <div className="hero-subtitle">
          <TypeAnimation
            sequence={[
              'Web Developer', 2000,
              'Graphics Designer', 2000,
              'Content Creator', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </div>
        <div className="music-control">
          <button onClick={toggleAudio} className="music-toggle">
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
          </button>
          <audio ref={audioRef} src={musicMp3} loop />
        </div>
      </div>
    </div>
  );
};

export default Hero;