import { Html, useScroll } from "@react-three/drei";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Skills from "./Skills";

const Container = () => {
  const scroll = useScroll();
  const scrollEle = scroll.el;

  return (
    <Html portal={{ current: scroll.fixed }} fullscreen>
      <div className="grid grid-rows-[repeat(4,100vh)] w-screen max-w-4xl h-full font-Raleway mx-auto relative">
        <Hero scrollEl={scrollEle} />
        <About scrollEl={scrollEle} />
        <Skills scrollEl={scrollEle} />
        <Contact scrollEl={scrollEle} />
      </div>
    </Html>
  );
};

export default Container;
