import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function AnimatedModel({ path, position = [0,0,0], scale = 1, rotation = [0,0,0], animationName }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  const handleClick = () => {
    actions?.[animationName]?.reset().fadeIn(0.2).play();
  };

  return (
    <group ref={group} position={position} scale={scale} rotation={rotation} onClick={handleClick}>
      <primitive object={scene} />
    </group>
  );
}
