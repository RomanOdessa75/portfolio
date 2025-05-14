"use client";

import React from "react";
import { motion } from "framer-motion";

const marqueeSegmentContent = [
  "INDEPENDENT",
  "*",
  "CREATIVE",
  "*",
  "PASSIONATE",
  "*",
  "INDEPENDENT",
  "*",
  "CREATIVE",
  "*",
  "PASSIONATE",
  "*",
];

// const staticTexts = {
//   left: "I CREATE WEB APPLICATIONS WITH LOVE AND PASSION",
//   center: "FOR COOL BRANDS AND CUSTOMERS",
//   right: "SINCE 2022",
// };

const MarqueeMobile: React.FC = () => {
  return (
    <section className="relative z-10">
      {/* Верхняя секция - Бегущая строка */}
      <div className="bg-gray-100 py-4 overflow-hidden w-full">
        {/* Анимируемый контейнер */}
        <div className="flex flex-nowrap animate-marquee">
          {[
            ...marqueeSegmentContent,
            ...marqueeSegmentContent,
            ...marqueeSegmentContent,
            ...marqueeSegmentContent,
          ].map((item, index) => (
            <span
              key={`marquee-item-${index}`}
              className={`mx-4 text-2xl font-normal uppercase tracking-wider flex-shrink-0 ${
                item === "*" ? "text-orange-500" : "text-black"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Нижняя секция - Статичный текст и анимированная линия */}
      <div
        className="text-white py-5 px-4 md:px-10"
        style={{ backgroundColor: "#798e7b" }}
      >
        <motion.div
          className="h-0.5 w-full bg-black my-4"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        <div className="text-black">
          <div className="px-[10%] w-full">
            <p className="text-[1.2rem] xsml:text-2xl text-left md:text-4xl font-extralight leading-relaxed">
              Right from the start, I’ve carved out our niche with a bold
              approach. Crafting immersive experiences that authentically
              reflect your essence relies on seamlessly blending your vision
              with my expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeMobile;
