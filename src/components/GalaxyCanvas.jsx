import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Stars, OrbitControls, Environment } from '@react-three/drei';
import GalaxyModel from './Galaxy/GalaxyModel';

// Componente para centrar la cámara correctamente
function CameraController() {
  const { camera } = useThree();
  
  useEffect(() => {
    // Posicionar la cámara para una vista frontal centrada
    camera.position.set(0, 2, 9); // Ajustar la posición de la cámara
    // Mirar al centro exacto
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return null;
}

export default function GalaxyCanvas() {
  return (
    <div className="galaxy-canvas-container">
      <Canvas 
        camera={{ 
          position: [0, 0, 50],
          fov: 25,
          near: 0.2,
          far: 1000
        }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <CameraController />
        
        {/* Iluminación mejorada para el modelo */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <directionalLight position={[-5, -2, -5]} intensity={0.3} color="#5590ff" />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial 
              color="#4060ff" 
              emissive="#203080"
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        }>
          {/* Modelo centrado y ajustado */}
          <GalaxyModel 
            path="/Models/need_some_space.glb" 
            scale={4}
            position={[0, -8, 0]} // Ubicar el modelo en el centro exacto
            rotation={[0, 0, 0]}
          />
          
          <Environment preset="night" />
        </Suspense>
        
        {/* Campo de estrellas más sutil para no distraer del modelo */}
        <Stars 
          radius={100} 
          depth={50} 
          count={2500} 
          factor={4} 
          saturation={0.6} 
          fade
        />
        
        {/* Controles ajustados para mantener la galaxia centrada */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={true}
          minDistance={10}
          maxDistance={20}
          rotateSpeed={0.4}
          autoRotate 
          autoRotateSpeed={0.2}
          target={[0, 0, 0]} // Centro exacto para consistencia
        />
      </Canvas>
    </div>
  );
}