import fragment from "@/shader/bg/fragment";
import vertex from "@/shader/bg/vertex";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Clouds from "./hero/Clouds";
import { useMemo, useRef } from "react";
import { useScroll } from "@react-three/drei";
const Background = () => {
  const viewport = useThree((state) => state.viewport);
  const widthZdepth = (): [number, number, number] => {
    const fov = (75 * Math.PI) / 180;

    const height = 2 * Math.tan(fov / 2) * 25;
    const width = height * viewport.aspect;
    return [width, height, 1];
  };

  const prev = useRef([0, 0]);
  const start = useRef(false);
  const end = useRef(false);
  const coor = useRef<number[][]>([]);
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => {
    return {
      uFirst: {
        value: new THREE.Color("#87565e"),
        // { x: 0.529, y: 0.377, z: 0.369 },
      },
      uSecond: {
        value: new THREE.Color("#bd6868"),
      },
      uThird: {
        value: new THREE.Color("#e9bb93"),
      },
      uFourth: {
        value: new THREE.Color("#84a0ba"),
      },
    };
  }, []);
  const scroll = useScroll();
  useFrame(() => {
    // console.log(shaderRef.current?.uniforms.uFirst?.value);
    // return;
    if (!shaderRef.current) return;
    const uniforms = shaderRef.current.uniforms;
    uniforms.uFirst.value = {
      x: 0.529 - (0.529 - 0.322) * scroll.offset,
      y: 0.337 - (0.337 - 0.29) * scroll.offset,
      z: 0.369 + (0.6 - 0.369) * scroll.offset,
    };

    uniforms.uSecond.value = {
      x: 0.741 - (0.741 - 0.043) * scroll.offset,
      y: 0.408 - (0.408 - 0.122) * scroll.offset,
      z: 0.408 - (0.408 - 0.227) * scroll.offset,
    };

    uniforms.uThird.value = {
      x: 0.914 - (0.914 - 0.239) * scroll.offset,
      y: 0.733 - (0.733 - 0.216) * scroll.offset,
      z: 0.576 - (0.576 - 0.447) * scroll.offset,
    };

    uniforms.uFourth.value = {
      x: 0.518 - (0.518 - 0.055) * scroll.offset,
      y: 0.627 - (0.627 - 0.039) * scroll.offset,
      z: 0.729 - (0.729 - 0.078) * scroll.offset,
    };
  });
  return (
    <>
      <Clouds />
      <mesh
        position={[0, 0, -20]}
        scale={widthZdepth()}
        onPointerMove={(e) => {
          if (prev.current[0] !== e.x && prev.current[1] !== e.y) {
            start.current = true;
            coor.current.push([e.x, e.y]);
          } else if (prev.current[0] === e.x && prev.current[1] === e.y) {
            if (start.current === true) {
              start.current = false;
              end.current = true;
            }
          }

          if (end.current) {
            const first = coor.current[0];
            const last = coor.current[coor.current.length - 1];
            console.log(first, last);
            // const distance = Math.sqrt(
            //   Math.pow(first[0] - last[0], 2) + Math.pow(first[1] - last[1], 2)
            // );

            coor.current = [];
          }
          end.current = false;
          prev.current = [e.x, e.y];
        }}
      >
        <planeGeometry />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          ref={shaderRef}
        />
      </mesh>
    </>
  );
};

export default Background;
