import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import BitText from '../../components/BitText';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css';

const skillsData = {
  frontend: [
    { title: 'Dietas Interface', description: 'Una interfaz dinamica para la gestión de dietas.' },
    { title: 'E-Commerce', description: 'Tienda online con carrito y pagos.' },
  ],
  backend: [
    { title: 'API REST Node.js', description: 'API segura y escalable con Express.' },
    { title: 'Auth Service', description: 'Sistema de autenticación con JWT.' },
  ],
  database: [
    { title: 'Gestor de Inventarios', description: 'App con PostgreSQL y Sequelize.' },
    { title: 'Big Data Analytics', description: 'Análisis de datos con MongoDB.' },
  ],
};

const Home = ({ darkMode }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    // Función para obtener datos de GitHub
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/valentinpreutesei');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Error al obtener datos de GitHub:', error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`home-container ${darkMode ? 'dark' : 'light'}`}
    >
      
      {/* Sección Hero */}
      <motion.section
        className="hero-section"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      >
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <BitText text={t('Desarrollador Full Stack')} className="gradient-text" />
          <p>{t('Transformando ideas en soluciones digitales')}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta-button"
          >
            {t('Ver Proyectos')}
          </motion.button>
        </motion.div>
        
      </motion.section>

      <motion.section
  className="about-me-section"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="section-title">Sobre mí</h2>
  <p className="intro-text">
    Soy un Desarrollador Full Stack con amplia experiencia en la construcción de aplicaciones web escalables y optimizadas. Mi enfoque se centra en la arquitectura de software, rendimiento y automatización, aplicando buenas prácticas y metodologías modernas.
  </p>
  <div className="skills-cards">
    <div className="skill-card">
      <h3>Desarrollo Full Stack</h3>
      <p>React.js, Vue.js, ASP.NET Core y Spring Boot.</p>
    </div>
    <div className="skill-card">
      <h3>Cloud Computing & DevOps</h3>
      <p>AWS, Azure, Kubernetes y Terraform.</p>
    </div>
    <div className="skill-card">
      <h3>Aplicaciones Inteligentes</h3>
      <p>ML.NET, Computer Vision y PyTorch.</p>
    </div>
  </div>
  <p className="contact-info">
    <strong>Contacto:</strong> valentinpreutesei@outlook.es
  </p>
  <div className="social-links">
    <a href="https://linkedin.com/in/valentinpreutesei/">LinkedIn</a>
    <a href="https://github.com/valentintic">GitHub</a>
    <a href="https://www.codewars.com/users/Valentin.ps">Codewars</a>
  </div>
</motion.section>




      {/* Sección Mis Habilidades */}
      <motion.section
        className="skills-section"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <h2>{t('Mis Habilidades')}</h2>
        <div className="skills-container">
          {[{ icon: <FaCode />, label: 'Frontend', category: 'frontend' },
            { icon: <FaServer />, label: 'Backend', category: 'backend' },
            { icon: <FaDatabase />, label: 'Bases de Datos', category: 'database' }]
            .map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`skill-card ${selectedCategory === skill.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(skill.category)}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{t(skill.label)}</p>
              </motion.div>
            ))}
        </div>
      </motion.section>
      

      {/* Sección de Proyectos */}
      <motion.section
        className="projects-section"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <h2>{t('Proyectos Destacados')}</h2>
        <div className="projects-container">
          {skillsData[selectedCategory].map((project, index) => (
            <ProjectCard key={index} {...project} darkMode={darkMode} />
          ))}
        </div>
      </motion.section>

    </motion.div>
    
  );
};

export default Home;
