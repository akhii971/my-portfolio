import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    Preload,
    Html
} from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Ball = ({ icon: Icon }) => {
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} />
            <Html
                transform
                position={[0, 0, 0]}
                style={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'transparent',
                    pointerEvents: 'none'
                }}
            >
                <Icon size={70} color="#C0C0C0" style={{ filter: 'drop-shadow(0 0 10px rgba(192,192,192,0.4))' }} />
            </Html>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
