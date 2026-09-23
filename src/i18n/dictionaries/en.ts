/** Interface strings (English). Content lives in src/data/. */
export const en = {
  skipToContent: "Skip to content",
  themeToggle: "Toggle dark mode",
  language: "Language",
  newTab: "opens in a new tab",
  nav: {
    about: "about",
    experience: "experience",
    projects: "projects",
    writing: "writing",
    contact: "contact",
  },
  hero: {
    hi: "hi, I'm",
    roleBefore: "Full stack Software Engineer, focused on",
    roleCircled: "backend",
    roleAfter: "",
    seeProjects: "See projects",
    resume: "Resume",
    bunnyNote: "just like me fr",
  },
  about: {
    title: "About",
    note: "5 years, more backend than front",
  },
  experience: {
    title: "Experience",
    technologies: "Technologies",
    education: "Education",
  },
  projects: {
    title: "Projects",
    note: "things I've built",
    code: "Code",
    demo: "Live demo",
    empty: "I'm still putting my projects together to show here.",
    emptyGithubBefore: "For now, my public code is on",
    emptyGithubAfter: ".",
    wip: "(work in progress)",
  },
  stack: {
    title: "Tech Stack",
  },
  writing: {
    title: "Writing",
    body: "I have a blog where I write about software engineering, mostly about things that come up in my day to day work.",
    cta: "Read my articles",
    soon: "link coming soon…",
  },
  contact: {
    title: "Contact",
    sayBefore: "Say",
    sayCircled: "hi",
    sayAfter: ".",
    body: "If you want to talk about a job opening, a project or a technical problem, you can reach me by email or LinkedIn.",
    note: "find me here",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  notFound: {
    title: "Page not found",
    body: "This page doesn't exist.",
    back: "Back to the start",
  },
  dev: {
    notSet: "Not set yet:",
    edit: "Edit",
    placeholder: "Placeholder: edit src/data/projects.ts (hidden in production)",
  },
};

export type Dictionary = typeof en;
