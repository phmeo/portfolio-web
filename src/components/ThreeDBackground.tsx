// Temporarily disabled to fix build errors
/*
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import '@react-three/fiber';

interface ThreeDBackgroundProps {
  children: React.ReactNode;
}

const FloatingParticles: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#e1b866" emissive="#8B4513" emissiveIntensity={0.2} />
    </mesh>
  );
};

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ children }) => {
  return (
    <Box position="relative" w="100%" h="100vh">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={-1}
        bg="transparent"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <FloatingParticles />
        </Canvas>
      </Box>
      {children}
    </Box>
  );
};

export default ThreeDBackground;
*/

// Temporary simple background component
import React from 'react';
import { Box } from '@chakra-ui/react';

interface ThreeDBackgroundProps {
  children: React.ReactNode;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ children }) => {
  return (
    <Box position="relative" w="100%" h="100vh">
      {children}
    </Box>
  );
};

export default ThreeDBackground; 