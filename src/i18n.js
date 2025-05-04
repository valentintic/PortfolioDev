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
      "experience": {
        "title": "Experience",
        "skills": "Skills",
        "workHistory": "Work History",
        "position": {
          "fullstack": "Full Stack Developer"
        },
        "description": {
          "helops": "Development of web applications and optimization of cloud infrastructures."
        },
        "achievements": {
          "helops": {
            "item1": "Developed web applications using React and Java Spring Boot, increasing system performance by 7% and reducing load times by 10%.",
            "item2": "Optimized AWS cloud infrastructures with Kubernetes, reducing deployment time by 12% and downtime by 10%.",
            "item3": "Implemented authentication systems with JWT and OAuth 2.0"
          }
        },
        "mainAchievements": "Main achievements:"
      },
      "aboutProject": {
        "title": "About This Project",
        "subtitle": "A look behind the scenes of this portfolio",
        "overview": {
          "title": "Project Overview",
          "description1": "This portfolio was designed and developed as a showcase of my skills and experience in web development. The main goal was to create an interactive, modern, and accessible experience that reflects my identity as a developer.",
          "description2": "I've combined modern frontend technologies with performance optimization techniques to create a responsive and engaging user experience."
        },
        "features": {
          "responsive": {
            "title": "Responsive Design",
            "desc": "Fully responsive layout that adapts to any device size, from mobile phones to large desktop screens."
          },
          "performance": {
            "title": "Performance Optimization",
            "desc": "Code splitting, lazy loading, and optimized assets to ensure fast loading times and smooth interactions."
          },
          "animation": {
            "title": "Smooth Animations",
            "desc": "Carefully crafted animations that enhance the user experience without compromising performance."
          }
        },
        "technologies": {
          "title": "Technologies Used",
          "description": "This portfolio was built using a modern tech stack focused on performance and developer experience:",
          "tech": {
            "react": "JavaScript library for building user interfaces with component-based architecture",
            "javascript": "Core programming language used throughout the project",
            "css": "Styling with modern CSS features including custom properties and flexbox/grid layouts",
            "vite": "Next generation frontend tooling with instant server start and hot module replacement",
            "framer": "Production-ready motion library for React that makes creating animations easy",
            "threejs": "JavaScript 3D library for creating and displaying animated 3D computer graphics",
            "router": "Declarative routing for React applications with nested routes support",
            "i18n": "Internationalization framework for React that enables multi-language support"
          }
        },
        "viewSource": "View Source on GitHub"
      },

      // Traducciones en inglés para InteractiveBackground
      "interactiveBackground": {
        "title": "Interactive Background",
        "subtitle": "Play with the cosmic background of this portfolio",
        "controls": {
          "title": "Background Controls",
          "description": "Use the controls below to customize the background animation to your liking.",
          "rotation": "Rotation Speed",
          "zoom": "Zoom Level",
          "particles": "Particle Density",
          "pause": "Pause Animation",
          "play": "Play Animation",
          "reset": "Reset Settings",
          "darkMode": "Switch to Dark Mode",
          "lightMode": "Switch to Light Mode"
        },
        "viewport": {
          "message": "The background animation responds to these controls in real-time. Try adjusting them to see the effects!"
        },
        "instructions": {
          "title": "How to Use",
          "rotation": "Adjust the rotation speed to make the galaxy spin faster or slower.",
          "zoom": "Change the zoom level to get closer or further from the center.",
          "particles": "Modify particle density to create a denser or sparser galaxy.",
          "animation": "Pause or play the animation as needed.",
          "theme": "Switch between dark and light mode to see the background in different contexts."
        }
      },
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
      "expertise-text": {
         "techStack": "My main tech stack includes React, Angular, Vue, ASP.NET, Java, Spring Boot, MySQL, AWS, and Azure. I'm always learning new technologies and tools to improve my skills.",
         "keyExperience": {
            "item1": "Full Stack Developer at HelOps, Anadat Technology",
            "item2": "Developed web applications using React and Spring Boot, improving system performance by 7% and reducing load times by 10%.",
            "item3": "Collaborated on optimizing cloud infrastructure using Kubernetes, contributing to reducing deployment times by 12% and inactivity by 10%",
            "item4": "Implemented authentication and authorization solutions using OAuth 2.0 and JWT",
         }
      },
      
      // Professional profile text
      "aboutMe": {
        "intro": "My journey as a Full Stack Developer began with a passion for building tech solutions that truly make a difference.",
        "details": "I combine my Full Stack development skills with cloud-based solutions, always aiming for innovation, efficiency, and real-world impact in every project. Beyond coding, I'm passionate about astronomy and science fiction — interests that fuel my curiosity and drive for continuous learning. I'm also deeply committed to fitness and health, a passion I've pursued since I was 16 and that led me to work in the industry for a year. This experience inspired me to develop digital tools that break down barriers and make a healthy lifestyle more accessible to everyone."
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
      "experience": {
        "title": "Experiencia",
        "skills": "Habilidades",
        "workHistory": "Historial Laboral",
        "position": {
          "fullstack": "Desarrollador Full Stack"
        },
        "description": {
          "helops": "Desarrollo de aplicaciones web y optimización de infraestructuras cloud."
        },
        "achievements": {
          "helops": {
            "item1": "Desarrollé aplicaciones web utilizando React y Java Spring Boot, mejorando el rendimiento del sistema en un 7% y reduciendo los tiempos de carga en un 10%.",
            "item2": "Optimicé infraestructuras cloud de AWS con Kubernetes, reduciendo el tiempo de despliegue en un 12% y el tiempo de inactividad en un 10%.",
            "item3": "Implementé sistemas de autenticación con JWT y OAuth 2.0"
          }
        },
        "mainAchievements": "Logros principales:"
      },
      "Bases de Datos": "Bases de Datos",
      "aboutProject": {
        "title": "Sobre Este Proyecto",
        "subtitle": "Una mirada detrás de escenas de este portfolio",
        "overview": {
          "title": "Visión General",
          "description1": "Este portfolio fue diseñado y desarrollado como una muestra de mis habilidades y experiencia en desarrollo web. El objetivo principal era crear una experiencia interactiva, moderna y accesible que reflejara mi identidad como desarrollador.",
          "description2": "He combinado tecnologías modernas de frontend con técnicas de optimización de rendimiento para crear una experiencia de usuario responsive y atractiva."
        },
        "features": {
          "responsive": {
            "title": "Diseño Responsive",
            "desc": "Diseño completamente adaptable que se ajusta a cualquier tamaño de dispositivo, desde teléfonos móviles hasta pantallas de escritorio grandes."
          },
          "performance": {
            "title": "Optimización de Rendimiento",
            "desc": "División de código, carga diferida y activos optimizados para garantizar tiempos de carga rápidos e interacciones fluidas."
          },
          "animation": {
            "title": "Animaciones Suaves",
            "desc": "Animaciones cuidadosamente elaboradas que mejoran la experiencia del usuario sin comprometer el rendimiento."
          }
        },
        "technologies": {
          "title": "Tecnologías Utilizadas",
          "description": "Este portfolio fue construido usando un stack tecnológico moderno enfocado en el rendimiento y la experiencia de desarrollo:",
          "tech": {
            "react": "Biblioteca JavaScript para construir interfaces de usuario con arquitectura basada en componentes",
            "javascript": "Lenguaje de programación principal utilizado en todo el proyecto",
            "css": "Estilos con características modernas de CSS incluyendo propiedades personalizadas y layouts con flexbox/grid",
            "vite": "Herramienta frontend de próxima generación con inicio de servidor instantáneo y reemplazo de módulos en caliente",
            "framer": "Biblioteca de animación para React que facilita la creación de animaciones",
            "threejs": "Biblioteca JavaScript 3D para crear y mostrar gráficos 3D animados",
            "router": "Enrutamiento declarativo para aplicaciones React con soporte para rutas anidadas",
            "i18n": "Framework de internacionalización para React que permite soporte multilenguaje"
          }
        },
        "viewSource": "Ver Código en GitHub"
      },

      // Traducciones en español para InteractiveBackground
      "interactiveBackground": {
        "title": "Fondo Interactivo",
        "subtitle": "Juega con el fondo cósmico de este portfolio",
        "controls": {
          "title": "Controles de Fondo",
          "description": "Utiliza los controles a continuación para personalizar la animación de fondo a tu gusto.",
          "rotation": "Velocidad de Rotación",
          "zoom": "Nivel de Zoom",
          "particles": "Densidad de Partículas",
          "pause": "Pausar Animación",
          "play": "Reproducir Animación",
          "reset": "Restaurar Configuración",
          "darkMode": "Cambiar a Modo Oscuro",
          "lightMode": "Cambiar a Modo Claro"
        },
        "viewport": {
          "message": "La animación de fondo responde a estos controles en tiempo real. ¡Prueba a ajustarlos para ver los efectos!"
        },
        "instructions": {
          "title": "Cómo Utilizar",
          "rotation": "Ajusta la velocidad de rotación para hacer que la galaxia gire más rápido o más lento.",
          "zoom": "Cambia el nivel de zoom para acercarte o alejarte del centro.",
          "particles": "Modifica la densidad de partículas para crear una galaxia más densa o dispersa.",
          "animation": "Pausa o reproduce la animación según necesites.",
          "theme": "Alterna entre modo oscuro y claro para ver el fondo en diferentes contextos."
        }
      },
      "home": {
         "welcome": "Bienvenido a mi portafolio"
         // Agrega más keys según sea necesario...
      },
      // Nuevas traducciones para Proyectos
      "projects": {
         "nutrismart": {
            "title": {
               "frontend": "NutriSmart Diet Planner",
               "backend": "NutriSmart BackEnd"
            },
            "description": "Aplicación para la planificación automática de dietas personalizadas basadas en la actividad física del usuario, con integración de la API de Google Fit y autenticación OAuth 2.0. Mejora la adherencia a la dieta y reduce el tiempo de cálculo manual.",
            "features": {
               "frontend": {
                  "item1": "Generación automática de dietas personalizadas",
                  "item2": "Diseño web responsive para dispositivos móviles y escritorio",
                  "item3": "Integración con la API de Google Fit",
                  "item4": "Interfaz moderna, intuitiva y atractiva",
                  "item5": "Autenticación segura y control de acceso",
                  "item6": "Alto rendimiento y capacidad de escalado",
                  "item7": "Integración con servicios en la nube"
               },
               "backend": {
                  "item1": "Desarrollado con ASP.NET Core",
                  "item2": "Gestión de datos con SQL Server",
                  "item3": "Arquitectura basada en microservicios y API RESTful",
                  "item4": "Cifrado de datos sensibles y buenas prácticas de seguridad",
                  "item5": "Integración con Google Fit y autenticación mediante OAuth 2.0",
                  "item6": "Diseñado para ser escalable y mantenible",
                  "item7": "Escaneo de códigos QR para inserción rápida de datos",
                  "item8": "Despliegue automatizado e integración continua en Azure",
                  "item9": "Optimización continua de los algoritmos de recomendación gracias a los datos de actividad física",
               }
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
      "expertise-text": {
         "techStack": "Mi stack tecnológico principal incluye: React, Angular, Vue, ASP.NET, Java, Spring Boot, MySQL, AWS y Azure. Siempre aprendo nuevas tecnologías y herramientas para mejorar mis habilidades.",
         "keyExperience": {
            "item1": "Full Stack Developer en HelOps, Anadat Technology",
            "item2": "Desarrollé aplicaciones web utilizando React y Spring Boot, mejorando el rendimiento del sistema en un 7% y reduciendo los tiempos de carga en un 10%.",
            "item3": "Colaboré en la optimización de infraestructuras en la nube de AWS utilizando Kubernetes, contribuyendo a reducir los tiempos de despliegue en un 12% y el tiempo de inactividad en un 10%",
            "item4": "Implementé soluciones de autenticación y autorización utilizando OAuth 2.0 y JWT",
         }
      },
      
      // Professional profile text
      "aboutMe": {
        "intro": "Mi camino como desarrollador Full Stack comenzó con la pasión por crear soluciones tecnológicas que realmente marquen la diferencia.",
        "details": "Combino mi experiencia en desarrollo Full Stack con conocimientos en soluciones cloud, siempre con un enfoque en la innovación, la eficiencia y el impacto real en los proyectos. Más allá del código, soy un apasionado de la astronomía y la ciencia ficción, intereses que alimentan mi curiosidad y espíritu autodidacta. También me dedico al fitness y la salud, una pasión que mantengo desde los 16 años y que me llevó a trabajar en el sector durante un año. Esto me inspiró a desarrollar proyectos digitales que faciliten el acceso a un estilo de vida saludable, eliminando barreras y promoviendo el bienestar para todos."
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
