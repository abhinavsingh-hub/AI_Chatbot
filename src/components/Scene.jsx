import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Float, ScrollControls, useScroll, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function MorphingMesh({ isHovered }) {
    const meshRef = useRef()
    const scroll = useScroll()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const r1 = scroll.range(0, 1 / 3)
        const r2 = scroll.range(1 / 3, 2 / 3)

        meshRef.current.rotation.x = Math.sin(time / 4) + r1 * Math.PI
        meshRef.current.rotation.y = Math.cos(time / 2) + r2 * Math.PI
        meshRef.current.position.x = Math.sin(r1 * Math.PI) * 2
        meshRef.current.position.y = Math.cos(r2 * Math.PI) * 1
    })

    return (
        <Float speed={isHovered ? 5 : 2} rotationIntensity={isHovered ? 2 : 1} floatIntensity={isHovered ? 4 : 2}>
            <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color={isHovered ? "#ff00ff" : "#3b82f6"}
                    attach="material"
                    distort={isHovered ? 0.8 : 0.4}
                    speed={isHovered ? 4 : 2}
                    roughness={0}
                />
            </mesh>
        </Float>
    )
}

function Scene({ isHovered }) {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} color={isHovered ? "#ff00ff" : "#00f2ff"} />

                <ScrollControls pages={3} damping={0.1}>
                    <MorphingMesh isHovered={isHovered} />
                </ScrollControls>

                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </div>
    )
}

export default Scene
