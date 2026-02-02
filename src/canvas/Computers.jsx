import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Computers = () => {
    return (
        <mesh>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            {/* A main futuristic floating shape */}
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#915EFF"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
        </mesh>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full h-full z-10"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={5}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
