import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCalendar, FiUser, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Project.css';

import { skillsData } from './data'; 

const Project = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    const systemPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = storedMode === 'dark' || (storedMode === null && systemPreference);
    setDarkMode(isDarkMode);

    const darkModeListener = (e) => {
      if (localStorage.getItem('theme') === null) {
        setDarkMode(e.matches);
      }
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', darkModeListener);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setImageLoaded(false);
    const findProject = () => {
      const allProjects = [
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.database
      ];
      const foundProject = allProjects.find(proj => proj.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
        if (foundProject.images && foundProject.images.length > 0) {
          const img = new Image();
          img.src = foundProject.images[0];
          img.onload = () => setImageLoaded(true);
        } else {
          setImageLoaded(true);
        }
      } else {
        setImageLoaded(true);
      }
      setLoading(false);
    };
    setTimeout(findProject, 300);
  }, [id]);

  const handleNext = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrev = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => {
    if (project?.images && project.images.length > 1) {
      setLightboxImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevLightboxImage = () => {
    if (project?.images && project.images.length > 1) {
      setLightboxImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      switch (e.key) {
        case 'ArrowRight':
          nextLightboxImage();
          break;
        case 'ArrowLeft':
          prevLightboxImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, project]);

  if (loading) {
    return (
      <motion.div 
        className={`project-container ${darkMode ? 'dark' : 'light'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>{t('project.loading', 'Cargando proyecto...')}</p>
        </div>
      </motion.div>
    );
  }

  if (!project) {
    return (
      <motion.div 
        className={`project-container ${darkMode ? 'dark' : 'light'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="not-found">
          <h2>{t('project.notFound', 'Proyecto no encontrado')}</h2>
          <p>{t('project.notFoundDescription', 'Lo sentimos, el proyecto que buscas no existe.')}</p>
          <Link to="/" className="back-link">
            <FiArrowLeft /> {t('project.backToPortfolio', 'Volver al portfolio')}
          </Link>
        </div>
      </motion.div>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.div 
      className={`project-container ${darkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-header">
        <Link to="/" className="back-link">
          <FiArrowLeft /> {t('project.backToPortfolio', 'Volver al portfolio')}
        </Link>
        <h1 className="project-title">{t(project.title)}</h1>
      </div>

      <div className="project-content">
        {hasImages ? (
          <div className="project-gallery">
            <div className="image-carousel">
              {imageLoaded ? (
                <div className="carousel-inner">
                  {project.images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`${t(project.title)} screenshot ${index + 1}`}
                      className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === currentImageIndex ? 1 : 0,
                        scale: index === currentImageIndex ? 1 : 0.95
                      }}
                      onClick={() => openLightbox(index)}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>
              ) : (
                <div className="image-loading">
                  <div className="spinner image-spinner"></div>
                </div>
              )}

              {hasImages && project.images.length > 1 && imageLoaded && (
                <>
                  <div className="carousel-controls">
                    <button onClick={handlePrev} className="nav-button prev">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button onClick={handleNext} className="nav-button next">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                  </div>

                  <div className="image-indicators">
                    {project.images.map((_, index) => (
                      <button 
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="project-gallery no-images">
            <div className="project-placeholder">
              <FaCode className="placeholder-icon" />
              <p>{t('project.noImages', 'No hay imágenes disponibles para este proyecto')}</p>
            </div>
          </div>
        )}

        <div className="project-details">
          <div className="project-meta">
            <div className="meta-item">
              <FiCalendar className="meta-icon" />
              <span>{project.year}</span>
            </div>
            {project.role && (
              <div className="meta-item">
                <FiUser className="meta-icon" />
                <span>{project.role}</span>
              </div>
            )}
          </div>

          <div className="project-description">
            <h2>{t('project.description', 'Descripción')}</h2>
            <p>{t(project.description)}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="project-features">
              <h2>{t('project.features', 'Características')}</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {t(feature)}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              <h2>{t('project.technologies', 'Tecnologías')}</h2>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="tech-item"
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {t(tech)}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="project-links">
            {project.repository && (
              <motion.a 
                href={project.repository} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link repo-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="link-icon" />
                <span>{t('project.viewRepository', 'Ver repositorio')}</span>
              </motion.a>
            )}
            
            {project.demo && (
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="link-icon" />
                <span>{t('project.viewDemo', 'Ver demo')}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && hasImages && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label={t('project.closeLightbox', 'Cerrar vista ampliada')}>
              <FiX />
            </button>
            
            <div className="lightbox-content">
              <motion.img 
                src={project.images[lightboxImageIndex]} 
                alt={`${t(project.title)} vista ampliada`}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="lightbox-counter">
                {lightboxImageIndex + 1} / {project.images.length}
              </div>
              
              {project.images.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav prev" 
                    onClick={prevLightboxImage}
                    aria-label={t('project.previousImage', 'Imagen anterior')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>

                  <button 
                    className="lightbox-nav next" 
                    onClick={nextLightboxImage}
                    aria-label={t('project.nextImage', 'Imagen siguiente')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            <div className="lightbox-thumbnails">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`lightbox-thumb ${idx === lightboxImageIndex ? 'active' : ''}`}
                  onClick={() => setLightboxImageIndex(idx)}
                >
                  <img src={img} alt={`${t('project.thumbnail', 'Miniatura')} ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;