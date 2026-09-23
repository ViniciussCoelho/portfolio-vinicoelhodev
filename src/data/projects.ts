import type { Text } from "@/i18n/config";

export type Project = {
  name: string;
  /** A string, or `{ en, pt }` for a translated description. */
  description: Text;
  technologies: string[];
  github?: string;
  demo?: string;
  /** Path under /public (e.g. "/images/projects/foo.png") with its size. */
  image?: { src: string; alt: Text; width: number; height: number };
  /** Short label, e.g. { en: "In progress", pt: "Em andamento" }. */
  status?: Text;
  /**
   * Placeholder entries only show up in `npm run dev` (with a visible badge)
   * and are never rendered in production builds. Remove the flag — or the
   * entry — once you've filled in a real project.
   */
  placeholder?: boolean;
};

export const projects: Project[] = [
  // TODO: replace with a real project.
  {
    name: "Project name",
    description: {
      en: "One or two sentences about the problem it solves and what was interesting to build.",
      pt: "Uma ou duas frases sobre o problema que ele resolve e o que foi interessante construir.",
    },
    technologies: ["Ruby on Rails", "PostgreSQL", "Sidekiq"],
    github: "",
    demo: "",
    status: { en: "In progress", pt: "Em andamento" },
    placeholder: true,
  },
  // TODO: replace with a real project.
  {
    name: "Another project",
    description: {
      en: "Describe what it does, your role in it, and anything worth reading the code for.",
      pt: "Descreva o que ele faz, seu papel nele e o que vale a pena ler no código.",
    },
    technologies: ["NestJS", "Redis", "Docker"],
    github: "",
    demo: "",
    placeholder: true,
  },
];
