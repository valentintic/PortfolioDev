import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { useState } from 'react';

// Header.jsx
const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('Inicio'), path: '/' },
    { name: t('Proyectos'), path: '/proyectos' },
    { name: t('Contacto'), path: '/contacto' }
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`header ${darkMode ? 'dark' : 'light'}`}
    >
      {/* Logo o nombre */}
      <div className="logo">Valentin Preutesei</div>

      {/* Menú Desktop */}
      <nav className="desktop-nav">
        {links.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Controles */}
      <div className="controls">
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
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </button>

        {/* Hamburguesa solo mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `mobile-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
