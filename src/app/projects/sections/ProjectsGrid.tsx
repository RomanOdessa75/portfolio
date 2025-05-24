"use client";

import Link from "next/link";
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
          const color = colors[index % colors.length];
          const href = `/projects/${project.slug}`;

          if (index < 4) {
            return (
              <Link href={href} key={project.id}>
                <LargeProjectCard
                  project={project}
                  color={color}
                  className="relative w-full min-h-[300px] aspect-video sm:aspect-square sm:min-h-0 flex-shrink-0 border border-black/20"
                />
              </Link>
            );
          } else if (index < 12) {
            return (
              <Link href={href} key={project.id}>
                <MediumProjectCard
                  project={project}
                  color={color}
                  className="relative aspect-[9/4] border border-black/20"
                />
              </Link>
            );
          } else {
            return (
              <Link href={href} key={project.id}>
                <SmallProjectCard
                  project={project}
                  color={color}
                  className="relative col-span-2 border border-black/20"
                  style={{ height: "calc(100vw * 0.065)" }}
                />
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProjectsGrid;
