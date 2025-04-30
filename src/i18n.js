// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Aquí definimos las traducciones para los diferentes idiomas
const resources = {
  en: {
    translation: {
      "Inicio": "Home",
      "Proyectos": "Projects",
      "Contacto": "Contact",
      "changeTheme": "Change Theme",
      "Desarrollador Full Stack": "Full Stack Developer",
      "Transformando ideas en soluciones digitales": "Transforming ideas into digital solutions",
      "Ver Proyectos": "See Projects",
      "Mis Habilidades": "My Skills",
      "Frontend": "Frontend",
      "Backend": "Backend",
      "Bases de Datos": "Databases",
      // Nuevas traducciones para Home
      "home": {
         "welcome": "Welcome to my portfolio"
         // Agrega más keys según sea necesario...
      },
      // Nuevas traducciones para Proyectos
      "projects": {
         "nutrismart": {
            "title": "NutriSmart Diet Planner",
            "description": "Application for automatic personalized diet planning based on the user’s physical activity, integrating Google Fit API and OAuth 2.0. Improves diet adherence and reduces manual calculation time.",
            "features": {
                "item1": "Automatically Personalized Diets",
                "item2": "Google Fit API Integration",
                "item3": "Secure OAuth 2.0 Authentication",
                "item4": "Real-time Activity Metrics",
                "item5": "Automatic Adjustments Based on Progress",
                "item6": "Modern and Responsive Interface",
                "item7": "Device Synchronization"
            },
            "challenges": "Integrating real-time physical activity data with personalized nutritional recommendations"
         },
         "tajamar": {
            "title": "Tajamar User Management",
            "description": "Management system for user administration, teacher resource allocation and course resources, including technical talks scheduling and role-based access control. Streamlined administrative tasks by 35%, reduced resource errors by 28%, and improved security compliance by 40%.",
            "features": {
               "item1": "User Administration and Management",
               "item2": "Teacher Resource Allocation",
               "item3": "Course Resources Management",
               "item4": "Technical Talks Scheduling",
               "item5": "Role-Based Access Control",
               "item6": "Enhanced Security Compliance"
            },
            "challenges": "Implementing a secure and scalable access control system while maintaining ease of use"
         },
         "authService": {
            "title": "Auth Service",
            "description": "Robust authentication system implemented with Spring Boot, OAuth 2.0 and PostgreSQL for secure application access. Supports multiple identity providers and multi-factor authentication.",
            "features": {
               "item1": "OAuth 2.0 and OpenID Connect Authentication",
               "item2": "User, Role, and Permission Management",
               "item3": "Data Security and Encryption",
               "item4": "Multi-Factor Authentication (MFA)",
               "item5": "Single Sign-On (SSO) Integration"
            },
            "challenges": "Integrating multiple identity providers while maintaining a unified user experience"
         }
         // Agrega más proyectos según se requiera...
      },
      
      // Secciones de la página
      "sections": {
        "hero": "Hero",
        "about": "About",
        "projects": "Projects",
        "experience": "Experience",
        "contact": "Contact"
      },
      
      // Componente Project
      "project": {
        "noImages": "No images available for this project",
        "description": "Description",
        "features": "Features",
        "challenges": "Challenges",
        "technologies": "Technologies",
        "viewProject": "View Project",
        "viewCode": "View Code"
      },
      
      // About Section
      "about": {
        "title": "About Me",
        "description": "I am a Full Stack Developer passionate about creating digital solutions.",
        "downloadCV": "Download CV"
      },
      
      // Experience Section
      "experience": {
        "title": "Experience",
        "skills": "Skills",
        "workHistory": "Work History"
      },
      
      // Contact Section
      "contact": {
        "title": "Contact Me",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send Message",
        "success": "Your message has been sent successfully!",
        "error": "There was an error sending your message. Please try again."
      },
      // About section additional texts
      "Perfil Profesional": "Professional Profile",
      "Contacto Directo": "Direct Contact",
      "DevOps & Cloud": "DevOps & Cloud",
      "Lenguajes": "Languages",
      
      // Expertise cards
      "expertise": {
        "techStack": "🛠 Main Tech Stack",
        "keyExperience": "🚀 Key Experience",
        "certifications": "🏆 Certifications"
      },
      
      // Professional profile text
      "aboutMe": {
        "intro": "As a Full Stack Developer specialized in modern technologies, I am passionate about creating digital solutions that positively impact people's lives. Let me share a bit more about my career and passions.",
        "details": "My professional approach combines Full Stack development with cloud solutions, always seeking innovation and efficiency in each project. Beyond code, I am an enthusiast of astronomy and science fiction, which fuels my curiosity and constant desire to learn. My other great passion is fitness and health. After working in the sector for a year and maintaining a training routine since I was 16, I've developed projects aimed at facilitating access to the fitness world. My goal is to create digital tools that eliminate barriers and make a healthy lifestyle more accessible to everyone."
      },
      
      // Experience section
      "Experiencia Profesional": "Professional Experience",
      "Logros principales:": "Main achievements:",
      
      // Contact section additional texts
      "¿Tienes un proyecto en mente?": "Do you have a project in mind?",
      "Estoy disponible para discutir nuevas oportunidades y colaboraciones. No dudes en contactarme para cualquier consulta o propuesta.": "I'm available to discuss new opportunities and collaborations. Don't hesitate to contact me for any inquiry or proposal.",
      "Teléfono": "Phone",
      
      // Form placeholders
      "form": {
        "namePlaceholder": "Your full name",
        "emailPlaceholder": "your@email.com",
        "messagePlaceholder": "Tell me about your project or inquiry",
        "sending": "Sending...",
        "sendMessage": "Send message",
        "errors": {
            "nameRequired": "El nombre es obligatorio",
            "emailRequired": "El email es obligatorio",
            "emailInvalid": "El formato del email no es válido",
            "messageRequired": "El mensaje es obligatorio",
            "messageLength": "El mensaje debe tener al menos 10 caracteres"
         }
      }
    }
  },
  es: {
    translation: {
      "Inicio": "Inicio",
      "Proyectos": "Proyectos",
      "Contacto": "Contacto",
      "changeTheme": "Cambiar tema",
      "Desarrollador Full Stack": "Desarrollador Full Stack",
      "Transformando ideas en soluciones digitales": "Transformando ideas en soluciones digitales",
      "Ver Proyectos": "Ver Proyectos",
      "Mis Habilidades": "Mis Habilidades",
      "Frontend": "Frontend",
      "Backend": "Backend",
      "Bases de Datos": "Bases de Datos",
      // Nuevas traducciones para Home
      "home": {
         "welcome": "Bienvenido a mi portafolio"
         // Agrega más keys según sea necesario...
      },
      // Nuevas traducciones para Proyectos
      "projects": {
         "nutrismart": {
            "title": "NutriSmart Diet Planner",
            "description": "Aplicación para la planificación automática de dietas personalizadas basadas en la actividad física del usuario, con integración de la API de Google Fit y autenticación OAuth 2.0. Mejora la adherencia a la dieta y reduce el tiempo de cálculo manual.",
            "features": {
                "item1": "Dietas Personalizadas Automáticas",
                "item2": "Integración con API de Google Fit",
                "item3": "Autenticación Segura con OAuth 2.0",
                "item4": "Métricas de Actividad Física en Tiempo Real",
                "item5": "Ajustes Automáticos según el Progreso",
                "item6": "Interfaz Moderna y Responsiva",
                "item7": "Sincronización entre Dispositivos"
            },
            "challenges": "Integrar datos en tiempo real de la actividad física con recomendaciones nutricionales personalizadas"
         },
         "tajamar": {
            "title": "Gestión de Usuarios Tajamar",
            "description": "Sistema para la administración de usuarios, asignación de recursos docentes y manejo de cursos, con programación de charlas técnicas y control de acceso basado en roles. Optimiza tareas administrativas en un 35%, reduce errores en asignación de recursos en un 28% y mejora la seguridad en un 40%.",
            "features": {
               "item1": "Administración y Gestión de Usuarios",
               "item2": "Asignación de Recursos Docentes",
               "item3": "Gestión de Recursos de Cursos",
               "item4": "Programación de Charlas Técnicas",
               "item5": "Control de Acceso Basado en Roles",
               "item6": "Mejora en Cumplimiento de Seguridad"
            },
            "challenges": "Implementar un sistema de control de acceso seguro y escalable manteniendo la facilidad de uso"
         },
         "authService": {
            "title": "Servicio de Autenticación",
            "description": "Sistema robusto de autenticación implementado con Spring Boot, OAuth 2.0 y PostgreSQL para un acceso seguro a las aplicaciones. Soporta múltiples proveedores de identidad y autenticación multifactor.",
            "features": {
               "item1": "Autenticación con OAuth 2.0 y OpenID Connect",
               "item2": "Gestión de Usuarios, Roles y Permisos",
               "item3": "Seguridad y Encriptación de Datos",
               "item4": "Autenticación Multifactor (MFA)",
               "item5": "Integración con Single Sign-On (SSO)"
            },
            "challenges": "Integrar múltiples proveedores de identidad manteniendo una experiencia unificada"
         }
         // Agrega más proyectos según se requiera...
      },
      
      // Secciones de la página
      "sections": {
        "hero": "Inicio",
        "about": "Sobre Mí",
        "projects": "Proyectos",
        "experience": "Experiencia",
        "contact": "Contacto"
      },
      
      // Componente Project
      "project": {
        "noImages": "No hay imágenes disponibles para este proyecto",
        "description": "Descripción",
        "features": "Características",
        "challenges": "Desafíos",
        "technologies": "Tecnologías",
        "viewProject": "Ver Proyecto",
        "viewCode": "Ver Código"
      },
      
      // About Section
      "about": {
        "title": "Sobre Mí",
        "description": "Soy un Desarrollador Full Stack apasionado por crear soluciones digitales.",
        "downloadCV": "Descargar CV"
      },
      
      // Experience Section
      "experience": {
        "title": "Experiencia",
        "skills": "Habilidades",
        "workHistory": "Historial Laboral"
      },
      
      // Contact Section
      "contact": {
        "title": "Contáctame",
        "name": "Nombre",
        "email": "Correo electrónico",
        "message": "Mensaje",
        "send": "Enviar Mensaje",
        "success": "¡Tu mensaje ha sido enviado exitosamente!",
        "error": "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
      },
      // About section additional texts
      "Perfil Profesional": "Perfil Profesional",
      "Contacto Directo": "Contacto Directo",
      "DevOps & Cloud": "DevOps & Cloud",
      "Lenguajes": "Lenguajes",
      
      // Expertise cards
      "expertise": {
        "techStack": "🛠 Tech Stack Principal",
        "keyExperience": "🚀 Experiencia Clave",
        "certifications": "🏆 Certificaciones"
      },
      
      // Professional profile text
      "aboutMe": {
        "intro": "Como Desarrollador Full Stack especializado en tecnologías modernas, me apasiona crear soluciones digitales que impacten positivamente en la vida de las personas. Permíteme compartir un poco más sobre mi trayectoria y pasiones.",
        "details": "Mi enfoque profesional combina el desarrollo Full Stack con soluciones cloud, siempre buscando la innovación y la eficiencia en cada proyecto. Más allá del código, soy un entusiasta de la astronomía y la ciencia ficción, lo que alimenta mi curiosidad y mi deseo constante de aprendizaje. Mi otra gran pasión es el fitness y la salud. Tras trabajar durante un año en el sector y mantener una rutina de entrenamiento desde los 16 años, he desarrollado proyectos orientados a facilitar el acceso al mundo del fitness. Mi objetivo es crear herramientas digitales que eliminen barreras y hagan más accesible un estilo de vida saludable para todos."
      },
      
      // Experience section
      "Experiencia Profesional": "Experiencia Profesional",
      "Logros principales:": "Logros principales:",
      
      // Contact section additional texts
      "¿Tienes un proyecto en mente?": "¿Tienes un proyecto en mente?",
      "Estoy disponible para discutir nuevas oportunidades y colaboraciones. No dudes en contactarme para cualquier consulta o propuesta.": "Estoy disponible para discutir nuevas oportunidades y colaboraciones. No dudes en contactarme para cualquier consulta o propuesta.",
      "Teléfono": "Teléfono",
      
      // Form placeholders
      "form": {
        "namePlaceholder": "Tu nombre completo",
        "emailPlaceholder": "tu@email.com",
        "messagePlaceholder": "Cuéntame sobre tu proyecto o consulta",
        "sending": "Enviando...",
        "sendMessage": "Enviar mensaje"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
