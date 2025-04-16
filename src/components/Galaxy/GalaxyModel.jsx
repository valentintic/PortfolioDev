import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'; // Corregido: useFrame viene de fiber
import { useGLTF } from '@react-three/drei';   // useGLTF sí viene de drei

export default function GalaxyModel({ 
  path = '/Models/need_some_space.glb', 
  scale = 4, 
  position = [0, -10, 0], // CAMBIO: Bajamos la posición 3 unidades
  rotation = [0, 0, 0]
}) {
  const modelRef = useRef();
  
  // Cargar el modelo GLB
  const { scene } = useGLTF(path);
  
  // Animar la rotación del modelo - más lenta y centrada
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Rotación más lenta y natural
      modelRef.current.rotation.y += delta * 0.08;
    }
  });
  
  return (
    <group 
      ref={modelRef}
      position={position} 
      rotation={rotation}
      scale={[scale, scale, scale]} 
    >
      <primitive object={scene} />
    </group>
  );
}

// Precargar el modelo para mejor rendimiento
useGLTF.preload('/Models/need_some_space.glb');