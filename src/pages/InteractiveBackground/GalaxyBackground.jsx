import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './GalaxyBackground.css';

const GalaxyBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const galaxyRef = useRef(null);
  const frameIdRef = useRef(null);
  const controlsRef = useRef({
    rotationSpeed: 0.5,
    zoom: 0.5,
    particleDensity: 0.5,
    isAnimating: true
  });

  // Función para generar la galaxia
  const generateGalaxy = (particleDensity = 0.5) => {
    if (galaxyRef.current) {
      sceneRef.current.remove(galaxyRef.current);
      galaxyRef.current.geometry.dispose();
      galaxyRef.current.material.dispose();
    }

    // Parámetros de la galaxia
    const parameters = {
      count: Math.floor(10000 + particleDensity * 40000), // Entre 10,000 y 50,000 partículas
      size: 0.01,
      radius: 5,
      branches: 3 + Math.floor(particleDensity * 5), // Entre 3 y 8 brazos
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984'
    };

    // Geometría
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    // Generar puntos para la galaxia
    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Posición
      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    // Crear la galaxia
    const galaxy = new THREE.Points(geometry, material);
    sceneRef.current.add(galaxy);
    galaxyRef.current = galaxy;

    return galaxy;
  };

  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configuración de la cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 6;
    cameraRef.current = camera;

    // Configuración del renderizador
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Generar la galaxia inicial
    generateGalaxy(controlsRef.current.particleDensity);

    // Manejador de eventos para redimensionamiento de ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Función de animación
    const animate = () => {
      if (controlsRef.current.isAnimating && galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.002 * controlsRef.current.rotationSpeed;
      }

      // Ajustar la posición de la cámara basada en el zoom
      const targetZ = 6 - (controlsRef.current.zoom * 3); // 3 a 6 unidades de distancia
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Iniciar la animación
    animate();

    // Escuchar eventos de control de galaxia
    const handleInitControls = (event) => {
      const { rotationSpeed, zoom, particleDensity, isAnimating } = event.detail;
      controlsRef.current = { rotationSpeed, zoom, particleDensity, isAnimating };
      generateGalaxy(particleDensity);
    };

    const handleUpdateControls = (event) => {
      const { rotationSpeed, zoom, particleDensity, isAnimating } = event.detail;
      
      // Si la densidad de partículas cambió significativamente, regenerar la galaxia
      if (Math.abs(controlsRef.current.particleDensity - particleDensity) > 0.1) {
        controlsRef.current = { ...controlsRef.current, particleDensity };
        generateGalaxy(particleDensity);
      }
      
      // Actualizar otros controles
      controlsRef.current = { ...controlsRef.current, rotationSpeed, zoom, isAnimating };
    };

    const handleResetControls = () => {
      controlsRef.current = {
        rotationSpeed: 0.5,
        zoom: 0.5,
        particleDensity: 0.5,
        isAnimating: true
      };
      generateGalaxy(0.5);
    };

    document.addEventListener('initialize-galaxy-controls', handleInitControls);
    document.addEventListener('update-galaxy-controls', handleUpdateControls);
    document.addEventListener('reset-galaxy-controls', handleResetControls);

    // Limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('initialize-galaxy-controls', handleInitControls);
      document.removeEventListener('update-galaxy-controls', handleUpdateControls);
      document.removeEventListener('reset-galaxy-controls', handleResetControls);
      
      cancelAnimationFrame(frameIdRef.current);
      mountRef.current.removeChild(renderer.domElement);
      
      scene.remove(galaxyRef.current);
      galaxyRef.current.geometry.dispose();
      galaxyRef.current.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="galaxy-background" ref={mountRef}></div>;
};

export default GalaxyBackground;