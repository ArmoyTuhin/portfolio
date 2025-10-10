import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

const FloatingCube = ({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 1, 1]}
      position={position}
      radius={0.1}
      smoothness={4}
    >
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </RoundedBox>
  );
};

export default FloatingCube;




