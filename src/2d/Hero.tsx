import TextAni from "@/components/TextAni";
import { AnimatePresence, motion } from "framer-motion";
import StickyContainer from "./components/StickyContainer";
import useShowWithScroll from "@/hook/useShowWithScroll";
import FadeDiv from "./components/FadeDiv";

export type ScrollElementProp = {
  scrollEl: HTMLDivElement;
};
const Hero = ({ scrollEl }: ScrollElementProp) => {
  const name = [
    "J",
    "e",
    "o",
    "n",
    "g",
    "h",
    "u",
    "i",
    "",
    "C",
    "h",
    "e",
    "o",
    "n",
  ];
  const intro = [
    "I",
    "",
    "a",
    "m",
    "",
    "a",
    "",
    "F",
    "u",
    "l",
    "l",
    "s",
    "t",
    "a",
    "c",
    "k",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "",
  ];

  const delay = 1 + name.length * 0.05;
  const [isShow] = useShowWithScroll(0, scrollEl);

  return (
    <StickyContainer>
      <AnimatePresence>
        {isShow && (
          <FadeDiv notInital={true} page={0} scrollEl={scrollEl}>
            <motion.div className="flex flex-col items-center relative">
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: "-20%",
                  transition: {
                    duration: 1,
                    delay: delay,
                    ease: "easeInOut",
                    // type: "spring",
                    // stiffness: 40,
                  },
                }}
                className="flex overflow-hidden"
              >
                <TextAni
                  className="flex py-1"
                  text="text-4xl md:text-6xl"
                  letters={name}
                />
              </motion.div>
              <TextAni
                className="flex flex-wrap text-center italic font-light text-gray-500"
                delay={1 + delay}
                letters={intro}
                text={"text-lg md:text-2xl"}
              />
              <TextAni
                className="flex flex-wrap text-center italic font-light text-gray-500"
                delay={1 + delay + intro.length * 0.05}
                letters={[
                  "W",
                  "e",
                  "l",
                  "c",
                  "o",
                  "m",
                  "e",
                  "",
                  "t",
                  "o",
                  "",
                  "m",
                  "y",
                  "",
                  "w",
                  "o",
                  "r",
                  "l",
                  "d",
                ]}
                text={"text-lg md:text-2xl"}
              />
            </motion.div>
          </FadeDiv>
        )}
      </AnimatePresence>
    </StickyContainer>
  );
};

export default Hero;
