import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Aquí definimos las traducciones para los diferentes idiomas
const resources = {
  en: {
    translation: {
      "Inicio": "Home",
      "Proyectos": "Projects",
      "Contacto": "Contact",
      "changeTheme": "Change Theme",
    }
  },
  es: {
    translation: {
      "Inicio": "Inicio",
      "Proyectos": "Proyectos",
      "Contacto": "Contacto",
      "changeTheme": "Cambiar tema",
    }
  }
}

i18n
  .use(initReactI18next) // Pasa i18n al react-i18next
  .init({
    resources,
    lng: "es", // Idioma por defecto
    interpolation: {
      escapeValue: false // React ya se encarga de escapar los valores
    }
  })

export default i18n
