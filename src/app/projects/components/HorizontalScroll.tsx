"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "@/assets/works-slider/1.avif";
import image2 from "@/assets/works-slider/2.avif";
import image3 from "@/assets/works-slider/3.avif";
import image4 from "@/assets/works-slider/4.avif";
import ImageContainer from "./ImageContainer";

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div
      ref={containerRef}
      className="carousel w-full h-[400vh] bg-[#b692a1] text-white text-center"
    >
      <div className="contentContainer h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div
          style={{ x }}
          className="images flex flex-row gap-[3vw] py-0 px-16"
        >
          <motion.div
            className="imageItem flex-shrink-0"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={image1} description="June 2024" />
          </motion.div>
          <motion.div
            className="imageItem flex-shrink-0"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={image2} description="June 2024" />
          </motion.div>
          <motion.div
            className="imageItem flex-shrink-0"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={image3} description="June 2024" />
          </motion.div>
          <motion.div
            className="imageItem flex-shrink-0"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={image4} description="June 2024" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
