"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projectsData";
import { useState, useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "@/components/Button";

interface LgSmallCardProps {
  project: Project;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

const LgSmallCard = ({
  project,
  color,
  className,
  style,
}: LgSmallCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enteredFromTop, setEnteredFromTop] = useState(true);
  const [exitFromTop, setExitFromTop] = useState(true);

  const isBetween768and1024 = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );

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
      className={`relative flex items-center ${className}`}
      style={style}
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

      <div className="w-[32.5%] px-6 text-black text-[1.8rem] lg:text-[2.6rem] font-medium z-10">
        {project.title}
      </div>
      <div className="w-[23%] px-4 text-black text-sm lg:text-xl z-10">
        {project.subtitle}
      </div>
      <div className="w-[16%] px-4 text-black text-sm lg:text-lg z-10">
        {project.type}
      </div>
      <div className="w-[18.5%] z-10 ml-auto">
        <div className="w-full px-4 text-black z-10 right-0 flex justify-end items-center gap-4">
          <div className="text-black text-sm lg:text-xl border border-black/50 rounded-full px-4 py-1">
            {project.createdAt}
          </div>
          <div className="flex items-center">
            {isBetween768and1024 && <Button variant="black" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LgSmallCard;
