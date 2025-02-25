"use client";

import { FC, useEffect, useRef } from "react";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import { dividerMotion } from "@/utils/animations";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const contentBlock = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["50vw", "100vw"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    [1, 0.5, 0]
  );

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["#000", "#000", "#b692a1"]
  );

  const nameX = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["400%", "-250%"]);
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 2]);

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
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-6 flex flex-col justify-center relative z-10">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-8xl mt-40 md:mt-0 mix-blend-difference"
              ref={titleScope}
              style={{ color: titleColor }}
            >
              Full-Stack Developer
            </motion.h1>
            <motion.div
              className="h-full flex flex-col md:items-center mt-10 items-start gap-6 justify-between"
              ref={contentBlock}
              style={{ opacity: contentOpacity }}
            >
              <motion.h2
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
              >
                I specialize in turning digital ideas into user-friendly
                experiences, whether crafting sleek websites or seamless mobile
                apps. We blend creativity with tech savvy.
              </motion.h2>

              <div className="container absolute bottom-10 left-0 w-full mx-auto">
                <motion.div
                  className="h-[1px] bg-black w-full origin-left"
                  variants={dividerMotion}
                  initial="initial"
                  animate="animate"
                />

                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex justify-between w-full mt-4 text-lg text-black"
                >
                  {["LinkedIn", "GitHub", "My Resume"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="relative group"
                      whileHover="hover"
                      initial="initial"
                    >
                      <a
                        href="#"
                        className={`
                        relative inline-block pb-1
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
                          className="absolute bottom-0 left-0 w-0 h-px bg-black"
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
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-6 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full bg-[#b692a1]"
            style={{
              width: portraitWidth,
            }}
          >
            <video
              src="/videos/13522169-hd_1920_1080_25fps.mp4"
              className="object-cover"
              autoPlay
              loop
              muted
            />

            <motion.h2
              className="absolute text-5xl md:text-[70px] text-white font-thin"
              ref={nameRef}
              style={{
                x: nameX,
                y: nameY,
                scale: nameScale,
                transformOrigin: "center",
              }}
              initial={{ opacity: 0, y: "500%" }}
              animate={{ opacity: 1, y: "400%" }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
            >
              ROMAN RYABCHINSKIY
            </motion.h2>
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh] border-4" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
