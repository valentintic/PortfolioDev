import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Crear instancia de Lenis o usar la existente
    const lenis = window.lenis || new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    // Guardar referencia global
    window.lenis = lenis;

    // Función de animación
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
  
  return window.lenis;
};

// Función auxiliar para navegar con Lenis
export const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  
  try {
    const lenis = window.lenis || new Lenis();
    window.lenis = lenis;
    
    lenis.scrollTo(element, {
      offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } catch (error) {
    console.error("Error en scrollToSection:", error);
    element.scrollIntoView({ behavior: 'smooth' });
  }
};