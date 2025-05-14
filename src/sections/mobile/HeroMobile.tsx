"use client";

import { FC, useEffect } from "react";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "framer-motion";

const HeroMobile: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/13522169-hd_1920_1080_25fps.mp4"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl xs:text-5xl sml:text-6xl text-white"
            ref={titleScope}
          >
            Full-Stack Developer
          </motion.h1>

          <motion.h2
            className="mt-6 text-sm xs:text-base sml:text-lg md:text-xl text-white max-w-md mx-auto"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            I specialize in turning digital ideas into user-friendly
            experiences, whether crafting sleek websites or seamless mobile
            apps. I blend creativity with tech savvy.
          </motion.h2>
        </div>

        <div className="container w-full px-4 mb-10">
          <motion.div
            className="h-[1px] bg-white w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-between w-full mt-4 text-white"
          >
            {["LinkedIn", "GitHub", "My Resume"].map((item, index) => (
              <motion.div
                key={item}
                className="relative group text-sm xs:text-base sml:text-lg"
                whileHover="hover"
                initial="initial"
              >
                <a
                  href="#"
                  className={`relative inline-block pb-1
                  ${
                    index === 0
                      ? "text-left"
                      : index === 1
                        ? "text-center"
                        : "text-right"
                  }
                `}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-px bg-white"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
