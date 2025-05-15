"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projectsData";
import { useState, useRef } from "react";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.5, ease: "easeOut" } },
};

interface LgMediumCardProps {
  project: Project;
  color: string;
  className?: string;
}

const LgMediumCard = ({ project, color, className }: LgMediumCardProps) => {
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

  const getBackgroundVariants = () => ({
    initial: {
      height: 0,
      top: enteredFromTop ? 0 : "auto",
      bottom: enteredFromTop ? "auto" : 0,
    },
    animate: {
      height: "100%",
      top: enteredFromTop ? 0 : "auto",
      bottom: enteredFromTop ? "auto" : 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      top: exitFromTop ? 0 : "auto",
      bottom: exitFromTop ? "auto" : 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  });

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

      {/* Left: Image */}
      <div className="absolute inset-y-0 left-0 w-[44%] p-4 z-10">
        <div className="w-full aspect-square overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            variants={imageVariants}
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="absolute inset-y-0 right-0 w-[56%] p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between">
          <div className="text-black lg:text-xl border border-black/50 rounded-full px-4 py-1">
            {project.createdAt}
          </div>
          <div className="text-black lg:text-xl">{project.type}</div>
        </div>
        <div>
          <h2 className="text-2xl lg:text-[2.6rem] font-normal text-[black]">
            {project.title}
          </h2>
          <h3 className="text-xs lg:text-xl text-[#00000085]">
            {project.subtitle}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default LgMediumCard;
