import React, { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "@/assets/icons/arrow.svg";
import {
  arrowMotion,
  dividerMotion,
  itemContentMotion,
  itemCoverMotionAlt,
} from "@/utils/animations";
import { useInView } from "react-intersection-observer";

interface ServicesItemProps {
  index: number;
  title: string;
}

const ServicesItem: React.FC<ServicesItemProps> = ({ index, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.li
        className={`cursor-pointer py-8 px-10 relative w-full ${
          isLoading ? "pointer-events-none" : "pointer-events-auto"
        }`}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileHover="hover"
        onAnimationComplete={() => setIsLoading(false)}
      >
        <div className="flex items-center relative w-full">
          <motion.div
            className="absolute inset-0 bg-[#c8a3b3]"
            variants={itemCoverMotionAlt}
          />
          <motion.span
            className="w-[4ch] text-2xl sm:text-3xl md:text-4xl"
            variants={itemContentMotion}
          >
            {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </motion.span>
          <h1 className="uppercase tracking-wide text-4xl font-extralight sm:text-5xl md:text-6xl flex-1">
            {title}
          </h1>
          <motion.div variants={arrowMotion}>
            <Arrow className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.li>
      <motion.div
        className="bottom-0 h-[1px] bg-black w-full origin-left"
        variants={dividerMotion}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      />
    </>
  );
};

export default ServicesItem;
