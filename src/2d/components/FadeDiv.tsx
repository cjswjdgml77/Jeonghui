import useShowWithScroll from "@/hook/useShowWithScroll";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const FadeDiv = ({
  children,
  notInital,
  page,
  scrollEl,
  back,
}: PropsWithChildren & {
  notInital?: boolean;
  page: number;
  scrollEl: HTMLElement;
  back?: boolean;
}) => {
  const [, isBack] = useShowWithScroll(page, scrollEl);
  console.log(page, isBack);
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center pointer-events-auto"
      initial={{
        y: back ? "-40%" : "40%",
        opacity: 0,
      }}
      animate={{
        y: "0%",
        opacity: 1,
        transition: {
          duration: notInital ? 0 : 2,
        },
      }}
      exit={{
        y: isBack ? "40%" : "-40%",
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDiv;
