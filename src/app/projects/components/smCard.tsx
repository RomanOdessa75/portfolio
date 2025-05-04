"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projectsData";
import { useState, useRef } from "react";
import Button from "@/components/Button";
import useMediaQuery from "@/hooks/useMediaQuery";

const backgroundVariants = (enteredFromTop: boolean) => ({
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
    top: enteredFromTop ? 0 : "auto",
    bottom: enteredFromTop ? "auto" : 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
});

interface SmCardProps {
  project: Project;
  color: string;
  className?: string;
}

const SmCard = ({ project, color, className }: SmCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enteredFromTop, setEnteredFromTop] = useState(true);
  //   const [exitFromTop, setExitFromTop] = useState(true);
  const isMin460px = useMediaQuery("(min-width: 460px)");

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const isTop = relativeY < rect.height / 2;

    setEnteredFromTop(isTop);
    // setExitFromTop(isTop);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const isTop = relativeY < rect.height / 2;

    // setExitFromTop(isTop);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden w-full aspect-[3/1] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: color }}
            variants={backgroundVariants(enteredFromTop)}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-between p-4 h-full z-10">
        <div className="flex-1">
          <h2 className="text-[1.6rem] sm:text-[2.1rem] xsml:text-[2.6rem] sml:text-[3.2rem] font-semibold text-black uppercase">
            {project.title}
          </h2>
          <h3 className="text-[1rem] sm:text-[1.1rem] xsml:text-[1.5rem] sml:text-[1.8rem] text-black">
            {project.subtitle}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm sm:text-[0.9rem] xsml:text-[1.4rem] sml:text-[1.5rem] text-black border border-black rounded-full px-3 py-1">
              {project.createdAt}
            </span>
            <span className="text-sm sm:text-[0.9rem] xsml:text-[1.4rem] sml:text-[1.5rem] text-black uppercase">
              {project.type}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <Button variant={isMin460px ? "black-large" : "black"} />
        </div>
      </div>
    </motion.div>
  );
};

export default SmCard;
