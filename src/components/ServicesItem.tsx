import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  dividerMotion,
  itemContentMotion,
  itemCoverMotionAlt,
} from "@/utils/animations";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ServicesItemProps {
  index: number;
  title: string;
  answer: string;
  faqIndex: number;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}

const images = [
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  "/assets/images/image3.jpg",
];

const ServicesItem: React.FC<ServicesItemProps> = ({
  index,
  title,
  faqIndex,
  selectedIndex,
  setSelectedIndex,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const isSelected = faqIndex === selectedIndex;

  return (
    <>
      <motion.li
        className="relative cursor-pointer py-8 px-10 w-full isolate group"
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileHover="hover"
        onClick={() => setSelectedIndex(isSelected ? null : faqIndex)}
      >
        <div
          className={twMerge(
            "absolute h-0 w-full bottom-0 left-0 bg-[#ae899a] -z-10 group-hover:h-full transition-all duration-700",
            isSelected && "h-full"
          )}
        ></div>

        <div className="flex items-center relative w-full">
          <motion.div
            className="absolute inset-0 bg-[#c8a3b3]"
            variants={itemCoverMotionAlt}
          />
          <motion.span
            className="w-[4ch] text-2xl sm:text-3xl md:text-4xl"
            variants={itemContentMotion}
          >
            {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </motion.span>
          <h1 className="uppercase tracking-wide text-4xl font-extralight sm:text-5xl md:text-6xl flex-1">
            {title}
          </h1>

          <motion.div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div
              className="absolute w-full h-[2px] bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute h-full w-[2px] bg-black"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: isSelected ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="overflow-hidden lg:px-8 mt-6"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((imgSrc, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <p className="text-lg text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="w-16 h-[2px] bg-black my-4" />
                    <p className="text-sm text-center text-gray-600">
                      Sed do eiusmod tempor incididunt.
                    </p>
                    <div className="relative w-40 h-40 mt-4">
                      <Image
                        src={imgSrc}
                        alt={`Service image ${idx + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
      <motion.div
        className="bottom-0 h-[1px] bg-black w-full origin-left"
        variants={dividerMotion}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      />
    </>
  );
};

export default ServicesItem;
