export interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  type: string;
  createdAt: string;
}

export const projects: Project[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  image: "/assets/projects/akaru_projects_1-3600x1720.avif",
  title: "Best Present",
  subtitle: "Printing and personalized gifts",
  type: "e-commerce",
  createdAt: "2025",
  slug: "my-cool-project",
}));
