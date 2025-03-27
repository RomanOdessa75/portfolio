"use client";

import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

interface Service {
  title: string;
  description: string;
  speed: number;
}

interface ServicesTitlesProps {
  data: Service[];
  selectedService: number | null; 
  setSelectedService: (index: number | null) => void;
  openAccordion: number | null;
  setOpenAccordion: (index: number | null) => void;
}

const ServicesTitles: FC<ServicesTitlesProps> = ({ data, selectedService, setSelectedService, openAccordion, setOpenAccordion }) => {
  return (
    <div className="w-full border-t border-black/25">
      {data.map((service, i) => (
        <ServiceTitle
          key={i}
          data={{ ...service, i }}
          setSelectedService={setSelectedService}
          isOpen={openAccordion === i}
          toggleAccordion={() => setOpenAccordion(openAccordion === i ? null : i)}
          isHovered={selectedService === i} 
        />
      ))}
    </div>
  );
};

interface ServiceTitleProps {
  data: Service & { i: number };
  setSelectedService: (index: number | null) => void;
  isOpen: boolean;
  toggleAccordion: () => void;
  isHovered: boolean;
}

const ServiceTitle: FC<ServiceTitleProps> = ({ data, setSelectedService, isOpen, toggleAccordion, isHovered }) => {
  const { title, description, speed, i } = data;
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const crop = (string: string, maxLength: number) => string.substring(0, maxLength);

  return (
    <div ref={container} className="border-b border-black/25 cursor-default relative z-10">
      <div
        className="relative pl-[10%] group flex items-center justify-between"
        onMouseOver={() => setSelectedService(i)}
        onMouseLeave={() => setSelectedService(null)}
        onClick={toggleAccordion}
      >
        <div className="relative">
          <motion.p
            style={{ clipPath: clip }}
            className="inline-block text-white uppercase font-bold text-[6vw] leading-[7.5vw] m-0 relative z-10"
          >
            {title}
          </motion.p>
          <p className="block absolute top-0 text-[#b692a1] uppercase font-bold text-[6vw] leading-[7.5vw] m-0 z-[1]">
            {title}
          </p>
        </div>
       
        <div className="relative w-[2.5vw] h-[2.5vw] mr-[7%] z-30">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[0.2vw] bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-0 left-1/2 h-full w-[0.2vw] bg-black"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
       
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#e49366] flex justify-between items-center px-[10%] z-20"
          initial={false}
          animate={{
            clipPath: isHovered ? "inset(0 0 0)" : "inset(50% 0 50%)",
          }}
          transition={{ duration: 0.4 }}
          style={{ height: "7.5vw" }} 
        >
          <p className="text-[#010101] uppercase font-bold text-[6vw] leading-[7.5vw] m-0 relative z-10">
            {crop(title, 9)}
          </p>
          <p className="w-[40%] text-[1vw] font-bold">{description}</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex px-[10%] py-4 bg-[#e49366]">
          <div className="w-1/3">
            <div className="w-full pb-[75%] bg-gray-300" /> 
          </div>
          <div className="w-2/3 pl-4">
            <p className="text-[#010101] text-[1vw] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesTitles;
