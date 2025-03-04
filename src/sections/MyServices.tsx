"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { easings } from "@/utils/animations";
import ServicesItem from "@/components/ServicesItem";
import { dividerMotion } from "@/utils/animations";

const MyServices: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "It depends on the complexity of the website and the scope of the project.",
    },
    {
      question: "What is your development process like?",
      answer:
        "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
    },
  ];

  return (
    <section className="section bg-[#c8a3b3]" id="services">
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:px-10">My Services</h2>
      <motion.div
        className="inset-0 bg-[#c8a3b3] flex flex-col justify-end p-8 mt-10 md:mt-16 lg:mt-20"
        initial={{ y: "-100%" }}
        animate={{
          y: 0,
          transition: { duration: 1, ease: easings.easeOutQuart },
        }}
        exit={{ y: "-100%", transition: { duration: 0.3 } }}
      >
        <motion.div
          className="bottom-0 h-[1px] bg-black w-full origin-left"
          variants={dividerMotion}
          initial="initial"
          animate="animate"
        />
        <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
          {faqs.map(({ question, answer }, faqIndex) => (
            <ServicesItem
              key={faqIndex}
              index={faqIndex + 1}
              title={question}
              answer={answer}
              faqIndex={faqIndex}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default MyServices;
