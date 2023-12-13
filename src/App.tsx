import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./3d/Experience";
import Container from "./2d/Container";

const App = () => {
  return (
    <>
      <Canvas>
        <ScrollControls pages={4}>
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Container />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
