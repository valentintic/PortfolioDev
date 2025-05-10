import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiDownload, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { useState, useEffect, useRef } from 'react';
// Importamos los CV
import cvES from '../../assets/ValentínPreuteseiCV.pdf';
import cvEN from '../../assets/ValentinPreuteseiCVEnglish.pdf';
import { NavLink } from 'react-router-dom';
// Importamos GSAP
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { TextPlugin } from 'gsap/TextPlugin';

import Lenis from 'lenis';
import { scrollToSection } from '../../hooks/useLenis';

// Registramos los plugins de GSAP
gsap.registerPlugin(SplitText, TextPlugin);

// Header.jsx
const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t, i18n } = useTranslation();
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const observerRef = useRef(null);
  
  // Referencias para animaciones GSAP
  const logoRef = useRef(null);
  const logoTextRef = useRef(null);
  const navRef = useRef(null);
  const controlsRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navLinksRefs = useRef([]);
  const controlBtnsRefs = useRef([]);
  

useEffect(() => {
  const languageSelector = document.querySelector('.language-selector');
  if (!languageSelector) return;
  
  // Comprobamos si el navegador soporta :has (la mayoría de navegadores modernos lo soportan)
  const supportsHas = CSS.supports('selector(:has(*))');
  
  if (!supportsHas) {
    // Creamos un elemento de fondo manualmente
    let langBackground = languageSelector.querySelector('.lang-background');
    
    if (!langBackground) {
      langBackground = document.createElement('span');
      langBackground.className = 'lang-background';
      languageSelector.appendChild(langBackground);
      
      // Estilizamos el fondo
      gsap.set(langBackground, {
        position: 'absolute',
        width: '50%',
        height: '80%',
        background: 'var(--primary-color)',
        borderRadius: '16px',
        top: '10%',
        zIndex: '0'
      });
    }
    
    // Animamos la posición según el idioma actual
    gsap.to(langBackground, {
      x: i18n.language === 'es' ? '5%' : '95%',
      duration: 0.3,
      ease: "power2.inOut"
    });
  }
}, [i18n.language]);

