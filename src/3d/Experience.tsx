import { useThree } from "@react-three/fiber";
import Contact from "./Contact";
import Hero from "./Hero";
import Skills from "./Skills";

const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  console.log(viewport);
  return (
    <>
      <group>
        <Hero />
      </group>
      {/* Skip About4 */}
      <group position-y={-viewport.height * 2}>
        <Skills />
      </group>
      <group position-y={-viewport.height * 3}>
        <Contact />
      </group>
    </>
  );
};

export default Experience;
