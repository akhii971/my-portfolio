import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Earth = () => {
    return (
        <group rotation-y={0}>
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial color="#C0C0C0" wireframe transparent opacity={0.5} />
            </mesh>
            <mesh scale={2.45}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial color="#110F0F" />
            </mesh>
        </group>
    );
};
// Note: using a public URL for a common GLTF model (Earth) often used in these Three.js portfolios.
// If this fails, I'll fallback to a procedural one.

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