// Efecto hover para el botón de CV
useEffect(() => {
  const cvBtn = document.querySelector('.cv-download-btn');
  if (!cvBtn) return;
  
  const hoverTl = gsap.timeline({ paused: true });
  
  hoverTl
    .to(cvBtn, {
      scale: 1.05,
      y: -3,
      boxShadow: '0 8px 20px rgba(var(--primary-rgb), 0.35)',
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  
  cvBtn.addEventListener('mouseenter', () => {
    hoverTl.play();
  });
  
  cvBtn.addEventListener('mouseleave', () => {
    hoverTl.reverse();
  });
  
  return () => {
    cvBtn.removeEventListener('mouseenter', () => {});
    cvBtn.removeEventListener('mouseleave', () => {});
  };
}, []);


// Añade este efecto para animar el cambio de tema
useEffect(() => {
  // Selecciona el elemento header
  const header = document.querySelector('.header');
  if (!header) return;
  
  // Timeline para la transición
  const themeTl = gsap.timeline();
  
  // Anima los colores de fondo y texto según el modo
  themeTl
    .to(header, {
      backgroundColor: darkMode ? 'rgba(17, 17, 27, 0.8)' : 'rgba(255, 255, 255, 0.85)',
      color: darkMode ? '#ffffff' : '#111827',
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to('.theme-btn', {
      rotate: darkMode ? 180 : 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, 0);
  
}, [darkMode]);


  // Animación de entrada del header completo
  useEffect(() => {
    // Timeline principal
    const mainTl = gsap.timeline();
    
    // Animación del logo ya existente...
    
    // Animación de los enlaces de navegación
    if (navRef.current) {
      const navLinks = navRef.current.querySelectorAll('.nav-link');
      
      mainTl.from(navLinks, {
        y: -30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all"
      }, 0.3); // Empieza un poco después que la animación del logo
    }
    
    // Animación de los controles
    if (controlsRef.current) {
      const controls = controlsRef.current.children;
      
      mainTl.from(controls, {
        x: 20,
        opacity: 0,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all"
      }, 0.5); // Empieza después de la navegación
    }
    
  }, []);
  
  // Animaciones del logo (existente) - mantener este código
  useEffect(() => {
    if (logoRef.current && logoTextRef.current) {
      // Configuración inicial
      gsap.set(logoTextRef.current, { opacity: 1 });
      
      // Animación de entrada
      const tl = gsap.timeline();
      
      // Split text para animar cada letra
      let splitText;
      try {
        splitText = new SplitText(logoTextRef.current, { type: "chars" });
        
        tl.from(splitText.chars, {
          opacity: 0,
          y: 20,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      } catch (error) {
        console.error("Error al inicializar SplitText:", error);
        // Fallback si SplitText falla
        tl.from(logoTextRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }
      
      // Efecto hover avanzado
      const handleMouseEnter = () => {
        if (splitText && splitText.chars) {
          gsap.to(splitText.chars, {
            color: darkMode ? "#64ffda" : "#0077b6",
            stagger: { 
              each: 0.03,
              from: "random" 
            },
            duration: 0.4,
            ease: "power2.out"
          });
        } else {
          gsap.to(logoTextRef.current, {
            color: darkMode ? "#64ffda" : "#0077b6",
            duration: 0.4
          });
        }
        
        // Efecto de línea
        gsap.to(logoRef.current, {
          "--after-width": "100%",
          duration: 0.5,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        if (splitText && splitText.chars) {
          gsap.to(splitText.chars, {
            color: "",
            stagger: {
              each: 0.02,
              from: "edges" 
            },
            duration: 0.3,
            ease: "power2.inOut"
          });
        } else {
          gsap.to(logoTextRef.current, {
            color: "",
            duration: 0.3
          });
        }
        
        // Revertir efecto de línea
        gsap.to(logoRef.current, {
          "--after-width": "0%",
          duration: 0.5,
          ease: "power2.out"
        });
      };
      
      logoRef.current.addEventListener("mouseenter", handleMouseEnter);
      logoRef.current.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        if (logoRef.current) {
          logoRef.current.removeEventListener("mouseenter", handleMouseEnter);
          logoRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
        if (splitText) {
          try {
            splitText.revert();
          } catch (error) {
            console.error("Error al revertir SplitText:", error);
          }
        }
      };
    }
  }, [darkMode]);

  // Determinar qué CV mostrar según el idioma
  const getCurrentCV = () => {
    return i18n.language === 'es' ? cvES : cvEN;
  };

  // Reemplazar la función closeMenu actual

const closeMenu = () => {
  // Si el menú no está abierto, no hacemos nada
  if (!isMenuOpen) return;
  
  document.body.style.overflow = '';
  
  // Animar la hamburguesa a su estado normal
  const burgerTl = gsap.timeline();
  burgerTl
    .to('.hamburger span:first-child', {
      rotate: 0,
      y: 0,
      backgroundColor: '',
      duration: 0.3,
      ease: "power2.inOut"
    }, 0)
    .to('.hamburger span:nth-child(2)', {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.inOut"
    }, 0)
    .to('.hamburger span:last-child', {
      rotate: 0,
      y: 0,
      backgroundColor: '',
      duration: 0.3,
      ease: "power2.inOut"
    }, 0);
  
  // Animar para ocultar el overlay primero
  gsap.to('.menu-overlay', {
    opacity: 0,
    height: '0',
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      // Asegurarnos de resetear TODOS los estilos inline
      gsap.set('.menu-overlay', { 
        clearProps: 'all', // Limpia todas las propiedades inline
        display: 'none',
        visibility: 'hidden',
        pointerEvents: 'none',
        height: 0,
        opacity: 0
      });
    }
  });
  
  // Si tenemos referencia al menú móvil, también lo animamos
  if (mobileMenuRef.current) {
    const mobileLinks = mobileMenuRef.current.querySelectorAll('.mobile-link, .mobile-cv-download');
    
    const menuTl = gsap.timeline({
      onComplete: () => {
        // Limpiar completamente los estilos inline
        gsap.set(mobileMenuRef.current, {
          clearProps: 'all',
          display: "none", 
          visibility: "hidden",
          pointerEvents: "none",
          height: 0,
          opacity: 0
        });
      }
    });
    
    // Desvanecemos primero los enlaces
    menuTl
      .to(mobileLinks, {
        y: -10,
        opacity: 0,
        stagger: 0.03,
        duration: 0.2,
        ease: "power2.in"
      })
      // Luego colapsamos el menú
      .to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut"
      }, "-=0.1");
  }
  
  setIsMenuOpen(false);
};

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Configurar IntersectionObserver para detectar secciones
    const sections = document.querySelectorAll('section[id]');
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      observerRef.current.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        sections.forEach(section => {
          observerRef.current.unobserve(section);
        });
      }
    };
  }, [isHomePage]);

  // Enlaces de navegación actualizados para secciones
  const navLinks = [
    { name: t('Inicio'), section: 'hero' },
    { name: t('Proyectos'), section: 'projects' },
    { name: t('Contacto'), section: 'contact' },
  ];

  // Manejar navegación a secciones con Lenis
  const handleNavigation = (sectionId) => {
  if (!isHomePage) {
    navigate('/', { state: { scrollTo: sectionId } });
    return;
  }

  scrollToSection(sectionId);
  closeMenu();
};

const handleLanguageChange = (lang) => {
  if (lang === i18n.language) return;
  
  // Seleccionar los botones específicamente por su contenido
  const esBtn = document.querySelector('.lang-btn:nth-child(1)');
  const enBtn = document.querySelector('.lang-btn:nth-child(2)');
  
  // Determinar cuál es el botón nuevo y cuál el antiguo
  const activeBtn = lang === 'es' ? enBtn : esBtn;
  const newBtn = lang === 'es' ? esBtn : enBtn;
  
  if (activeBtn && newBtn) {
    // Asegurarnos de que las clases se actualicen correctamente
    gsap.timeline()
      // Primero animamos el botón activo (que dejará de serlo)
      .to(activeBtn, {
        scale: 0.9,
        opacity: 0.7,
        backgroundColor: "transparent",
        color: "inherit",
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          // Eliminamos la clase manualmente para asegurarnos
          activeBtn.classList.remove('active-lang');
        }
      }, 0)
      // Luego animamos el nuevo botón activo
      .to(newBtn, {
        scale: 1.1,
        opacity: 1,
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          // Añadimos la clase manualmente para asegurarnos
          newBtn.classList.add('active-lang');
        }
      }, 0)
      // Animación de los enlaces de navegación
      .to(document.querySelectorAll('.nav-link'), {
        y: -5,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
      // Volvemos a mostrar los enlaces con el nuevo idioma
      .to(document.querySelectorAll('.nav-link'), {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out"
      }, 0.4);
  }
  
  // Cambiamos el idioma y cerramos el menú
  i18n.changeLanguage(lang);
  closeMenu();
};

useEffect(() => {
  const languageSelector = document.querySelector('.language-selector');
  if (!languageSelector) return;
  
  // Comprobamos si el navegador soporta :has (la mayoría de navegadores modernos lo soportan)
  const supportsHas = CSS.supports('selector(:has(*))');
  
  if (!supportsHas) {
    // Creamos un elemento de fondo manualmente
    let langBackground = languageSelector.querySelector('.lang-background');
    
    if (!langBackground) {
      langBackground = document.createElement('span');
      langBackground.className = 'lang-background';
      languageSelector.appendChild(langBackground);
      
      // Estilizamos el fondo
      gsap.set(langBackground, {
        position: 'absolute',
        width: '50%',
        height: '80%',
        background: 'var(--primary-color)',
        borderRadius: '16px',
        top: '10%',
        zIndex: '0'
      });
    }
    
    // Animamos la posición según el idioma actual
    gsap.to(langBackground, {
      x: i18n.language === 'es' ? '5%' : '95%',
      duration: 0.3,
      ease: "power2.inOut"
    });
  }
}, [i18n.language]);

  // Mejorar la función de apertura del menú
  // Mejora la función de apertura del menú
const toggleMenu = () => {
  // Timeline para animar la hamburguesa
  const burgerTl = gsap.timeline();
  
  if (!isMenuOpen) {
    // Al abrir el menú
    document.body.style.overflow = 'hidden';
    
    // Animar la overlay
    gsap.set('.menu-overlay', {
      display: 'block',
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      height: 0
    });
    
    gsap.to('.menu-overlay', {
      opacity: 1,
      height: '100%',
      duration: 0.4,
      ease: "power2.inOut"
    });
    
    // Animar líneas de la hamburguesa
    burgerTl
      .to('.hamburger span:first-child', {
        rotate: 45,
        y: 8,
        backgroundColor: 'var(--primary-color)',
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .to('.hamburger span:nth-child(2)', {
        opacity: 0,
        x: -10,
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .to('.hamburger span:last-child', {
        rotate: -45,
        y: -8,
        backgroundColor: 'var(--primary-color)',
        duration: 0.3,
        ease: "power2.inOut"
      }, 0);
      
  } else {
    // Al cerrar el menú
    document.body.style.overflow = '';
    
    // Animar la overlay
    gsap.to('.menu-overlay', {
  opacity: 0,
  height: 0,
  duration: 0.4,
  ease: "power2.inOut",
  onComplete: () => {
    gsap.set('.menu-overlay', { 
      display: 'none',
      visibility: 'hidden',
      pointerEvents: 'none',
      height: 0
    });
  }
});
    
    // Animar líneas de la hamburguesa
    burgerTl
      .to('.hamburger span:first-child', {
        rotate: 0,
        y: 0,
        backgroundColor: '',
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .to('.hamburger span:nth-child(2)', {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.inOut"
      }, 0)
      .to('.hamburger span:last-child', {
        rotate: 0,
        y: 0,
        backgroundColor: '',
        duration: 0.3,
        ease: "power2.inOut"
      }, 0);
  }
  
  setIsMenuOpen(!isMenuOpen);
};



  // Efecto para manejar la navegación desde otras páginas
  useEffect(() => {
    if (isHomePage && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        handleNavigation(sectionId);
      }, 300); // Pequeño delay para asegurar que los elementos estén renderizados
      navigate(location.pathname, { replace: true, state: {} }); // Limpiar state
    }
  }, [location, isHomePage]);

  // Efecto para animar la transición cuando se hace scroll
  useEffect(() => {
    // Crear un timeline condicional que se active cuando cambie isScrolled
    const headerEl = document.querySelector('.header');
    if (!headerEl) return;
    
    if (isScrolled) {
      gsap.to(headerEl, {
        boxShadow: "0 5px 25px rgba(0, 0, 0, 0.12)",
        duration: 0.5,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(headerEl, {
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, [isScrolled]);

  // Animación de apertura y cierre del menú móvil
  // Reemplaza el useEffect de la animación del menú móvil

// Reemplaza el useEffect para la animación del menú móvil
useEffect(() => {
  if (!mobileMenuRef.current) return;
  
  const mobileLinks = mobileMenuRef.current.querySelectorAll('.mobile-link, .mobile-cv-download');
  
  if (isMenuOpen) {
    // Configurar el menú antes de mostrarlo
    gsap.set(mobileMenuRef.current, { 
      display: "flex", 
      visibility: "visible",
      pointerEvents: "auto",
      opacity: 0
    });
    
    // Animación de apertura mejorada
    const menuTl = gsap.timeline();
    
    // Primero animamos el contenedor
    menuTl
      .to(mobileMenuRef.current, {
        height: "100vh", // Altura completa de la pantalla
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      // Luego animamos los enlaces uno por uno
      .staggerFromTo(mobileLinks, 
        0.5,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: "back.out(1.4)",
          clearProps: "transform"
        }, 
        0.05,
        "-=0.2" // Empezar un poco antes de que termine la animación del contenedor
      );
      
  } else {
    // Animación de cierre mejorada
    const menuTl = gsap.timeline({
      onComplete: () => {
        // Ocultar completamente el menú al finalizar
        gsap.set(mobileMenuRef.current, {
          display: "none", 
          visibility: "hidden",
          pointerEvents: "none",
          height: 0
        });
      }
    });
    
    // Primero desvanecemos los links
    menuTl
      .staggerTo(mobileLinks, 
        0.3,
        {
          y: -10,
          opacity: 0,
          ease: "power2.in"
        },
        0.03
      )
      // Luego colapsamos el menú
      .to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut"
      }, "-=0.15");
  }
}, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`header ${darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}
    >
      {/* Logo mejorado con GSAP */}
      <div 
        ref={logoRef}
        className="logo" 
        onClick={() => handleNavigation('hero')}
      >
        <span ref={logoTextRef} className="logo-text">Valentin Preutesei</span>
      </div>

      {/* Menú Desktop */}
      <nav className="desktop-nav" ref={navRef}>
        {navLinks.map((link) => (
          <a 
            key={link.section}
            href={`#${link.section}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(link.section);
            }}
            className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
            ref={el => {
              if (el && !navLinksRefs.current.includes(el)) {
                navLinksRefs.current.push(el);
              }
            }}
          >
            {link.name}
          </a>
        ))}
        <NavLink
          to="/Portfolio"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          ref={el => {
            if (el && !navLinksRefs.current.includes(el)) {
              navLinksRefs.current.push(el);
            }
          }}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/background"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          ref={el => {
            if (el && !navLinksRefs.current.includes(el)) {
              navLinksRefs.current.push(el);
            }
          }}
        >
          Background
        </NavLink>
      </nav>

      {/* Controles */}
      <div className="controls" ref={controlsRef}>
        {/* Botón de descarga CV */}
        <a 
          href={getCurrentCV()} 
          download={i18n.language === 'es' ? "CV_Valentin_Preutesei_ES.pdf" : "CV_Valentin_Preutesei_EN.pdf"}
          className="cv-download-btn"
          ref={el => {
            if (el && !controlBtnsRefs.current.includes(el)) {
              controlBtnsRefs.current.push(el);
            }
          }}
        >
          <FiDownload className="download-icon" />
          <span className="download-text">{t('CV')}</span>
        </a>

        <div 
          className="language-selector"
          ref={el => {
            if (el && !controlBtnsRefs.current.includes(el)) {
              controlBtnsRefs.current.push(el);
            }
          }}
        >
          <button
            onClick={() => handleLanguageChange('es')}
            className={`lang-btn ${i18n.language === 'es' ? 'active-lang' : ''}`}
          >
            ES
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`lang-btn ${i18n.language === 'en' ? 'active-lang' : ''}`}
          >
            EN
          </button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-btn"
          aria-label={darkMode ? t('Cambiar a modo claro') : t('Cambiar a modo oscuro')}
          ref={el => {
            if (el && !controlBtnsRefs.current.includes(el)) {
              controlBtnsRefs.current.push(el);
            }
          }}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Hamburguesa solo mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t('Cerrar menú') : t('Abrir menú')}
          ref={el => {
            if (el && !controlBtnsRefs.current.includes(el)) {
              controlBtnsRefs.current.push(el);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay del menú */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Menú Mobile */}
      <div 
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} 
        ref={mobileMenuRef}
      >
        {/* Botón para cerrar el menú móvil */}
        <button 
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label={t('Cerrar menú')}
        >
          <span></span>
          <span></span>
        </button>
        
        {navLinks.map((link) => (
          <a 
            key={link.section}
            href={`#${link.section}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(link.section);
            }}
            className={`mobile-link ${activeSection === link.section ? 'active' : ''}`}
          >
            {link.name}
          </a>
        ))}

        <NavLink
          to="/Portfolio"
          className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
          aria-label={t('Ir a Portfolio')}
        >
          Portfolio
        </NavLink>
        

        <NavLink
          to="/background"
          className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
          aria-label={t('Interactive Background')}
        >
          Background
        </NavLink>

        
        {/* Botón de descarga CV en menú móvil */}
        <a 
          href={getCurrentCV()} 
          download={i18n.language === 'es' ? "CV_Valentin_Preutesei_ES.pdf" : "CV_Valentin_Preutesei_EN.pdf"}
          className="mobile-cv-download"
        >
          <FiDownload className="download-icon" /> {t('Descargar CV')}
        </a>
      </div>
    </motion.header>
  );
};

export default Header;