import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

function Shape({ animate }: { animate: boolean }) {
  const outer = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!animate) return;
    if (outer.current) { outer.current.rotation.y += dt * 0.15; outer.current.rotation.x += dt * 0.07; }
    if (inner.current) { inner.current.rotation.y -= dt * 0.25; }
  });
  return (
    <Float speed={animate ? 1.4 : 0} rotationIntensity={animate ? 0.3 : 0} floatIntensity={animate ? 0.6 : 0}>
      <mesh ref={outer} rotation={[0.4, 0.3, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#48b5ab" emissive="#2a9a91" emissiveIntensity={0.6} wireframe />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#f2a93b" emissive="#f2a93b" emissiveIntensity={0.8} wireframe />
      </mesh>
    </Float>
  );
}

/** Decorative procedural scene: no remote assets. Default export for React.lazy. */
export default function Hero3D({ animate }: { animate: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      frameloop={animate ? "always" : "demand"}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={30} color="#f2a93b" />
      <pointLight position={[-4, -2, 3]} intensity={25} color="#7bd0c7" />
      <Shape animate={animate} />
    </Canvas>
  );
}
