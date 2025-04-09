import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Router from './Router';
import './App.css';
import './i18n'; // Configuración de i18next

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
};

const getDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'dark' : getSystemTheme();
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
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Router darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
