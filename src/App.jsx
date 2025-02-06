// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';
import './i18n'; // Importa la configuración de i18next

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return getSystemTheme();
};

function App() {
  const [darkMode, setDarkMode] = useState(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
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
