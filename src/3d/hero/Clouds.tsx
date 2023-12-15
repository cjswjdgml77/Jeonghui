import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Clouds = () => {
  const [cloud, cloud2, cloud3, topCloud, topCloud2, topCloud3] = useTexture([
    "/textures/cloud.png",
    "/textures/cloud2.png",
    "/textures/cloud3.png",
    "/textures/top-cloud.png",
    "/textures/top-cloud2.png",
    "/textures/top-cloud3.png",
  ]);

  const cloudCount = new Array(20);
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const clock = state.clock.getElapsedTime();

    ref.current.position.setX(clock * -0.08);
  });
  return (
    <>
      <group ref={ref}>
        {[...new Array(20)].map((_data, idx) => (
          <mesh
            position={[-16 + idx * 8, -4 + Math.random() * 2, -10]}
            key={idx}
          >
            <planeGeometry args={[10, 5]} />
            <meshBasicMaterial map={cloud3} transparent color={"#e9bb93"} />
          </mesh>
        ))}
        {[...new Array(20)].map((_data, idx) => (
          <mesh
            position={[-5 + idx * 10, -3 + Math.random() * 0.3, -3]}
            key={idx}
          >
            <planeGeometry args={[20, 5]} />
            <meshBasicMaterial
              map={cloud}
              transparent
              color={"#e9bb93"}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
        {[...cloudCount].map((_data, idx) => (
          <mesh
            position={[-3 + idx * 8, -3 + Math.random() * 0.3, 1]}
            key={idx}
          >
            <planeGeometry args={[10, 3]} />
            <meshBasicMaterial map={cloud2} transparent color={"#e9bb93"} />
          </mesh>
        ))}
      </group>

      {/* Top Cloud */}
      <mesh scale={10} position-y={5}>
        <planeGeometry />
        <meshBasicMaterial map={topCloud} transparent opacity={0.3} />
      </mesh>
      <mesh scale={[5, 3, 1]} position={[-5, 1.3, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={topCloud2} transparent opacity={0.2} />
      </mesh>
      <mesh scale={[3, 3, 1]} position={[5, 1.1, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={topCloud3} transparent opacity={0.4} />
      </mesh>
    </>
  );
};

export default Clouds;
