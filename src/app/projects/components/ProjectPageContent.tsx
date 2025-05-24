"use client";

import React from "react";
import ReactLenis from "lenis/react";
import Section from "@/app/projects/components/Section";
import HorizontalScroll from "@/app/projects/components/HorizontalScroll";
import ProjectHero from "@/app/projects/components/ProjectHero";
import HeaderSecondary from "@/components/HeaderSecondary";
import ItemFooter from "@/app/projects/components/ItemFooter";
import { projects } from "@/data/projectsData"; 

export default function ProjectPageContent() {
  

  const currentProject = projects[0]; 

  return (
    <ReactLenis root>
      <div className="p-0 m-0">
        <HeaderSecondary />
        <ProjectHero project={currentProject} />
        <HorizontalScroll />
        <Section title="End of the gallery" />
        <ItemFooter />
      </div>
    </ReactLenis>
  );
}
