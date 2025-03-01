import React, { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "@/assets/icons/arrow.svg";
import {
  arrowMotion,
  dividerMotion,
  itemContentMotion,
  itemCoverMotion,
} from "@/utils/animations";

interface ServicesItemProps {
  index: number;
  title: string;
}

const ServicesItem: React.FC<ServicesItemProps> = ({ index, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <motion.li
        className={`cursor-pointer py-8 px-10 relative w-full ${
          isLoading ? "pointer-events-none" : "pointer-events-auto"
        }`}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onAnimationComplete={() => setIsLoading(false)}
      >
        <div className="flex items-center relative w-full">
          <motion.div
            // className="absolute inset-0 bg-[#eee9e4]"
            className="absolute inset-0 bg-[#b692a1]"
            variants={itemCoverMotion}
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
        {/* <motion.div
        className="bottom-0 h-[1px] mt-4 bg-black w-full origin-left"
        variants={dividerMotion}
      /> */}
      </motion.li>
      <motion.div
        className="bottom-0 h-[1px] bg-black w-full origin-left"
        variants={dividerMotion}
        initial="initial"
        animate="animate"
      />
    </>
  );
};

export default ServicesItem;
