"use client";

import Image from "next/image";
import image1 from "@/assets/works-slider/1.avif";
import { motion } from "framer-motion";
import { dividerMotion } from "@/utils/animations";
import Button from "@/components/Button";
import { Project } from "@/data/projectsData";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const isUnder768 = useMediaQuery("(max-width: 767px)");

  console.log(image1);

  return (
    <section className="relative px-10 pt-20 md:pt-28 pb-10 md:pb-16 bg-[#798e7b]">
      {" "}
      <div className="">
        <div className="">
          <div className="flex flex-col-reverse justify-between xsml:flex-row xsml:items-center mb-6">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-normal text-brand-dark leading-tight">
              Entreaure
            </h1>

            <div className="flex justify-end items-baseline">
              <Button
                variant={isUnder768 ? "black" : "primary"}
                className={
                  isUnder768
                    ? "h-12 xsml:inline-flex xsml:top-1.5"
                    : "h-20 xsml:top-1.5"
                }
              >
                <span className="text-lg">See project</span>
              </Button>
            </div>
          </div>
          <motion.div
            className="h-[1px] bg-black w-full origin-left"
            variants={dividerMotion}
            initial="initial"
            animate="animate"
          />
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-4 xsml:gap-6 md:gap-1">
            <p className="text-2xl xsml:text-3xl mdl:text-4xl text-black font-light">
              Cross-disciplinary design agency
            </p>
            <div className="flex items-center justify-between gap-8">
              <span className="text-xs sm:text-[0.9rem] lg:text-[1.5rem] text-black uppercase">
                {project?.type}
              </span>
              <span className="text-xs sm:text-[0.9rem] xsml:text-[1rem] lg:text-[1.5rem] text-black border border-black rounded-full px-3 py-1">
                {project?.createdAt}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 sml:mt-8">
        <div className="relative aspect-[16/7] w-full">
          {" "}
          <Image
            src={image1}
            alt="Abstract design product"
            fill
            className="object-cover"
            quality={90}
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3 text-sm text-gray-600">
            <p className="font-semibold">Art Direction</p>
            <p>UX/UI</p>
            <p>Motion</p>
            <p>Digital development</p>
            <p>Back-end development</p>
          </div>
          <div className="md:col-span-9">
            <p className="text-lg md:text-xl lg:text-2xl text-brand-dark leading-relaxed">
              Among other things, a cross-disciplinary design agency, entrusted
              us with the ambitious task of overhauling their showcase website.
            </p>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-brand-dark leading-relaxed">
              The goal was to create a platform that reflects their unique DNA:
              a combination of UX/UI expertise a meticulous artistic approach,
              and mastery of animations and transitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
