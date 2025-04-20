import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dividerMotion } from "@/utils/animations";

const TitleWithDivider = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="mt-5">
      {/* <div className="mt-auto"> */}
      <h1 className="text-4xl text-white md:text-7xl lg:text-8xl">
        Contact Me
      </h1>
      <motion.div
        className="mt-4 h-[2px] bg-white w-full origin-left"
        variants={dividerMotion}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        ref={ref}
      />
    </div>
  );
};

export default TitleWithDivider;
