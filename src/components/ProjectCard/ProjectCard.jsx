// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, darkMode }) => {
  return (
    <div className={`project-card ${darkMode ? 'dark' : 'light'}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
