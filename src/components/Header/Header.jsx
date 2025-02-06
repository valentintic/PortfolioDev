import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('Inicio'), path: '/' },
    { name: t('Proyectos'), path: '/proyectos' },
    { name: t('Contacto'), path: '/contacto' }
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`header ${darkMode ? 'dark' : 'light'}`}
    >
      <nav className="nav-links">
        {links.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="nav-item"
          >
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>
      
      <div className="header-controls">
        <motion.button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
          aria-label={t('changeTheme')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </motion.button>

        <div className="language-selector">
          <motion.button 
            onClick={() => handleLanguageChange('es')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="language-btn"
          >
            ES
          </motion.button>
          <motion.button 
            onClick={() => handleLanguageChange('en')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="language-btn"
          >
            EN
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
