import { useGLTF } from '@react-three/drei';

export function Model({ path, position = [0,0,0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
}
