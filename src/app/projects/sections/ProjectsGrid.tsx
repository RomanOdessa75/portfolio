"use client";

import { projects } from "@/data/projectsData";
import LargeProjectCard from "./LargeProjectCard";
import MediumProjectCard from "./MediumProjectCard";
import SmallProjectCard from "./SmallProjectCard";

const colors = ["#bfccd8", "#798e7b", "#b692a1", "#e49366"];

const ProjectsGrid = () => {
  return (
    <section className="bg-[#f1efeb] w-full">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-px w-full min-h-screen">
        {projects.map((project, index) => {
          if (index < 4) {
            return (
              <LargeProjectCard
                key={project.id}
                project={project}
                color={colors[index % colors.length]}
                className="relative w-full min-h-[300px] aspect-video sm:aspect-square sm:min-h-0 flex-shrink-0 border border-black/20"
              />
            );
          } else if (index < 12) {
            return (
              <MediumProjectCard
                key={project.id}
                project={project}
                color={colors[index % colors.length]}
                className="relative aspect-[9/4] border border-black/20"
              />
            );
          } else {
            return (
              <SmallProjectCard
                key={project.id}
                project={project}
                color={colors[index % colors.length]}
                className="relative col-span-2 border border-black/20"
                style={{ height: "calc(100vw * 0.065)" }}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProjectsGrid;
