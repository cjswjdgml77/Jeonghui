import { AnimatePresence } from "framer-motion";
import { ScrollElementProp } from "./Hero";
import StickyContainer from "./components/StickyContainer";
import useShowWithScroll from "@/hook/useShowWithScroll";
import FadeDiv from "./components/FadeDiv";

const mySkills = [
  { skill: "Javascript", rate: "90%" },
  { skill: "React", rate: "90%" },
  { skill: "Three.js", rate: "75%" },
  { skill: "Mysql", rate: "70%" },
  { skill: "Css", rate: "90%" },
  { skill: "Html5", rate: "90%" },
  { skill: "Next.js", rate: "75%" },
  { skill: "Typescript", rate: "80%" },
];

const Skills = ({ scrollEl }: ScrollElementProp) => {
  const [isShow, isBack] = useShowWithScroll(2, scrollEl);
  return (
    <StickyContainer>
      <AnimatePresence>
        {isShow && (
          <FadeDiv page={2} scrollEl={scrollEl} back={isBack}>
            <div className="flex flex-col w-full text-center">
              <h2 className="mb-20">My Skills</h2>
              <div className="grid grid-cols-4 grid-rows-2 w-full max-w-2xl mx-auto gap-y-10 text-lg mb-36">
                {mySkills.map(({ skill, rate }) => (
                  <div
                    className="
                            letter
                            leading-10
                            relative
                            "
                    key={skill}
                  >
                    {skill} <br /> {rate}
                  </div>
                ))}
              </div>
              <div className="text-lg px-5 text-slate-500">
                Docker, Jenkins, Php, Python, Mongo DB, Taiilwind, Git, Express,
                Node
              </div>
            </div>
          </FadeDiv>
        )}
      </AnimatePresence>
    </StickyContainer>
  );
};

export default Skills;
