import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiDownload, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { useState, useEffect } from 'react';
// Importamos los CV
import cvES from '../../assets/ValentínPreuteseiCV.pdf';
import cvEN from '../../assets/ValentinPreuteseiCVEnglish.pdf';

// Header.jsx
const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t, i18n } = useTranslation();
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Determinar qué CV mostrar según el idioma
  const getCurrentCV = () => {
    return i18n.language === 'es' ? cvES : cvEN;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detectar sección activa cuando estamos en Home
      if (isHomePage) {
        const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Enlaces de navegación actualizados para secciones
  const navLinks = [
    { name: t('Inicio'), section: 'hero' },
    { name: t('Proyectos'), section: 'projects' },
    { name: t('Contacto'), section: 'contact' }
  ];

  // Manejar navegación a secciones
  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);
    
    if (!isHomePage) {
      // Si no estamos en Home, primero navegar a Home
      navigate('/');
      // Esperar a que se complete la navegación antes de desplazarse
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en Home, solo desplazarse a la sección
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  // Mejorar la función de apertura del menú
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Al abrir el menú, bloquear scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Al cerrar, restaurar scroll
      document.body.style.overflow = '';
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`header ${darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}
    >
      {/* Logo o nombre */}
      <div className="logo" onClick={() => handleNavigation('hero')}>Valentin Preutesei</div>

      {/* Menú Desktop */}
      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a 
            key={link.section}
            href={`#${link.section}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(link.section);
            }}
            className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Controles */}
      <div className="controls">
        {/* Botón de descarga CV */}
        <a 
          href={getCurrentCV()} 
          download={i18n.language === 'es' ? "CV_Valentin_Preutesei_ES.pdf" : "CV_Valentin_Preutesei_EN.pdf"}
          className="cv-download-btn"
        >
          <FiDownload className="download-icon" />
          <span className="download-text">{t('CV')}</span>
        </a>

        <div className="language-selector">
          <button
            onClick={() => handleLanguageChange('es')}
            className={`lang-btn ${i18n.language === 'es' ? 'active-lang' : ''}`}
          >
            ES
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`lang-btn ${i18n.language === 'en' ? 'active-lang' : ''}`}
          >
            EN
          </button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-btn"
          aria-label={darkMode ? t('Cambiar a modo claro') : t('Cambiar a modo oscuro')}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Hamburguesa solo mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t('Cerrar menú') : t('Abrir menú')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Agregar justo antes del div mobile-menu */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Menú Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Botón para cerrar el menú móvil */}
        <button 
          className="mobile-menu-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label={t('Cerrar menú')}
        >
          <span></span>
          <span></span>
        </button>
        
        {navLinks.map((link) => (
          <a 
            key={link.section}
            href={`#${link.section}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(link.section);
            }}
            className={`mobile-link ${activeSection === link.section ? 'active' : ''}`}
          >
            {link.name}
          </a>
        ))}
        
        {/* Botón de descarga CV en menú móvil */}
        <a 
          href={getCurrentCV()} 
          download={i18n.language === 'es' ? "CV_Valentin_Preutesei_ES.pdf" : "CV_Valentin_Preutesei_EN.pdf"}
          className="mobile-cv-download"
        >
          <FiDownload className="download-icon" /> {t('Descargar CV')}
        </a>
      </div>
    </motion.header>
  );
};

export default Header;