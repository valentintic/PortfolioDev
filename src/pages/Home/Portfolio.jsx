import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiVite, SiFramer, SiTailwindcss, SiJavascript, SiI18Next } from 'react-icons/si';
import './Portfolio.css';

const Portfolio = ({ darkMode }) => {
  const { t } = useTranslation();
  
  // Animación para secciones
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Animación para tarjetas
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  // Lista de tecnologías con iconos
  const technologies = [
    { name: 'React', icon: <FaReact />, desc: t('Biblioteca JavaScript para construir interfaces de usuario') },
    { name: 'Vite', icon: <SiVite />, desc: t('Herramienta de compilación frontend moderna') },
    { name: 'Framer Motion', icon: <SiFramer />, desc: t('Biblioteca de animaciones para React') },
    { name: 'JavaScript', icon: <SiJavascript />, desc: t('Lenguaje de programación principal') },
    { name: 'Node.js', icon: <FaNodeJs />, desc: t('Entorno de ejecución de JavaScript') },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, desc: t('Framework CSS utilitario') },
    { name: 'i18next', icon: <SiI18Next />, desc: t('Sistema de internacionalización') }
  ];

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <motion.section 
        className="portfolio-hero"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1>{t('Sobre este Portfolio')}</h1>
        <div className="gradient-line"></div>
        <p className="subtitle">{t('Un vistazo detrás de escenas')}</p>
      </motion.section>

      <motion.section 
        className="portfolio-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2>{t('Visión General')}</h2>
        <div className="section-content">
          <p>
            {t('Este portfolio ha sido diseñado y desarrollado como una muestra de mis habilidades y proyectos en desarrollo web. El objetivo principal era crear una experiencia interactiva, moderna y accesible que reflejara mi personalidad como desarrollador.')}
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="portfolio-section tech-stack"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2>{t('Tecnologías Utilizadas')}</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div 
              className="tech-card"
              key={tech.name}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="two-column-layout">
        <motion.section 
          className="portfolio-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2>{t('Proceso de Diseño')}</h2>
          <div className="section-content">
            <p>
              {t('El diseño comenzó con bocetos a mano y wireframes de baja fidelidad, seguidos de prototipos en Figma. Me inspiré en las tendencias de diseño minimalista y aplicaciones de "modo oscuro", priorizando la legibilidad y la experiencia de usuario.')}
            </p>
            <ul className="feature-list">
              <li>{t('Diseño responsive que se adapta a cualquier dispositivo')}</li>
              <li>{t('Tema claro/oscuro con transiciones suaves')}</li>
              <li>{t('Animaciones sutiles para mejorar la experiencia de usuario')}</li>
              <li>{t('Tipografía cuidadosamente seleccionada para óptima legibilidad')}</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className="portfolio-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2>{t('Desarrollo y Características')}</h2>
          <div className="section-content">
            <p>
              {t('El desarrollo siguió prácticas modernas de React, con componentes funcionales y hooks. Algunas características destacables incluyen:')}
            </p>
            <ul className="feature-list">
              <li>{t('Internacionalización completa (español e inglés)')}</li>
              <li>{t('Animaciones fluidas con Framer Motion')}</li>
              <li>{t('Sistema de enrutamiento eficiente')}</li>
              <li>{t('Optimización de rendimiento y carga')}</li>
              <li>{t('Componentes reutilizables y código modular')}</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <motion.section 
        className="portfolio-section challenges"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2>{t('Desafíos y Aprendizajes')}</h2>
        <div className="section-content">
          <p>
            {t('Durante el desarrollo de este portfolio, enfrenté varios desafíos que me permitieron aprender y crecer como desarrollador:')}
          </p>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h4>{t('Optimización')}</h4>
              <p>{t('Optimización de animaciones para dispositivos móviles y mejora de rendimiento general')}</p>
            </div>
            <div className="challenge-card">
              <h4>{t('Tematización')}</h4>
              <p>{t('Implementación de cambios de tema fluidos y diseño consistente en ambos modos')}</p>
            </div>
            <div className="challenge-card">
              <h4>{t('Estado')}</h4>
              <p>{t('Gestión eficiente del estado en React a través de componentes anidados')}</p>
            </div>
            <div className="challenge-card">
              <h4>{t('Accesibilidad')}</h4>
              <p>{t('Creación de interfaces accesibles siguiendo estándares WCAG')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="portfolio-section credits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2>{t('Créditos')}</h2>
        <div className="credits-content">
          <ul className="credits-list">
            <li>
              <strong>{t('Diseño e Implementación')}</strong>: Valentín Preutesei
            </li>
            <li>
              <strong>{t('Iconos')}</strong>: React Icons
            </li>
            <li>
              <strong>{t('Tipografía')}</strong>: Google Fonts
            </li>
            <li>
              <strong>{t('Inspiración')}</strong>: Awwwards, Dribbble
            </li>
          </ul>
          
          <div className="repo-link">
            <a href="https://github.com/tuusuario/portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub /> {t('Ver repositorio en GitHub')}
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;