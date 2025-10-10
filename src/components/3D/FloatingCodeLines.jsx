import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCodeLines = ({ count = 30 }) => {
  const groupRef = useRef();

  // Code snippets for software engineering
  const codeSnippets = [
    'const ai = new ML()',
    'import tensorflow',
    'class Neural {}',
    'def train_model():',
    'async function()',
    'SELECT * FROM',
    'docker build -t',
    'git commit -m',
    'npm install',
    'pip install torch',
    'from sklearn import',
    'public static void',
    'let data = await',
    'return model.fit()',
    'if (accuracy > 0.9)',
    'while training:',
    'for epoch in range',
    'import pandas as pd',
    'const API = axios',
    'app.use(express)',
    'CREATE TABLE users',
    'model.compile()',
    'print(f"Loss: {}")',
    'export default',
    'useEffect(() => {})',
    'try { await } catch',
    'lambda x: x**2',
    'np.array([[1,2]])',
    'res.status(200)',
    'console.log(data)'
  ];

  const codeLines = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      text: codeSnippets[i % codeSnippets.length],
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      speed: 0.5 + Math.random() * 0.5,
      color: ['#6366f1', '#06b6d4', '#22c55e', '#f59e42', '#ef4444', '#a21caf'][Math.floor(Math.random() * 6)]
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Animate individual code lines
      groupRef.current.children.forEach((child, i) => {
        const speed = codeLines[i].speed;
        child.position.y += Math.sin(state.clock.elapsedTime * speed + i) * 0.001;
        child.rotation.y += 0.002 * speed;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {codeLines.map((line, i) => (
        <Text
          key={i}
          position={line.position}
          rotation={line.rotation}
          fontSize={0.3}
          color={line.color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/RobotoMono-Regular.ttf"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {line.text}
        </Text>
      ))}
    </group>
  );
};

export default FloatingCodeLines;




