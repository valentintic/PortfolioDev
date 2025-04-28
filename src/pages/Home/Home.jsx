import { useState, useEffect, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaServer, 
  FaDatabase, 
  FaCode, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaCloud,
  FaGitAlt,
  FaUser,
  FaPaperPlane,
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import BitText from '../../components/BitText';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css';
import csharpIcon from "../../assets/csharp.webp";
import pythonIcon from "../../assets/python.webp";
import javaIcon from "../../assets/Java.webp";
import javascriptIcon from "../../assets/javascript.webp";
import googleCloudIcon from "../../assets/google-cloud.webp";
import azureIcon from "../../assets/azure.webp";
import awsIcon from "../../assets/aws.webp";
import dockerIcon from "../../assets/docker.webp";
import terraformIcon from "../../assets/terraform.webp";
import kubernetesIcon from "../../assets/kubernetes.webp";
import mongoIcon from "../../assets/mongo.webp";
import mysqlIcon from "../../assets/mysql.webp";
import oracleIcon from "../../assets/oracle.webp";
import sqlServerIcon from "../../assets/sqlserver.webp";
import springbootIcon from "../../assets/springboot.webp";
import aspnetIcon from "../../assets/aspnet.webp";
import reactIcon from "../../assets/react.webp";
import angularIcon from "../../assets/angular.webp";
import vueIcon from "../../assets/vue.webp";
import htmlIcon from "../../assets/html.webp";
import reduxIcon from "../../assets/redux.webp";
import tailwindIcon from "../../assets/tailwind.webp";
import thymeleafIcon from "../../assets/thymeleaf.png";

// Import data from data file
import { 
  skillsData, 
  experienceData, 
  educationData, 
  certificationData, 
  technicalSkillsData 
} from './data';

const Home = ({ darkMode }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formState.name.trim()) {
      tempErrors.name = "El nombre es obligatorio";
      isValid = false;
    }
    
    if (!formState.email) {
      tempErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "El formato del email no es válido";
      isValid = false;
    }
    
    if (!formState.message.trim()) {
      tempErrors.message = "El mensaje es obligatorio";
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      tempErrors.message = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Usar las variables de entorno en vez de valores hardcodeados
      const serviceID = 'service_tpr9irk';
const autoReplyTemplateID = 'template_2dhv8uo';
const contactTemplateID = 'template_645ay7j';
const publicKey = 'FKmGldsyDGBMAF9vj';
      
      console.log("Enviando email con:", { serviceID, autoReplyTemplateID, contactTemplateID, publicKey });
      
      // 1. Parámetros para el auto-reply (template_2dhv8uo)
      // Según tus comentarios, este template usa: name, email, message, title
      const autoReplyParams = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
        title: formState.message,
      };
      
      console.log("Parámetros auto-reply:", autoReplyParams);
      
      // Enviar el auto-reply
      const autoReplyResponse = await emailjs.send(
        serviceID, 
        autoReplyTemplateID, 
        autoReplyParams, 
        publicKey
      );
      
      console.log('Auto-reply enviado:', autoReplyResponse.status, autoReplyResponse.text);
      
      // 2. Parámetros para la notificación (template_645ay7j)
      // Este template también usa: name, email, message, title
      const notificationParams = {
        name: formState.email,
        email: "valentinpreutesei@outlook.es",
        message: formState.message,
        title: "Nuevo mensaje desde el Portfolio",
      };
      
      console.log("Parámetros notificación:", notificationParams);
      
      // Enviar la notificación
      const notificationResponse = await emailjs.send(
        serviceID, 
        contactTemplateID, 
        notificationParams, 
        publicKey
      );
      
      console.log('Notificación enviada:', notificationResponse.status, notificationResponse.text);
      
      // Mostrar mensaje de éxito
      setFormStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
      });
      
      // Limpiar formulario
      setFormState({ name: '', email: '', message: '' });
      setErrors({});
      
    } catch (error) {
      console.error('Error completo:', error);
      
      let errorMessage = 'Error al enviar el mensaje. ';
      
      if (error.status === 400) {
        errorMessage += 'Verifica que los datos ingresados sean correctos.';
      } else if (error.status === 422) {
        errorMessage += 'Problema con la configuración de los parámetros del correo.';
      } else if (error.status === 0 || error.status >= 500) {
        errorMessage += 'Hay un problema con el servicio de correo.';
      } else {
        errorMessage += 'Por favor, inténtalo de nuevo más tarde.';
      }
      
      setFormStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // 100px threshold
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const imageUrls = [
      reactIcon, vueIcon, angularIcon, javascriptIcon, htmlIcon, 
      reduxIcon, tailwindIcon, thymeleafIcon, aspnetIcon, springbootIcon, 
      pythonIcon, javaIcon, csharpIcon, mongoIcon, mysqlIcon, 
      sqlServerIcon, oracleIcon, awsIcon, azureIcon, dockerIcon, 
      kubernetesIcon, terraformIcon, googleCloudIcon
    ];
    
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
    
    const timeout = setTimeout(() => setImagesLoaded(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Inicializar EmailJS con la clave pública
    const initEmailJS = () => {
      try {
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        
        emailjs.init(publicKey);
        console.log("EmailJS inicializado correctamente");
      } catch (error) {
        console.error("Error inicializando EmailJS:", error);
      }
    };
    
    initEmailJS();
  }, []);

  const yearsOfExperience = useMemo(() => {
    const startYear = 2024; // Starting year
    const currentYear = new Date().getFullYear();
    return currentYear - startYear + 1; // +1 to include the current year
  }, []);
  
  const skillIconsMap = useMemo(() => ({
    'React': (
      <div
        className="skill-icon react"
        style={{
          backgroundImage: `url(${reactIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Vue.js': (
      <div
        className="skill-icon vue"
        style={{
          backgroundImage: `url(${vueIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Angular': (
      <div
        className="skill-icon angular"
        style={{
          backgroundImage: `url(${angularIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Next.js': <SiNextdotjs className="skill-icon nextjs" />,
    'JavaScript/TypeScript':  (
      <div
        className="skill-icon javascript"
        style={{
          backgroundImage: `url(${javascriptIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'TypeScript': <SiTypescript className="skill-icon typescript" />,
    'HTML5/CSS3': (
      <div
        className="skill-icon html"
        style={{
          backgroundImage: `url(${htmlIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Tailwind CSS': (
      <div
        className="skill-icon tailwind"
        style={{
          backgroundImage: `url(${tailwindIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Redux': (
      <div
        className="skill-icon redux"
        style={{
          backgroundImage: `url(${reduxIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Thymeleaf': (
      <div
        className="skill-icon thymeleaf"
        style={{
          backgroundImage: `url(${thymeleafIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'ASP.NET Core': (
      <div
        className="skill-icon aspnet"
        style={{
          backgroundImage: `url(${aspnetIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Java Spring Boot': (
      <div
        className="skill-icon springboot"
        style={{
          backgroundImage: `url(${springbootIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Python': (
      <div
        className="skill-icon python"
        style={{
          backgroundImage: `url(${pythonIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Java (17-21)':(
      <div
        className="skill-icon java"
        style={{
          backgroundImage: `url(${javaIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'C#': (
    <div
      className="skill-icon csharp"
      style={{
        backgroundImage: `url(${csharpIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '40px',
        height: '40px'
      }}
    />
  ),
    'MongoDB': (
      <div
        className="skill-icon mongodb"
        style={{
          backgroundImage: `url(${mongoIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'MySQL': (
      <div
        className="skill-icon mysql"
        style={{
          backgroundImage: `url(${mysqlIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'SQL Server': (
      <div
        className="skill-icon sqlserver"
        style={{
          backgroundImage: `url(${sqlServerIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Oracle': (
      <div
        className="skill-icon oracle"
        style={{
          backgroundImage: `url(${oracleIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'AWS': (
      <div
        className="skill-icon aws"
        style={{
          backgroundImage: `url(${awsIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Azure': (<div
      className="skill-icon azure"
      style={{
        backgroundImage: `url(${azureIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '40px',
        height: '40px'
      }}
    />),
    'Docker': (
      <div
        className="skill-icon docker"
        style={{
          backgroundImage: `url(${dockerIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Kubernetes': (
      <div
        className="skill-icon kubernetes"
        style={{
          backgroundImage: `url(${kubernetesIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Terraform': (
      <div
        className="skill-icon terraform"
        style={{
          backgroundImage: `url(${terraformIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
    'Git': <FaGitAlt className="skill-icon git" />,
    'Google Cloud': (
      <div
        className="skill-icon google-cloud"
        style={{
          backgroundImage: `url(${googleCloudIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '40px',
          height: '40px'
        }}
      />
    ),
  }), []);

  const skillsByCategory = useMemo(() => {
    return {
      frontend: technicalSkillsData.frontend.map(skill => ({
        ...skill,
        icon: skillIconsMap[skill.name] || <FaCode className="skill-icon" />
      })),
      backend: technicalSkillsData.backend.map(skill => ({
        ...skill,
        icon: skillIconsMap[skill.name] || <FaServer className="skill-icon" />
      })),
      database: technicalSkillsData.database.map(skill => ({
        ...skill,
        icon: skillIconsMap[skill.name] || <FaDatabase className="skill-icon" />
      })),
      devops: technicalSkillsData.devops.map(skill => ({
        ...skill,
        icon: skillIconsMap[skill.name] || <FaCloud className="skill-icon" />
      })),
      languages: technicalSkillsData.languages.map(skill => ({
        ...skill,
        icon: skillIconsMap[skill.name] || <BiCodeAlt className="skill-icon" />
      }))
    };
  }, [technicalSkillsData, skillIconsMap]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px' }
    );
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  const navigationSections = useMemo(() => 
    ['hero', 'about', 'projects', 'experience', 'contact'], 
  []);

  const projectCategories = useMemo(() => [
    { icon: <FaCode />, label: 'Frontend', category: 'frontend' },
    { icon: <FaServer />, label: 'Backend', category: 'backend' },
  ], []);

  const expertiseCardsData = useMemo(() => [
    {
      title: "🛠 Tech Stack Principal",
      items: [
        `<strong>Frontend:</strong> ${technicalSkillsData.frontend.slice(0, 3).map(skill => skill.name).join(', ')}`,
        `<strong>Backend:</strong> ${technicalSkillsData.backend.slice(0, 3).map(skill => skill.name).join(', ')}`,
        `<strong>Cloud:</strong> ${technicalSkillsData.devops.slice(3, 5).map(skill => skill.name).join(', ')}`,
        `<strong>DB:</strong> ${technicalSkillsData.database.slice(0, 3).map(skill => skill.name).join(', ')}`
      ]
    },
    {
      title: "🚀 Experiencia Clave",
      items: [
        `${experienceData[0].position} en ${experienceData[0].company}`,
        ...experienceData[0].achievements.slice(0, 3)
      ]
    },
    {
      title: "🏆 Certificaciones",
      items: certificationData.slice(0, 4).map(cert => `${cert.name} (${cert.issuer})`)
    }
  ], [technicalSkillsData, experienceData, certificationData]);

  const skillCategories = useMemo(() => [
    { id: 'frontend', label: 'Frontend', icon: <FaCode /> },
    { id: 'backend', label: 'Backend', icon: <FaServer /> },
    { id: 'database', label: 'Database', icon: <FaDatabase /> },
    { id: 'devops', label: 'DevOps', icon: <FaCloud /> },
    { id: 'languages', label: 'Languages', icon: <BiCodeAlt /> }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`home-container ${darkMode ? 'dark' : 'light'}`}
    >
      <nav className="section-navigator" aria-label="Section navigation">
        {navigationSections.map((section) => (
          <a 
            key={section}
            href={`#${section}`}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            aria-label={`Navigate to ${t(section.charAt(0).toUpperCase() + section.slice(1))} section`}
            title={t(section.charAt(0).toUpperCase() + section.slice(1))}
          />
        ))}
      </nav>

      <motion.section 
        id="hero"
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-text"
          >
            <h1 className="hero-name">Valentín Preutesei</h1>
            <BitText text={t('Full Stack Developer')} className="gradient-text" />
            <p className="hero-tagline">{t('Transformando ideas en soluciones digitales')}</p>
            <div className="hero-cta">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="primary-button"
              >
                {t('Ver Proyectos')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="secondary-button"
              >
                {t('Contacto')}
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <div className="profile-background-shape"></div>
              <div className="profile-background-accent"></div>
              <div className="profile-glow"></div>
              <div className="profile-image-placeholder">
                <div className="profile-image-inner"></div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          style={{ opacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <a href="#about" aria-label={t('Scroll down to About section')}>↓</a>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">{t('Perfil Profesional')}</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="about-intro">
            Como Desarrollador Full Stack especializado en tecnologías modernas, me apasiona crear soluciones digitales que impacten positivamente en la vida de las personas. Permíteme compartir un poco más sobre mi trayectoria y pasiones.
            <br /><br />
          </p>
          <p className="about-details">
            Mi enfoque profesional combina el desarrollo Full Stack con soluciones cloud, siempre buscando la innovación y la eficiencia en cada proyecto. Más allá del código, soy un entusiasta de la astronomía y la ciencia ficción, lo que alimenta mi curiosidad y mi deseo constante de aprendizaje.
            <br /><br />
            Mi otra gran pasión es el fitness y la salud. Tras trabajar durante un año en el sector y mantener una rutina de entrenamiento desde los 16 años, he desarrollado proyectos orientados a facilitar el acceso al mundo del fitness. Mi objetivo es crear herramientas digitales que eliminen barreras y hagan más accesible un estilo de vida saludable para todos.
          </p>
          </motion.div>
          
          <motion.div 
            className="skills-icons-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            
            <div className="skills-grid" style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }}>
              {Object.keys(skillsByCategory).map(category => (
                <motion.div key={category} className="skill-category-section">
                  <h4 className="skill-section-heading">
                    {category === 'frontend' && <><FaCode className="section-icon" /> Frontend</>}
                    {category === 'backend' && <><FaServer className="section-icon" /> Backend</>}
                    {category === 'database' && <><FaDatabase className="section-icon" /> Bases de datos</>}
                    {category === 'devops' && <><FaCloud className="section-icon" /> DevOps & Cloud</>}
                    {category === 'languages' && <><BiCodeAlt className="section-icon" /> Lenguajes</>}
                  </h4>
                  <div className="skill-icons-grid">
                    {skillsByCategory[category].map((skill, idx) => (
                      <motion.div 
                        key={`${category}-${idx}`}
                        className="skill-icon-wrapper"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.3,
                          delay: Math.min(idx * 0.03, 0.5)
                        }}
                      >
                        <div className="skill-icon-container">
                          <div className="skill-icon-image">
                            {skill.icon}
                          </div>
                          <span className="skill-name-label">{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="expertise-cards">
          {expertiseCardsData.map((card, index) => (
            <motion.div 
              key={index}
              className="expertise-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
            >
              <h3>{card.title}</h3>
              <ul className="expertise-list">
                {card.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="contact-summary"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{t('Contacto Directo')}</h3>
          <div className="contact-links">
            <motion.a 
              href="mailto:valentinpreutesei@outlook.es" 
              className="contact-link" 
              aria-label="Email"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="contact-icon" />
              valentinpreutesei@outlook.es
            </motion.a>
            <motion.a 
              href="tel:+34603148970" 
              className="contact-link" 
              aria-label="Phone"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="contact-icon" />
              +34 603 14 89 70
            </motion.a>
          </div>
          <div className="social-links">
            <motion.a 
              href="https://linkedin.com/in/valentinpreutesei/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="LinkedIn profile"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="social-icon" /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/valentintic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="GitHub profile"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="social-icon" /> GitHub
            </motion.a>
            <motion.a 
              href="https://www.codewars.com/users/Valentin.ps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link" 
              aria-label="CodeWars profile"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiCodeAlt className="social-icon" /> CodeWars
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          style={{ opacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <a href="#project" aria-label={t('Scroll down to Projects section')}>↓</a>
        </motion.div>
      </motion.section>

      <motion.section
        id="projects"
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t('Proyectos')}</h2>
        
        <div className="category-tabs">
          {projectCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`category-tab ${selectedCategory === category.category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              aria-pressed={selectedCategory === category.category}
              aria-label={t(category.label)}
            >
              <span className="category-icon" aria-hidden="true">{category.icon}</span>
              <span className="category-label">{t(category.label)}</span>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className={`projects-grid ${
            skillsData[selectedCategory].length === 1 
              ? 'single-card' 
              : skillsData[selectedCategory].length === 2 
                ? 'two-cards' 
                : skillsData[selectedCategory].length === 3 
                  ? 'three-cards' 
                  : 'multi-cards'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          key={selectedCategory}
        >
          {skillsData[selectedCategory].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard 
                {...project}
                darkMode={darkMode}
                images={project.images}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="experience"
        className="experience-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t('Experiencia Profesional')}</h2>
        
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="experience-content">
                <div className="experience-date">{exp.period}</div>
                <h3 className="experience-title">{exp.position}</h3>
                <h4 className="experience-company">{exp.company} • {exp.location}</h4>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-achievements">
                  <h5>Logros principales:</h5>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{t('Contacto')}</h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{t('¿Tienes un proyecto en mente?')}</h3>
            <p>
              {t('Estoy disponible para discutir nuevas oportunidades y colaboraciones. No dudes en contactarme para cualquier consulta o propuesta.')}
            </p>
            
            <div className="contact-details">
              <div className="contact-method">
                <FaEnvelope className="contact-method-icon" />
                <div>
                  <h4>{t('Email')}</h4>
                  <a href="mailto:valentinpreutesei@outlook.es">
                    valentinpreutesei@outlook.es
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaPhone className="contact-method-icon" />
                <div>
                  <h4>{t('Teléfono')}</h4>
                  <a href="tel:+34603148970">+34 603 14 89 70</a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaLinkedin className="contact-method-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/valentinpreutesei/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/valentinpreutesei
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser /> {t('Nombre')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder={t('Tu nombre completo')}
                  required
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope /> {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder={t('tu@email.com')}
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaPaperPlane /> {t('Mensaje')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder={t('Cuéntame sobre tu proyecto o consulta')}
                  required
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('Enviando...') : t('Enviar mensaje')}
              </button>
              
              {formStatus.message && (
                <motion.div 
                  className={`form-message form-${formStatus.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.section>
      
    </motion.div>
  );
};

export default Home;