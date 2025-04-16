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
