"use client";

import { useState } from "react";
import BurgerBtn from "@/components/BurgerBtn";
import IntroSection from "./IntroSection";
import ProjectsGrid from "./ProjectsGrid";
import PageFooter from "./PageFooter";
import { AnimatePresence, motion } from "framer-motion";
import NavMenu from "@/components/NavMenu";

const ProjectsContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full z-[100]"
        >
          <div className="container !max-w-full">
            <div className="flex justify-end h-20 items-center">
              <div className="flex items-center gap-4">
                <BurgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && <NavMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Sections */}
      <IntroSection />
      <ProjectsGrid />
      <PageFooter />
    </>
  );
};

export default ProjectsContent;
