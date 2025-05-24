"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Project } from "@/data/projectsData";

const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const windowVariants = {
  initial: { width: "60%", paddingBottom: "66%" },
  hover: {
    width: "74%",
    paddingBottom: "74%",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const imageContainerVariants = {
  initial: { top: "21%", bottom: "13%" },
  hover: {
    top: "13%",
    bottom: "13%",
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const textVariants = {
  initial: { opacity: 1, y: 0 },
  hover: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeOut" } },
};

const overlayTitleVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

interface LargeProjectCardProps {
  project: Project;
  color: string;
  className?: string;
}

const LargeProjectCard = ({
  project,
  color,
  className,
}: LargeProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enteredFromTop, setEnteredFromTop] = useState(true);
  const [exitFromTop, setExitFromTop] = useState(true);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const isTop = relativeY < rect.height / 2;

    setEnteredFromTop(isTop);
    setExitFromTop(isTop);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const isTop = relativeY < rect.height / 2;

    setExitFromTop(isTop);
    setIsHovered(false);
  };

  const getBackgroundVariants = () => {
    return {
      initial: {
        height: 0,
        top: enteredFromTop ? 0 : "auto",
        bottom: enteredFromTop ? "auto" : 0,
      },
      animate: {
        height: "100%",
        top: enteredFromTop ? 0 : "auto",
        bottom: enteredFromTop ? "auto" : 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
      exit: {
        height: 0,
        top: exitFromTop ? 0 : "auto",
        bottom: exitFromTop ? "auto" : 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: color }}
            variants={getBackgroundVariants()}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-x-0"
        variants={imageContainerVariants}
      >
        <motion.div
          className="absolute inset-0 mx-auto overflow-hidden"
          variants={windowVariants}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            variants={imageVariants}
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-normal z-10"
        variants={overlayTitleVariants}
      >
        {project.title}
      </motion.h2>

      <div className="absolute inset-x-8 top-1 xsml:top-3 sml:top-7 md:top-3 lg:top-6 xl:top-8 flex flex-col items-center text-center z-10">
        <motion.h2
          className="text-[1.4rem] xsml:text-[1.8rem] sml:text-[2.4rem] md:text-[1.8rem] mdl:text-[2.4rem] lg:text-[2.6rem] font-normal md:font-medium text-black xxl:mb-2"
          variants={textVariants}
        >
          {project.title}
        </motion.h2>
        <motion.h3
          className="sml:text-xl mdl:text-xl text-black"
          variants={textVariants}
        >
          {project.subtitle}
        </motion.h3>
      </div>

      <div className="absolute bottom-2 sml:bottom-6 md:bottom-4 mdl:bottom-4 lg:bottom-8 left-2 sml:left-8 text-black text-lg sml:text-xl z-10">
        {project.type}
      </div>
      <div className="absolute bottom-2 sml:bottom-6 md:bottom-4 mdl:bottom-4 lg:bottom-8 right-2 sml:right-8 text-black text-sm sml:text-xl md:text-lg mdl:text-xl border border-black/50 rounded-full px-2 sml:px-4 md:px-2 mdl:px-4 py-1 md:py-0 mdl:py-1 z-10">
        {project.createdAt}
      </div>
    </motion.div>
  );
};

export default LargeProjectCard;
