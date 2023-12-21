import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./3d/Experience";
import Container from "./2d/Container";
import MouseTracker from "./3d/MouseTracker";

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ScrollControls pages={4}>
          {/* <Scroll> */}
          <Experience />
          {/* </Scroll> */}
          <Container />
          <MouseTracker />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
