"use client";

import { Project } from "@/data/projectsData";
import useMediaQuery from "@/hooks/useMediaQuery";
import LgSmallCard from "@/app/projects/components/LgSmallCard";
import SmCard from "@/app/projects/components/SmCard";

interface SmallProjectCardProps {
  project: Project;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

const SmallProjectCard = ({
  project,
  color,
  className,
  style,
}: SmallProjectCardProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return isMobile ? (
    <SmCard project={project} color={color} className={className} />
  ) : (
    <LgSmallCard
      project={project}
      color={color}
      className={className}
      style={style}
    />
  );
};

export default SmallProjectCard;
