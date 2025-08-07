import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function AnimatedModel({ path, position = [0,0,0], scale = 1 }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  const handleClick = () => {
    actions["Cat.001|IdleCat"]?.reset().play();
  };

  return (
    <group ref={group} position={position} scale={scale} onClick={handleClick}>
      <primitive object={scene} />
    </group>
  );
}
