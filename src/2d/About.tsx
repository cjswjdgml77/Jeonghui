import useShowWithScroll from "@/hook/useShowWithScroll";
import { ScrollElementProp } from "./Hero";
import StickyContainer from "./components/StickyContainer";
import { AnimatePresence, motion } from "framer-motion";
import FadeDiv from "./components/FadeDiv";
import { useRef, useState } from "react";
const About = ({ scrollEl }: ScrollElementProp) => {
  const [isShow, isBack] = useShowWithScroll(1, scrollEl);
  const describeBtnRef = useRef<HTMLButtonElement>(null);
  const descriptions = [
    "Passionate, self driven, creative and problem-solving",
    "Hard-working, consistency and adventure",
    "communicative, detail-oriented, and versatile ",
  ];
  const [showDescription, setDescription] = useState(false);
  return (
    <StickyContainer>
      <AnimatePresence>
        {isShow && (
          <FadeDiv page={1} scrollEl={scrollEl} back={isBack}>
            <div className="flex flex-col md:flex-row  px-5 md:px-10 items-center gap-5 sm:gap-10">
              <img className="flex-[2] sm:flex-[4] w-full aspect-square max-w-[200px] sm:max-w-full" />
              <div className="flex-1 sm:flex-[7] h-full flex flex-col items-start transition-[height] duration-1000">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-3xl">Hi, Welcome</h2>
                  <p className="text-base md:text-lg">
                    Hey, I’m Jeonghui Cheon and a Fullstack developer from
                    Korea. I am currently living in NSW. I will bring you a
                    stunning web development and design. I love working in
                    programming and being a developer is the best choice i had
                    ever made,
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    ref={describeBtnRef}
                    className="underline underline-offset-8 mb-4 relative flex gap-3"
                    onClick={() => {
                      setDescription((state) => !state);
                    }}
                  >
                    Describe me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-6 h-6 transition-transform translate-y-[2px] ${
                        !showDescription && "-rotate-90"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {showDescription &&
                      descriptions.map((data, idx) => (
                        <motion.div
                          key={data}
                          className="font-light italic text-base md:text-lg ml-2 text-gray-500"
                          initial={{
                            x: "50%",
                            opacity: 0,
                          }}
                          animate={{
                            x: "0%",
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                              delay: 0.25 + idx * 0.25,
                            },
                          }}
                          exit={{
                            x: "20%",
                            opacity: 0,
                            transition: {
                              duration: 0.3,
                              ease: "easeOut",
                            },
                          }}
                        >
                          {data}
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeDiv>
        )}
      </AnimatePresence>
    </StickyContainer>
  );
};

export default About;
