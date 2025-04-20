import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './Galaxy.css';

export default function GalaxyModel({ 
  path = '/Models/need_some_space.glb', 
  scale = 2, 
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}) {
  const modelRef = useRef();
  
  // Cargar el modelo GLB
  const { scene } = useGLTF(path);
  
  // Actualización en el useEffect para mejorar los colores galácticos
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Crear material base mejorado con más brillo
          const galaxyMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#c7d3ff'),      // Color base más brillante
            emissive: new THREE.Color('#4169e1'),   // Mantener emisivo azul
            emissiveIntensity: 0.3,                 // Aumentar intensidad
            metalness: 0.6,                         // Más metalicidad para reflejos
            roughness: 0.2,                         // Menor rugosidad = más brillo
          });
          
          // Detección del núcleo galáctico
          if (child.name.includes('core') || 
              (child.position.length() < 2 && child.geometry.boundingSphere?.radius > 1)) {
            // Colores más cálidos e intensos para el núcleo
            galaxyMaterial.color = new THREE.Color('#fff2d6');      // Amarillo más brillante
            galaxyMaterial.emissive = new THREE.Color('#ffa726');   // Naranja ámbar
            galaxyMaterial.emissiveIntensity = 0.7;                 // Mayor brillo
            galaxyMaterial.metalness = 0.8;                         // Más reflectivo
            galaxyMaterial.roughness = 0.1;                         // Muy pulido
          }
          
          // Brazos espirales externos
          else if (child.name.includes('arm') || child.geometry.boundingSphere?.radius > 3) {
            // Colores más azules para los brazos
            galaxyMaterial.color = new THREE.Color('#b6ccff');      // Azul celeste
            galaxyMaterial.emissive = new THREE.Color('#3d5afe');   // Azul intenso
            galaxyMaterial.emissiveIntensity = 0.4;
            
            // Añadir puntos rojizos para regiones de formación estelar
            const textureLoader = new THREE.TextureLoader();
            try {
              galaxyMaterial.map = textureLoader.load('/textures/galaxy_variation.jpg');
              galaxyMaterial.map.wrapS = galaxyMaterial.map.wrapT = THREE.RepeatWrapping;
            } catch (error) {
              console.log("Textura no encontrada, usando color plano");
            }

            // Variación de color según posición
            if (child.position.x > 0 && child.position.z > 0) {
              // Cuadrante con tono más azulado (estrellas jóvenes)
              galaxyMaterial.color = new THREE.Color('#a6c8ff');
              galaxyMaterial.emissive = new THREE.Color('#2979ff');
            } else if (child.position.x < 0 && child.position.z > 0) {
              // Cuadrante con tono más rojizo (regiones de formación estelar)
              galaxyMaterial.color = new THREE.Color('#d6c8ff');
              galaxyMaterial.emissive = new THREE.Color('#7c4dff');
            } else if (child.position.x < 0 && child.position.z < 0) {
              // Cuadrante con tono más verdoso (regiones de polvo cósmico)
              galaxyMaterial.color = new THREE.Color('#b8d4ff');
              galaxyMaterial.emissive = new THREE.Color('#0091ea');
            }
          }
          
          // Regiones intermedias
          else {
            galaxyMaterial.color = new THREE.Color('#d4e0ff');      // Azul pálido
            galaxyMaterial.emissive = new THREE.Color('#5c7cfa');   // Azul medio
            galaxyMaterial.emissiveIntensity = 0.35;
          }
          
          // Aplicar el nuevo material
          child.material = galaxyMaterial;
        }
      });
    }
  }, [scene]);
  
  // Animar la rotación del modelo - más lenta y centrada
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Rotación más lenta y natural
      modelRef.current.rotation.y += delta * 0.002;
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