"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = "ROMAN RYABCHINSKIY".split("");

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startFlip, setStartFlip] = useState(false);
  const [alignText, setAlignText] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => setStartFlip(true), 2500);
    const alignTimeout = setTimeout(() => setAlignText(true), 3700);
    const exitTimeout = setTimeout(() => setExit(true), 5000);
    const finishTimeout = setTimeout(() => setShowPreloader(false), 6500);

    return () => {
      clearTimeout(flipTimeout);
      clearTimeout(alignTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#b692a1]"
          initial={{ x: 0 }}
          animate={exit ? { x: "100%" } : {}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-[80vw] h-[50vh] flex justify-center items-center gap-[1.2rem] perspective-[1200px]">
            {letters.map((char, index) => {
              const isEven = index % 2 === 0;
              const yOffset = alignText ? "0px" : isEven ? "-25px" : "25px";

              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                  animate={{ y: yOffset }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.div
                    className="h-full flex items-center justify-center"
                    style={{
                      rotateY: startFlip ? "0deg" : "90deg",
                      transition: "transform 1s ease-in-out",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span
                      className="text-white font-extrabold"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 10rem)",
                        lineHeight: 1,
                      }}
                    >
                      {char}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
