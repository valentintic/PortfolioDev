import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './Galaxy.css';

// Definir rutas de recursos de manera más flexible
const getResourcePath = (path) => {
  const baseUrl = window.location.origin;
  if (path.startsWith('http')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};

// Caché para texturas
const textureCache = new Map();

// Función para cargar texturas con caché
const loadTexture = (path) => {
  if (textureCache.has(path)) {
    return textureCache.get(path);
  }
  
  const texture = new THREE.TextureLoader().load(getResourcePath(path));
  textureCache.set(path, texture);
  return texture;
};

export default function GalaxyModel({ 
  path = 'Models/need_some_space.glb',
  scale = 2, 
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  isVisible = true,
  onLoaded
}) {
  const modelRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const prevVisibleRef = useRef(isVisible);
  
  // Cargar el modelo GLB con manejo de errores
  const { scene, errors } = useGLTF(getResourcePath(path), true, 
    (error) => {
      console.error('Error cargando el modelo:', error);
      setLoadError(error);
    },
    () => {
      console.log('Modelo cargado correctamente');
      setModelLoaded(true);
      if (onLoaded) onLoaded();
    }
  );
  
  // Materiales memorizados para mejorar rendimiento
  const galaxyMaterials = useMemo(() => {
    const materials = {
      base: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#c7d3ff'),
        emissive: new THREE.Color('#4169e1'),
        emissiveIntensity: 0.3,
        metalness: 0.6,
        roughness: 0.2,
      }),
      core: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#fff2d6'),
        emissive: new THREE.Color('#ffa726'),
        emissiveIntensity: 0.7,
        metalness: 0.8,
        roughness: 0.1,
      }),
      arms: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#b6ccff'),
        emissive: new THREE.Color('#3d5afe'),
        emissiveIntensity: 0.4,
        metalness: 0.5,
        roughness: 0.3,
      }),
      intermediate: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#d4e0ff'),
        emissive: new THREE.Color('#5c7cfa'),
        emissiveIntensity: 0.35,
        metalness: 0.4,
        roughness: 0.4,
      })
    };
    
    // Precargar la textura en caché si existe
    try {
      const texture = loadTexture('textures/galaxy_variation.jpg');
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      materials.arms.map = texture;
    } catch (error) {
      console.log("Textura no encontrada, usando color plano", error);
    }
    
    return materials;
  }, []);
  
  // Actualización optimizada de materiales
  useEffect(() => {
    if (scene) {
      const meshes = [];
      
      scene.traverse((child) => {
        if (child.isMesh) {
          meshes.push(child);
        }
      });
      
      // Procesar en lotes para evitar bloquear el hilo principal
      const processBatch = (startIdx, batchSize) => {
        const endIdx = Math.min(startIdx + batchSize, meshes.length);
        
        for (let i = startIdx; i < endIdx; i++) {
          const child = meshes[i];
          
          // Clonar material para evitar compartir referencias
          let material;
          
          if (child.name.includes('core') || 
              (child.position.length() < 2 && child.geometry.boundingSphere?.radius > 1)) {
            material = galaxyMaterials.core.clone();
          } else if (child.name.includes('arm') || child.geometry.boundingSphere?.radius > 3) {
            material = galaxyMaterials.arms.clone();
            
            // Variación de color por posición (simplificada)
            if (child.position.x > 0 && child.position.z > 0) {
              material.color.set('#a6c8ff');
              material.emissive.set('#2979ff');
            } else if (child.position.x < 0 && child.position.z > 0) {
              material.color.set('#d6c8ff');
              material.emissive.set('#7c4dff');
            } else if (child.position.x < 0 && child.position.z < 0) {
              material.color.set('#b8d4ff');
              material.emissive.set('#0091ea');
            }
          } else {
            material = galaxyMaterials.intermediate.clone();
          }
          
          // Aplicar el nuevo material con optimizaciones
          child.material = material;
          
          // Optimizar la geometría si es posible
          if (child.geometry && !child.geometry.boundingBox) {
            child.geometry.computeBoundingBox();
          }
        }
        
        // Procesar el siguiente lote si quedan meshes
        if (endIdx < meshes.length) {
          setTimeout(() => processBatch(endIdx, batchSize), 0);
        }
      };
      
      // Iniciar procesamiento por lotes (50 meshes por lote)
      processBatch(0, 50);
    }
  }, [scene, galaxyMaterials]);
  
  // Animar el modelo solo cuando es visible
  useFrame((state, delta) => {
    // Verificar cambios de visibilidad
    if (prevVisibleRef.current !== isVisible) {
      prevVisibleRef.current = isVisible;
    }
    
    // Solo animar si es visible
    if (modelRef.current && isVisible) {
      modelRef.current.rotation.y += delta * 0.002;
    }
  });

  // Logging optimizado solo cuando hay cambios
  useEffect(() => {
    if (loadError) {
      console.error("Error al cargar el modelo:", loadError);
    }
    if (errors && Object.keys(errors).length > 0) {
      console.error("Errores reportados por useGLTF:", errors);
    }
  }, [loadError, errors]);
  
  // Si no es visible, devolver null para evitar renderizado
  if (!isVisible && !modelLoaded) {
    return null;
  }
  
  return (
    <group 
      ref={modelRef}
      position={position} 
      rotation={rotation}
      scale={[scale, scale, scale]} 
      visible={isVisible}
    >
      {scene && <primitive object={scene} />}
    </group>
  );
}

// Precarga condicional: sólo precargar si estamos en desktop o dispositivos de alto rendimiento
if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) || 
    window.devicePixelRatio <= 2) {
  try {
    useGLTF.preload(getResourcePath('Models/need_some_space.glb'));
  } catch (error) {
    console.error("Error en la precarga del modelo:", error);
  }
}