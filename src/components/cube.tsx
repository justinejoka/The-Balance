// src/components/Cube.tsx
"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Color } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

// Rotating Cube Component
const RotatingCube = ({ position, color, size }: { position: [number, number, number]; color: string; size: [number, number, number] }) => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

// Canvas Component
const CubeCanvas = () => (
  <Canvas
    style={{ height: '500px', borderRadius: '12px' }}
    camera={{ position: [3, 3, 3], fov: 50 }}
    onCreated={({ gl }) => {
      gl.setClearColor(new Color('#151515')); // Set background color
    }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <directionalLight position={[-5, 5, 5]} intensity={0.7} />
    <fog attach="fog" args={['#151515', 5, 15]} /> {/* Add fog effect */}
    
    <RotatingCube position={[0, 0, 0]} color="purple" size={[1, 1, 1]} />
    <RotatingCube position={[-2, -1, 1]} color="teal" size={[0.7, 0.7, 0.7]} />
    <RotatingCube position={[1.5, 1, -1.5]} color="orange" size={[0.5, 0.5, 0.5]} />
    <RotatingCube position={[-1.5, 1.5, 1]} color="red" size={[0.4, 0.4, 0.4]} />

    {/* OrbitControls for camera rotation and zoom */}
    <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={0.5} />
    
    {/* Stars for a more dynamic background effect */}
    <Stars radius={100} depth={50} count={5000} factor={7} saturation={0} fade />
  </Canvas>
);

export default CubeCanvas;
