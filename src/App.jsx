import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';
import './i18n'; // Importa la configuración de i18next

// Obtener la preferencia del sistema sobre el tema
const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
};

// Obtener el tema por defecto desde localStorage o el tema del sistema
const getDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'dark' : getSystemTheme();
};

function App() {
  const [darkMode, setDarkMode] = useState(getDefaultTheme()); // Estado para manejar el modo oscuro

  // Almacenar el tema en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Detectar cambios en la preferencia del sistema para cambiar el tema si no está guardado
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}> {/* Aplicar clase según el estado del tema */}
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Pasa el estado y setter */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
