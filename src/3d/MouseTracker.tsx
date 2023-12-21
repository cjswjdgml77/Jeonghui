import fragment from "@/shader/mouse/fragment";
import vertex from "@/shader/mouse/vertex";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import * as THREE from "three";
const MouseTracker = () => {
  const starsRef = useRef<THREE.Points>(null);
  const position = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random();
      positions[i * 3 + 1] = Math.random();
      positions[i * 3 + 2] = -5;
    }

    return positions;
  }, []);

  useFrame(({ viewport, pointer }) => {
    if (!starsRef.current) return;

    const pos = starsRef.current.geometry.getAttribute("position");
    let pow = 2;
    let factor = 1;
    for (let i = 0; i < pos.count; i++) {
      if (i > pow) {
        pow *= 2;
        factor = factor + 1;
      }
      //   const factorX = Math.floor(i / 10);
      //   const factorY = 0;
      const x = THREE.MathUtils.lerp(
        pos.getX(i),
        pointer.x * viewport.width,
        0.03 + i * 0.01
      );
      const y = THREE.MathUtils.lerp(
        pos.getY(i),
        pointer.y * viewport.height,
        0.03 + i * 0.01
      );
      pos.setXYZ(i, x, y, -5);
    }
    pos.needsUpdate = true;

    // console.log(pointer.x, pointer.y);
  });
  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={position.length / 3}
          array={position}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        vertexShader={vertex}
        fragmentShader={fragment}
        depthWrite={false}
      />
      {/* <pointsMaterial color={new Color("red")} size={0.2}> */}
    </points>
  );
};

export default MouseTracker;
