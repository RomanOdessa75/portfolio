import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

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
  // const scrollYProgress = { get: () => 0 };
  // const animatedTitleY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  // const { scrollYProgress } = useScroll();
  // const animatedTitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const { scrollYProgress } = useScroll();
  const animatedTitleY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["1000%", "-20%"]
  );

  return (
    <div className="flex justify-between items-end">
      {/* <h1 className="text-[8vw] leading-[0.8] mt-10 text-[#ffffff80]">
        Roman Ryabchinskiy
      </h1> */}
      <div
        className="container w-[100%] overflow-hidden px-4"
        // style={{ scale: "1.2" }}
      >
        {/* <AnimatedTitle /> */}
        <AnimatedTitle
          scrollYProgress={scrollYProgress}
          animatedTitleY={animatedTitleY}
        />
      </div>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
