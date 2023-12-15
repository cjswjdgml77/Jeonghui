import fragment from "@/shader/bg/fragment";
import vertex from "@/shader/bg/vertex";
import { useThree } from "@react-three/fiber";

import Clouds from "./hero/Clouds";
const Hero = () => {
  const viewport = useThree((state) => state.viewport);
  const widthZdepth = (): [number, number, number] => {
    const fov = (75 * Math.PI) / 180;

    const height = 2 * Math.tan(fov / 2) * 25;
    const width = height * viewport.aspect;
    return [width, height, 1];
  };
  return (
    <>
      <Clouds />
      <mesh position={[0, 0, -20]} scale={widthZdepth()}>
        <planeGeometry />
        <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
      </mesh>
    </>
  );
};

export default Hero;
