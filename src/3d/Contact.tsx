import * as THREE from "three";
const Contact = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color={new THREE.Color("#00ff00")} />
    </mesh>
  );
};

export default Contact;
