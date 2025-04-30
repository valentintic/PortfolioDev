import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import GalaxyModel from './Galaxy/GalaxyModel';

// Componente para detectar visibilidad
function VisibilityManager({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '100px', // Cargar un poco antes de que sea visible
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="galaxy-canvas-container">
      {isVisible && children}
    </div>
  );
}

// Componente para centrar la cámara y gestionar performance
function CameraController({ isVisible }) {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    // Posicionar la cámara para una vista frontal centrada
    camera.position.set(0, 2, 9);
    camera.lookAt(0, 0, 0);
    
    // Optimización: reducir calidad cuando no está visible
    if (!isVisible) {
      gl.setPixelRatio(1);
    } else {
      gl.setPixelRatio(window.devicePixelRatio);
    }
  }, [camera, gl, isVisible]);
  
  return null;
}

export default function GalaxyCanvas() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Función para manejar carga completa
  const handleModelLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={containerRef} 
      className={`galaxy-canvas-container ${isLoaded ? 'loaded' : ''}`}
    >
      {/* Solo renderizar el Canvas cuando es visible en el viewport */}
      {isVisible && (
        <>
          <Canvas 
            camera={{ 
              position: [0, 0, 50],
              fov: 25,
              near: 0.2,
              far: 1000
            }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: 'high-performance', // Solicitar GPU de alto rendimiento
              precision: 'mediump' // Precisión media es suficiente y mejora rendimiento
            }}
            dpr={[1, 2]} // Limitar pixel ratio para mejor rendimiento
            performance={{ min: 0.5 }} // Permitir degradación de calidad para mantener FPS
          >
            <CameraController isVisible={isVisible} />
            
            {/* Iluminación optimizada */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <directionalLight position={[-5, -2, -5]} intensity={0.3} color="#5590ff" />
            
            <Suspense fallback={
              <mesh>
                <sphereGeometry args={[2, 16, 16]} /> {/* Reducido la complejidad del fallback */}
                <meshBasicMaterial color="#4060ff" /> {/* Material más ligero para el fallback */}
              </mesh>
            }>
              <GalaxyModel 
                path="/Models/need_some_space.glb" 
                scale={4}
                position={[0, -8, 0]}
                rotation={[0, 0, 0]}
                isVisible={isVisible}
                onLoaded={handleModelLoaded}
              />
            </Suspense>
            
            {/* Stars optimizadas - solo visibles cuando se ha cargado el modelo principal */}
            {isLoaded && (
              <Stars 
                radius={100} 
                depth={50} 
                count={1500} // Reducido para mejor rendimiento
                factor={4} 
                saturation={0.6} 
                fade
              />
            )}
            
            {/* Controles optimizados para rendimiento */}
            <OrbitControls 
              enablePan={false} 
              enableZoom={true}
              minDistance={10}
              maxDistance={20}
              rotateSpeed={0.4}
              autoRotate={isVisible} // Solo rotar cuando es visible
              autoRotateSpeed={0.2}
              target={[0, 0, 0]}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
          
          {/* Efectos visuales solo si el modelo está cargado */}
          {isLoaded && (
            <>
              <div className="galaxy-core-glow"></div>
              <div className="cosmic-dust"></div>
            </>
          )}
        </>
      )}
    </div>
  );
}