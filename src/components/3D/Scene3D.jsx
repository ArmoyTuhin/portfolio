import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingCodeLines from './FloatingCodeLines';
import AnimatedSphere from './AnimatedSphere';

const Scene3D = ({ variant = 'hero' }) => {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          {/* Environment */}
          <Environment preset="city" />

          {/* 3D Elements based on variant */}
          {variant === 'hero' && (
            <>
              <AnimatedSphere position={[0, 0, 0]} color="#6366f1" />
              <FloatingCube position={[-2, 1, -2]} color="#06b6d4" speed={0.8} />
              <FloatingCube position={[2, -1, -2]} color="#f59e42" speed={1.2} />
              <FloatingCodeLines count={30} />
            </>
          )}

          {variant === 'research' && (
            <>
              <FloatingCube position={[-1.5, 0, 0]} color="#22c55e" speed={0.6} />
              <FloatingCube position={[1.5, 0, 0]} color="#ef4444" speed={0.8} />
              <FloatingCube position={[0, 1.5, -1]} color="#a21caf" speed={1} />
              <FloatingCodeLines count={25} />
            </>
          )}

          {variant === 'minimal' && (
            <>
              <AnimatedSphere position={[0, 0, 0]} color="#6366f1" />
              <FloatingCodeLines count={20} />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
