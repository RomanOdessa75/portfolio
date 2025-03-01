"use client";

import { FC, useState } from "react";
import { AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
// import { div } from "motion/react-client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { easings } from "@/utils/animations";
import ServicesItem from "@/components/ServicesItem";

import { dividerMotion } from "@/utils/animations";

// interface MyServicesProps {
//   onClose: () => void;
// }

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const services = [
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

const MyServices: FC = () => {
  // const MyServices: React.FC<MyServicesProps> = ({ onClose }) => {
  const servicesItems = [
    "Services",
    "Our Work",
    "People & Culture",
    "Clients & Partners",
    "Get In Touch",
  ];

  return (
    <section className="section bg-[#b692a1]" id="faqs">
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:px-10">My Services</h2>
      <motion.div
        className="inset-0 bg-[#eee9e4] flex flex-col justify-end p-8 mt-10 md:mt-16 lg:mt-20"
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
          {servicesItems.map((item, idx) => (
            <ServicesItem key={idx} index={idx + 1} title={item} />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // return (
  //   <section className="section bg-[#b692a1]" id="faqs">
  //     <div className="container px-0">
  //       <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
  //       <div className="mt-10 md:mt-16 lg:mt-20">
  //         {services.map(({ question, answer }, faqIndex) => (
  //           <div
  //             key={question}
  //             className="border-t border-black py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
  //             onClick={() => {
  //               if (faqIndex === selectedIndex) {
  //                 setSelectedIndex(null);
  //               } else {
  //                 setSelectedIndex(faqIndex);
  //               }
  //             }}
  //           >
  //             <div
  //               className={twMerge(
  //                 "absolute h-0 w-full bottom-0 left-0 bg-[#ae899a] -z-10 group-hover/faq:h-full transition-all duration-700",
  //                 faqIndex === selectedIndex && "h-full"
  //               )}
  //             ></div>
  //             <div
  //               className={twMerge(
  //                 "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
  //                 faqIndex === selectedIndex && "lg:px-8"
  //               )}
  //             >
  //               <div className="text-2xl md:text-3xl lg:text-4xl">
  //                 {question}
  //               </div>
  //               <div
  //                 className={twMerge(
  //                   "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-200",
  //                   faqIndex === selectedIndex && "rotate-45"
  //                 )}
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   strokeWidth="1.5"
  //                   stroke="currentColor"
  //                   className="size-6"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M12 4.5v15m7.5-7.5h-15"
  //                   />
  //                 </svg>
  //               </div>
  //             </div>
  //             <AnimatePresence>
  //               {faqIndex === selectedIndex && (
  //                 <motion.div
  //                   className="overflow-hidden lg:px-8"
  //                   initial={{ height: 0 }}
  //                   animate={{ height: "auto" }}
  //                   exit={{ height: 0 }}
  //                   transition={{ duration: 0.7, ease: "easeOut" }}
  //                 >
  //                   <p className="text-xl mt-4">{answer}</p>
  //                 </motion.div>
  //               )}
  //             </AnimatePresence>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default MyServices;
