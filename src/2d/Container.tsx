import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Skills from "./Skills";

const Container = () => {
  return (
    <div className="grid grid-rows-[repeat(4,100vh)] w-screen h-full">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Container;
