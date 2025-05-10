import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Router from './Router';
import GalaxyCanvas from './components/GalaxyCanvas';
import './App.css';
import './i18n'; // Configuración de i18next
import { useSmoothScroll } from './components/SmothScroll';
import { useLenis } from './hooks/useLenis';

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'dark' : getSystemTheme();
};

function App() {
  const [darkMode, setDarkMode] = useState(getDefaultTheme());
  const spaceRef = useRef(null);
  const [brightStarsGenerated, setBrightStarsGenerated] = useState(false);
    
  useLenis();
  // Efecto para el movimiento parallax de las estrellas
  useEffect(() => {
    // Solo aplicar parallax en dispositivos no móviles para mejor rendimiento
    if (window.innerWidth <= 768) return;
    
    const handleMouseMove = (e) => {
      if (!spaceRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Aplicar movimiento sutil de parallax a las diferentes capas
      const nebulas = spaceRef.current.querySelectorAll('.nebula-layer');
      const galaxies = spaceRef.current.querySelectorAll('.galaxy-spiral, .galaxy-elliptical');
      const cosmicDust = spaceRef.current.querySelector('.cosmic-dust');
      
      nebulas.forEach((layer, index) => {
        const speed = 0.2 + index * 0.1;
        const offsetX = (0.5 - x) * speed * 10;
        const offsetY = (0.5 - y) * speed * 10;
        layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
      
      // Mayor movimiento para las galaxias - efecto parallax más pronunciado
      galaxies.forEach((galaxy, index) => {
        const speed = 0.4 + index * 0.2;
        const offsetX = (0.5 - x) * speed * 15;
        const offsetY = (0.5 - y) * speed * 15;
        
        // Preservar las animaciones de rotación mientras se aplica el parallax
        const currentTransform = window.getComputedStyle(galaxy).getPropertyValue('transform');
        if (currentTransform && currentTransform !== 'none') {
          galaxy.style.transform = `${currentTransform} translate(${offsetX}px, ${offsetY}px)`;
        } else {
          galaxy.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
      
      // Efecto sutil en el polvo cósmico
      if (cosmicDust) {
        const speed = 0.1;
        const offsetX = (0.5 - x) * speed * 5;
        const offsetY = (0.5 - y) * speed * 5;
        cosmicDust.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Generar estrellas brillantes dinámicamente
  useEffect(() => {
    if (!brightStarsGenerated && spaceRef.current) {
      setTimeout(() => {
        generateBrightStars();
        setBrightStarsGenerated(true);
      }, 300); // Pequeño retraso para asegurar que el DOM está listo
    }
  }, [brightStarsGenerated]);

  // Función para generar estrellas brillantes
  const generateBrightStars = () => {
    const container = spaceRef.current.querySelector('.bright-stars');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Menos estrellas brillantes para mejor rendimiento
    const starCount = window.innerWidth <= 768 ? 8 : 12;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'bright-star';
      
      // Posición aleatoria
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Animación con retraso aleatorio
      star.style.animationDelay = `${Math.random() * 10}s`;
      
      // Añadir al contenedor
      container.appendChild(star);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Fondo espacial optimizado */}
      <div ref={spaceRef} className="cosmic-background">
        {/* Capa de polvo cósmico */}
        <div className="cosmic-dust"></div>
        
        {/* Galaxia 3D visible en ambos modos (oscuro y claro) */}
        <GalaxyCanvas />
        
        {/* Resto de elementos del fondo espacial */}
        <div className="nebula-layer nebula-far"></div>
        <div className="nebula-layer nebula-mid"></div>
        <div className="nebula-layer nebula-near"></div>
        
        <div className="bright-stars"></div>
      </div>
      
      {/* Sistema optimizado de estrellas fugaces */}
      {darkMode && (
        <div className="shooting-stars-container">
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star-large"></div>
        </div>
      )}
      
      {/* Sol para modo claro */}
      {!darkMode && <div className="sun"></div>}
      
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Router darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
