import { useThree } from "@react-three/fiber";
import { Color } from "three";
import Background from "./Background";

const Experience = () => {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight color={new Color("#DCB697")} />
      <group>
        <Background />
      </group>
    </>
  );
};

export default Experience;
