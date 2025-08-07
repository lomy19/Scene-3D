import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Model } from './components/Model';
import { AnimatedModel } from './components/AnimatedModel';
import { Loader } from '@react-three/drei';
import { EffectComposer, ChromaticAberration, Pixelation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';


export default function App() {
  // Je charge mes models
  useGLTF.preload('/models/Garden.glb');
  useGLTF.preload('/models/Brouette.glb');
  useGLTF.preload('/models/Sushi.glb');
  useGLTF.preload('/models/Cat.glb');
  useGLTF.preload('/models/Butterfly.glb');

  return (
    // Je mets mes models dans mon Canvas
    <Canvas style={{ width: "100vw", height: "100vh", display: "block" }} camera={{ position: [20, 20, 50], fov: 50 }}>
    {<EffectComposer>
         <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.002, 0.0002]}/>
         <Pixelation granularity={2}/>
      </EffectComposer>}

      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={0.7} />

      <Model path="/models/Garden.glb" position={[0, 0, 0]} scale={1.5} />
      <Model path="/models/Brouette.glb" position={[-4, 1, -8]} scale={0.1}/>
      <Model path="/models/Sushi.glb" position={[-9, 2, 5]} scale={4}/>

      <AnimatedModel path="/models/Cat.glb" position={[3, 1, -2]} scale={1.2} animationName="Cat.001|IdleCat"/>

      <AnimatedModel path="/models/Butterfly.glb" position={[3, 5, 1]} scale={1.2} rotation={[0, 20.5, 0]} animationName={"Flying"}/>

      <OrbitControls />
    </Canvas>
  );
}
<Loader />
