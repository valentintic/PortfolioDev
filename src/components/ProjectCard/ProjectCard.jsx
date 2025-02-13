import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, darkMode, liveUrl, codeUrl, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className={`project-card ${darkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
    >
      <div className="image-carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} screenshot ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        <div className="carousel-controls">
          <button onClick={handlePrev} className="nav-button prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </button>
          <button onClick={handleNext} className="nav-button next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </button>
        </div>

        <div className="image-indicators">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

        <div className="card-links">
          {codeUrl && (
            <motion.a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="View code"
              whileHover={{ scale: 1.1 }}
            >
              <FiGithub className="link-icon" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Live demo"
              whileHover={{ scale: 1.1 }}
            >
              <FiExternalLink className="link-icon" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <div className="technologies-grid">
          {technologies?.map((tech, index) => (
            <motion.div 
              key={index} 
              className="tech-item"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;