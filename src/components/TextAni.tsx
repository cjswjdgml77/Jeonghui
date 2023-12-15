import { motion } from "framer-motion";

type Props = {
  className?: string;
  letters: string[];
  delay?: number;
  text?: string;
};
const TextAni = ({ className, letters, delay = 0, text }: Props) => {
  return (
    <div className={`${className}`}>
      {letters.map((letter, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: delay + 0.2 + idx * 0.05,
              type: "spring",
              stiffness: 50,
            },
          }}
          className={`${text} ${!letter && "ml-2"}`}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default TextAni;
