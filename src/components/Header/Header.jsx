import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = ({ darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation()

  const links = [
    { name: t('Inicio'), path: '/' },
    { name: t('Proyectos'), path: '/proyectos' },
    { name: t('Contacto'), path: '/contacto' }
  ]

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`header ${darkMode ? 'dark' : 'light'}`} // Aplica la clase según el tema
    >
      <nav>
        {links.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <NavLink to={link.path} activeClassName="active-link">
              {link.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>
      
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
        aria-label={t('changeTheme')}
      >
        {darkMode ? <FiMoon /> : <FiSun />}
      </button>

      <div className="language-selector">
        <button onClick={() => handleLanguageChange('es')}>ES</button>
        <button onClick={() => handleLanguageChange('en')}>EN</button>
      </div>
    </motion.header>
  )
}

export default Header
