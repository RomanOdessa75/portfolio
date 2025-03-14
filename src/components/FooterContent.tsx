import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import AnimatedTitle from "./AnimatedTitle";
import { dividerMotion } from "@/utils/animations";
import StaticTitle from "./StaticTitle";
import { useInView } from "react-intersection-observer";

export default function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  // const scrollYProgress = { get: () => 0 };
  // const animatedTitleY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  // const { scrollYProgress } = useScroll();
  // const animatedTitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const { scrollYProgress } = useScroll();
  const animatedTitleY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "-50%"]
  );

  return (
    <div className="flex justify-between items-end">
      {/* <h1 className="text-[8vw] leading-[0.8] mt-10 text-[#ffffff80]">
        Roman Ryabchinskiy
      </h1> */}

      <div
        // className="container w-[100%] overflow-hidden px-4"
        className="relative flex justify-center items-center w-[100%]"
        // style={{ scale: "1.2" }}
      >
        {/* <motion.div
          className="absolute h-[1px] bg-white w-full origin-left bottom-80"
          variants={dividerMotion}
          initial="initial"
          animate="animate"
        /> */}
        <motion.div
          className="absolute h-[1px] bg-white w-full origin-left bottom-80"
          variants={dividerMotion}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        />
        {/* <AnimatedTitle /> */}
        <StaticTitle
          scrollYProgress={scrollYProgress}
          animatedTitleY={animatedTitleY}
        />
      </div>
      {/* <p>©copyright</p> */}
    </div>
  );
};

const Nav = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <h1 className="text-4xl text-white md:text-7xl lg:text-8xl">
        Contact Me
      </h1>
      <motion.div
        className="absolute h-[1px] bg-white w-full origin-left bottom-80"
        variants={dividerMotion}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      />
      <h3 className="mb-2 uppercase text-[#ffffff80]">
        Interested in working together? Awesome! The quickest way to get in
        touch with us is to
      </h3>
      <div className="flex shrink-0 gap-20 mt-10">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
          <p className="text-[#ffffff80]">Home</p>
          <p className="text-[#ffffff80]">Projects</p>
          <p className="text-[#ffffff80]">Our Mission</p>
          <p className="text-[#ffffff80]">Contact Us</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
          <p className="text-[#ffffff80]">News</p>
          <p className="text-[#ffffff80]">Learn</p>
          <p className="text-[#ffffff80]">Certification</p>
          <p className="text-[#ffffff80]">Publications</p>
        </div>
      </div>
    </>
  );
};
