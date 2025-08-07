import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Model } from './components/Model'; // à créer comme ci-dessus
import { AnimatedModel } from './components/AnimatedModel';
import { Loader } from '@react-three/drei';

export default function App() {
  // Je charge mes models
  useGLTF.preload('/models/Garden.glb');
  useGLTF.preload('/models/Arrosoire.glb');
  useGLTF.preload('/models/Brouette.glb');
  useGLTF.preload('/models/Sushi.glb');
  useGLTF.preload('/models/Cat.glb');

  return (
    // Je mets mes models dans mon Canvas
    <Canvas style={{ width: "100vw", height: "100vh", display: "block" }} camera={{ position: [20, 20, 50], fov: 50 }}>
      <ambientLight />
      <Model path="/models/Garden.glb" position={[0, 0, 0]} scale={1.5} />
      <Model path="/models/Arrosoire.glb" position={[0, 10, 0]} scale={100} />
      <Model path="/models/Brouette.glb" position={[-4, 1, -8]} scale={0.1}/>
      <Model path="/models/Sushi.glb" position={[-9, 2, 5]} scale={4} />
      <AnimatedModel path="/models/Cat.glb" position={[3, 1, -2]} scale={1.2} />
      <OrbitControls />
    </Canvas>
  );
}
<Loader />
