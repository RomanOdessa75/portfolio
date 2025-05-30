"use client";

import React, { FC, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import BtnLink from "./BtnLink";

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

const ServicesTitles: FC<ServicesTitlesProps> = ({
  data,
  selectedService,
  setSelectedService,
  openAccordion,
  setOpenAccordion,
}) => {
  return (
    <div className="w-full border-t border-black/25">
      {data.map((service, i) => (
        <ServiceTitle
          key={i}
          data={{ ...service, i }}
          setSelectedService={setSelectedService}
          isOpen={openAccordion === i}
          toggleAccordion={() =>
            setOpenAccordion(openAccordion === i ? null : i)
          }
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

const ServiceTitle: FC<ServiceTitleProps> = ({
  data,
  setSelectedService,
  isOpen,
  toggleAccordion,
  isHovered,
}) => {
  const { title, description, speed, i } = data;
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const crop = (string: string, maxLength: number) =>
    string.substring(0, maxLength);

  return (
    <div
      ref={container}
      className="border-b border-black/25 cursor-default relative z-10"
    >
      <div
        className="relative pl-[10%] group flex items-center justify-between"
        onMouseOver={() => setSelectedService(i)}
        onMouseLeave={() => setSelectedService(null)}
        onClick={toggleAccordion}
      >
        <div className="relative">
          <motion.p
            style={{ clipPath: clip }}
            className="inline-block text-white uppercase font-extralight text-[6vw] leading-[7.5vw] m-0 relative z-10"
          >
            {title}
          </motion.p>
          <p className="block absolute top-0 text-[#b692a1] uppercase font-extralight text-[6vw] leading-[7.5vw] m-0 z-[1]">
            {title}
          </p>
        </div>

        <div className="relative w-[2.5vw] h-[2.5vw] mr-[7%] z-30">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[0.2vw]"
            initial={{ backgroundColor: "#ffffff" }}
            animate={{ backgroundColor: isHovered ? "#000000" : "#ffffff" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-0 left-1/2 h-full w-[0.2vw]"
            initial={{ backgroundColor: "#ffffff", scaleY: 1 }}
            animate={{
              backgroundColor: isHovered ? "#000000" : "#ffffff",
              scaleY: isOpen ? 0 : 1,
            }}
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
          <p className="text-[#010101] uppercase font-extralight text-[6vw] leading-[7.5vw] m-0 relative z-10">
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
          <div className="w-2/3 pl-6 py-4 flex flex-col justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex-1 flex gap-2">
                <div className="w-[15%] text-[#010101] text-[1vw] font-normal">
                  01
                </div>
                <p className="w-[85%] text-[#010101] text-[1vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="flex-1 flex gap-2">
                <div className="w-[15%] text-[#010101] text-[1vw] font-normal">
                  02
                </div>
                <p className="w-[85%] text-[#010101] text-[1vw]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#010101]/20" />
            <div className="flex flex-col">
              <p className="text-[#010101] text-[1vw] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
              </p>
              <div className="flex flex-row self-end mt-4">
                <BtnLink text="View details" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesTitles;
