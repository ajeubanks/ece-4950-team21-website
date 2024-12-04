import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load the GLB model
  return (
    <primitive
      object={scene}
      scale={[4.5, 4.5, 4.5]} // Adjust the scale (x, y, z)
      rotation={[Math.PI / 12, Math.PI / 4, 0]} // Adjust the starting rotation (x, y, z)
      position={[0, -2, 0]} // Lower the model in the frame
    />
  );
};

const ModelViewer: React.FC = () => {
  return (
    <div className="w-full h-96 mx-auto border border-gray-300 dark:border-gray-600 rounded-md shadow-lg bg-zinc-100 dark:bg-zinc-800">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model modelPath={`${import.meta.env.BASE_URL}project4/SDbase_FINAL.glb`} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
