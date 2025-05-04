import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiCode, FiLayers, FiCpu, FiStar, FiExternalLink } from 'react-icons/fi';
import { 
  SiReact, SiJavascript, SiCss3, 
  SiVite, SiFramer, SiThreedotjs,
  SiReactrouter, SiI18Next 
} from 'react-icons/si';
import './AboutProject.css';

const AboutProject = ({ darkMode }) => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      icon: <SiReact />,
      name: 'React',
      description: t('aboutProject.technologies.tech.react'),
      color: '#61DAFB'
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
      description: t('aboutProject.technologies.tech.javascript'),
      color: '#F7DF1E'
    },
    {
      icon: <SiCss3 />,
      name: 'CSS3',
      description: t('aboutProject.technologies.tech.css'),
      color: '#1572B6'
    },
    {
      icon: <SiVite />,
      name: 'Vite',
      description: t('aboutProject.technologies.tech.vite'),
      color: '#646CFF'
    },
    {
      icon: <SiFramer />,
      name: 'Framer Motion',
      description: t('aboutProject.technologies.tech.framer'),
      color: '#0055FF'
    },
    {
      icon: <SiThreedotjs />,
      name: 'Three.js',
      description: t('aboutProject.technologies.tech.threejs'),
      color: '#000000'
    },
    {
      icon: <SiReactrouter />,
      name: 'React Router',
      description: t('aboutProject.technologies.tech.router'),
      color: '#CA4245'
    },
    {
      icon: <SiI18Next />,
      name: 'i18next',
      description: t('aboutProject.technologies.tech.i18n'),
      color: '#26A69A'
    },
  ];

  const features = [
    {
      icon: <FiLayers />,
      title: t('aboutProject.features.responsive.title'),
      description: t('aboutProject.features.responsive.desc')
    },
    {
      icon: <FiCpu />,
      title: t('aboutProject.features.performance.title'),
      description: t('aboutProject.features.performance.desc')
    },
    {
      icon: <FiStar />,
      title: t('aboutProject.features.animation.title'),
      description: t('aboutProject.features.animation.desc')
    }
  ];

  const handleTechClick = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <motion.div 
      className={`about-project-container ${darkMode ? 'dark-mode' : 'light-mode'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="project-hero">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {t('aboutProject.title')}
        </motion.h1>
        <div className="gradient-line"></div>
        <motion.p 
          className="subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {t('aboutProject.subtitle')}
        </motion.p>
      </section>

      <motion.section 
        className="project-section overview-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="cosmic-particles"></div>
        <div className="section-content">
          <div className="section-header">
            <h2>{t('aboutProject.overview.title')}</h2>
            <div className="header-decoration"></div>
          </div>
          <motion.div 
            className="overview-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p>{t('aboutProject.overview.description1')}</p>
            <p>{t('aboutProject.overview.description2')}</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                className="feature-card"
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: darkMode 
                    ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 107, 0.2)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 15px rgba(255, 107, 107, 0.15)' 
                }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="project-section tech-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="section-content">
          <div className="section-header">
            <h2>{t('aboutProject.technologies.title')}</h2>
            <div className="header-decoration"></div>
          </div>
          <p className="tech-description">{t('aboutProject.technologies.description')}</p>
          
          <div className="tech-grid">
            {technologies.map((tech, index) => (
                <motion.div 
                className={`tech-card ${selectedTech === tech ? 'selected' : ''}`}
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                    y: -5, 
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(${tech.color === '#000000' ? '255, 255, 255' : tech.color.replace('#', '').match(/.{2}/g).map(c => parseInt(c, 16)).join(', ')}, 0.2)`
                }}
                onClick={() => handleTechClick(tech)}
                >
                <div className="tech-icon-wrapper" style={{ backgroundColor: `${tech.color}20` }}>
                    <div className="tech-icon" style={{ color: tech.color }}>{tech.icon}</div>
                </div>
                <h3>{tech.name}</h3>
                
                {/* Simplifica la animación para asegurar que el contenido se muestre */}
                {selectedTech === tech && (
                    <motion.div 
                    className="tech-description-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    >
                    {tech.description}
                    </motion.div>
                )}
                </motion.div>
            ))}
            </div>
        </div>
      </motion.section>

      <motion.section 
        className="project-section workflow-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="section-content">
          <div className="section-header">
            <h2>{t('Proceso de Desarrollo')}</h2>
            <div className="header-decoration"></div>
          </div>
          
          <div className="workflow-grid">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h3>{t('Diseño y Planificación')}</h3>
              <p>{t('El portfolio fue diseñado priorizando una experiencia visual inmersiva y una navegación intuitiva. Se elaboraron wireframes y se definió la arquitectura de la información.')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h3>{t('Desarrollo Frontend')}</h3>
              <p>{t('Implementación de componentes React reutilizables, animaciones con Framer Motion y visualizaciones 3D con Three.js para crear una experiencia interactiva.')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h3>{t('Optimización')}</h3>
              <p>{t('Mejora del rendimiento mediante lazy loading, optimización de recursos gráficos y implementación de técnicas de renderizado eficiente.')}</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <h3>{t('Despliegue y CI/CD')}</h3>
              <p>{t('Configuración de un pipeline de integración y despliegue continuo con GitHub Actions y Azure Static Web Apps para actualizaciones automáticas.')}</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.div 
        className="cta-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="https://github.com/valentintic/PortfolioDev" target="_blank" rel="noopener noreferrer" className="repo-link">
          <FiGithub /> {t('aboutProject.viewSource')}
        </a>
        
        <a href="/" className="portfolio-link">
          <FiExternalLink /> {t('Explorar Portfolio')}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AboutProject;