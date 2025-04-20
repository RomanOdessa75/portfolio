import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dividerMotion } from "@/utils/animations";

const FooterLogo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex justify-between items-end">
      <div className="flex flex-col justify-center items-center w-[100%]">
        <motion.div
          className="h-[2px] bg-white w-full origin-left bottom-80"
          variants={dividerMotion}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        />

        <div className="w-full">
          <p
            className="text-white text-[95px] text-center text-nowrap   whitespace-nowrap"
            style={{ transform: "scaleY(1.4)" }}
          >
            RYABCHINSKIY ROMAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;
