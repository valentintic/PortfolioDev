import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import BitText from '../../components/BitText';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Home.css';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const skillsData = {
  frontend: [
    { 
      title: 'Dietas Interface', 
      description: 'Una interfaz dinámica para la gestión de dietas.',
      images: [
        'https://picsum.photos/id/180/400/300',
        'https://picsum.photos/id/181/400/300',
        'https://picsum.photos/id/182/400/300'
      ]
    },
    { 
      title: 'E-Commerce', 
      description: 'Tienda online con carrito y pagos.',
      images: [
        'https://picsum.photos/id/190/400/300',
        'https://picsum.photos/id/191/400/300',
        'https://picsum.photos/id/192/400/300'
      ]
    },
  ],
  backend: [
    { 
      title: 'API REST Node.js', 
      description: 'API segura y escalable con Express.',
      images: [
        'https://picsum.photos/id/200/400/300',
        'https://picsum.photos/id/201/400/300',
        'https://picsum.photos/id/202/400/300'
      ]
    },
    { 
      title: 'Auth Service', 
      description: 'Sistema de autenticación con JWT.',
      images: [
        'https://picsum.photos/id/210/400/300',
        'https://picsum.photos/id/211/400/300',
        'https://picsum.photos/id/212/400/300'
      ]
    },
  ],
  database: [
    { 
      title: 'Gestor de Inventarios', 
      description: 'App con PostgreSQL y Sequelize.',
      images: [
        'https://picsum.photos/id/220/400/300',
        'https://picsum.photos/id/221/400/300',
        'https://picsum.photos/id/222/400/300'
      ]
    },
    { 
      title: 'Big Data Analytics', 
      description: 'Análisis de datos con MongoDB.',
      images: [
        'https://picsum.photos/id/230/400/300',
        'https://picsum.photos/id/231/400/300',
        'https://picsum.photos/id/232/400/300'
      ]
    },
  ],
};

const Home = ({ darkMode }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('frontend');

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
  <h2 className="section-title">Perfil Profesional</h2>
  <p className="intro-text">
    Desarrollador Full Stack especializado en arquitecturas cloud-native con 2+ años de experiencia construyendo soluciones escalables. 
    Experto en React y Spring Boot, he liderado implementaciones en AWS y Kubernetes para Anadat Technology, optimizando 
    rendimiento en un 40% mediante arquitecturas serverless. Combinando mi formación en Tajamar con certificaciones en 
    Azure y Power Platform, desarrollo aplicaciones full-stack con enfoque en seguridad y escalabilidad.
  </p>

  <div className="skills-cards">
    <div className="skill-card">
      <h3>🛠 Tech Stack Principal</h3>
      <p>
        <strong>Frontend:</strong> React 18, Vue.js 3, Angular 15+<br/>
        <strong>Backend:</strong> Java 21, Spring Boot 3, ASP.NET Core<br/>
        <strong>Cloud:</strong> AWS (EC2, S3, Lambda), Azure DevOps, Terraform<br/>
        <strong>DB:</strong> MySQL, MongoDB, Oracle Cloud
      </p>
    </div>

    <div className="skill-card">
      <h3>🚀 Experiencia Clave</h3>
      <p>
        • Arquitectura de microservicios para HelOps (Spring Boot + React)<br/>
        • Implementación CI/CD con GitHub Actions y AWS CodePipeline<br/>
        • Sistema de reconocimiento facial con PyTorch (95% precisión)<br/>
        • Integración OAuth 2.0 + Google Fit API para app de nutrición
      </p>
    </div>

    <div className="skill-card">
      <h3>🏆 Logros Recientes</h3>
      <p>
        • Reducción de costos AWS en 35% mediante auto-scaling groups<br/>
        • Mejor rendimiento API (de 1200ms a 450ms latency)<br/>
        • Certificación PL-400: Microsoft Power Platform<br/>
        • 500+ puntos Codewars (Algoritmos avanzados)
      </p>
    </div>
  </div>

  <div className="contact-info">
    <strong>Contacto Directo:</strong><br/>
    <a href="mailto:valentinpreutesei@outlook.es" className="email-link">
      valentinpreutesei@outlook.es
    </a> | 
    <a href="tel:+34603148970" className="phone-link">
      +34 603 14 89 70
    </a>
    <div className="social-links">
    <a href="https://linkedin.com/in/valentinpreutesei/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="icon" /> Perfil LinkedIn
    </a>
    <a href="https://github.com/valentintic" target="_blank" rel="noopener noreferrer">
    <FaGithub className="icon" /> GitHub
    </a>
    <a href="https://www.codewars.com/users/Valentin.ps" target="_blank" rel="noopener noreferrer" >
    <FaCode className="icon" /> {/* Para Codewars */} CodeWars
    </a>
  </div>
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
      <div className="projects-container">
        {skillsData[selectedCategory].map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            darkMode={darkMode}
            images={project.images}
          />
        ))}
      </div>

      {/* Sección de Contacto */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>{t('Contacto')}</h2>
        <ContactForm />
      </motion.section>

    </motion.div>
    
  );
};

export default Home;
