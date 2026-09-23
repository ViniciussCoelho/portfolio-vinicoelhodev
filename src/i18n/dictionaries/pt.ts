import type { Dictionary } from "./en";

/** Textos da interface (português). O conteúdo fica em src/data/. */
export const pt: Dictionary = {
  skipToContent: "Pular para o conteúdo",
  themeToggle: "Alternar tema escuro",
  language: "Idioma",
  newTab: "abre em uma nova aba",
  nav: {
    about: "sobre",
    experience: "experiência",
    projects: "projetos",
    writing: "conteúdo",
    contact: "contato",
  },
  hero: {
    hi: "oi, eu sou o",
    roleBefore: "Engenheiro de Software full stack, com foco em",
    roleCircled: "backend",
    roleAfter: "",
    seeProjects: "Ver projetos",
    resume: "Currículo",
    bunnyNote: "just like me fr",
  },
  about: {
    title: "Sobre",
    note: "5 anos, mais back do que front",
  },
  experience: {
    title: "Experiência",
    technologies: "Tecnologias",
    education: "Formação",
  },
  projects: {
    title: "Projetos",
    note: "coisas que construí",
    code: "Código",
    demo: "Demo",
    empty: "Ainda estou organizando meus projetos para colocar aqui.",
    emptyGithubBefore: "Por enquanto, meu código público está no",
    emptyGithubAfter: ".",
    wip: "(em construção)",
  },
  stack: {
    title: "Stack",
  },
  writing: {
    title: "Conteúdo",
    body: "Escrevo sobre engenharia de software no meu blog e também tenho um canal no YouTube.",
    blogCta: "Ler meus artigos",
    youtubeCta: "Ver meu canal",
    soon: "links em breve…",
  },
  contact: {
    title: "Contato",
    sayBefore: "Diga",
    sayCircled: "oi",
    sayAfter: ".",
    body: "Se quiser conversar sobre alguma vaga, projeto ou problema técnico, pode me chamar por e-mail ou LinkedIn.",
    note: "me encontre aqui",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  notFound: {
    title: "Página não encontrada",
    body: "Essa página não existe.",
    back: "Voltar ao início",
  },
  dev: {
    notSet: "Ainda não configurado:",
    edit: "Edite",
    placeholder: "Exemplo: edite src/data/projects.ts (oculto em produção)",
  },
};
