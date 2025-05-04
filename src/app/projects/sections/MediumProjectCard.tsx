"use client";

import { Project } from "@/data/projectsData";
import useMediaQuery from "@/hooks/useMediaQuery";
import LgMediumCard from "@/app/projects/components/lgMediumCard";
import SmCard from "@/app/projects/components/smCard";

interface MediumProjectCardProps {
  project: Project;
  color: string;
  className?: string;
}

const MediumProjectCard = ({
  project,
  color,
  className,
}: MediumProjectCardProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return isMobile ? (
    <SmCard project={project} color={color} className={className} />
  ) : (
    <LgMediumCard project={project} color={color} className={className} />
  );
};

export default MediumProjectCard;
