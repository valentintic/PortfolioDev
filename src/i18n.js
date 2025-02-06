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
      "Bases de Datos": "Databases"
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
      "Bases de Datos": "Bases de Datos"
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
