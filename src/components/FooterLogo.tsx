import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dividerMotion } from "@/utils/animations";
import StaticTitle from "./StaticTitle";

const FooterLogo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  //   const { scrollYProgress } = useScroll();
  //   const animatedTitleY = useTransform(
  //     scrollYProgress,
  //     [0, 0.5],
  //     ["100%", "-50%"]
  //   );

  return (
    <div ref={ref} className="flex justify-between items-end">
      <div className="flex flex-col justify-center items-center w-[100%]">
        <motion.div
          className="h-[2px] bg-white w-full origin-left bottom-80"
          variants={dividerMotion}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        />

        {/* <div className="flex justify-center items-center w-[100%]"> */}
        {/* <StaticTitle
          scrollYProgress={scrollYProgress}
          animatedTitleY={animatedTitleY}
        /> */}
        {/* <StaticTitle /> */}
        {/* </div> */}
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

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { dividerMotion } from "@/utils/animations";
// import StaticTitle from "./StaticTitle";

// const Section2 = () => {
//   const [ref, inView] = useInView({ triggerOnce: true });
//   const { scrollYProgress } = useScroll();
//   const animatedTitleY = useTransform(
//     scrollYProgress,
//     [0, 0.5],
//     ["100%", "-50%"]
//   );

//   return (
//     <div ref={ref} className="flex justify-between items-end">
//       <div className="relative flex justify-center items-center w-[100%]">
//         <motion.div
//           className="absolute h-[2px] bg-white w-full origin-left bottom-80"
//           variants={dividerMotion}
//           initial="initial"
//           animate={inView ? "animate" : "initial"}
//         />
//         <StaticTitle
//           scrollYProgress={scrollYProgress}
//           animatedTitleY={animatedTitleY}
//         />
//       </div>
//     </div>
//   );
// };

// export default Section2;
