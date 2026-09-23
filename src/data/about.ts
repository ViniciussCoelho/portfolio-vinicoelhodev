import type { Localized } from "@/i18n/config";

/**
 * Copy for the hero and the About section. Each string is one paragraph; the
 * first About paragraph is shown larger, as a lede.
 */

export const hero: { intro: Localized } = {
  intro: {
    en: "I work on B2B SaaS products, front to back. My focus is the backend: APIs, integrations, async processing and databases. Day to day I mostly use Ruby on Rails, Node.js, React and AWS.",
    pt: "Trabalho com produtos SaaS B2B, do front ao back. Meu foco é o backend: APIs, integrações, processamento assíncrono e banco de dados. No dia a dia uso principalmente Ruby on Rails, Node.js, React e AWS.",
  },
};

export const about: Localized<string[]> = {
  en: [
    "I have 5 years of experience in software development, most of it on B2B SaaS platforms. I build full stack features with Ruby on Rails, React and TypeScript, and I also use Node.js and NestJS in microservices.",
    "My focus is the backend. I work with REST APIs, integrations, microservices and async processing with Sidekiq and SQS, and I spend a good amount of time optimizing queries on PostgreSQL and MySQL. I'm also close to production: deploys, incidents, troubleshooting and observability with Datadog, Grafana, New Relic and CloudWatch.",
    "I like being part of technical decisions, and I also work on architecture and cloud. I plan the architecture of new features, write technical docs, spikes and POCs to validate the approach before implementing, and take part in refactoring legacy systems. I have hands-on experience with AWS and Docker, including SQS and CloudWatch. Right now I'm studying platform engineering, SRE, application security and LLM development, and I'm doing a postgraduate degree in Computer Networks at UTFPR.",
  ],
  pt: [
    "Tenho 5 anos de experiência com desenvolvimento de software, a maior parte em plataformas SaaS B2B. Desenvolvo funcionalidades full stack com Ruby on Rails, React e TypeScript, e também uso Node.js e NestJS em microsserviços.",
    "Meu foco é o backend. Trabalho com APIs REST, integrações, microsserviços e processamento assíncrono com Sidekiq e SQS, e passo boa parte do tempo otimizando queries em PostgreSQL e MySQL. Também acompanho bastante a parte de produção: deploys, incidentes, troubleshooting e observabilidade com Datadog, Grafana, New Relic e CloudWatch.",
    "Gosto de participar das decisões técnicas e também trabalho com arquitetura e nuvem. Planejo a arquitetura das funcionalidades, escrevo documentação técnica, spikes e POCs para validar a abordagem antes de implementar, e participo da refatoração de sistemas legados. Tenho experiência com AWS e Docker, incluindo SQS e CloudWatch. Atualmente estou estudando platform engineering, SRE, segurança de aplicações e desenvolvimento com LLMs, e faço pós-graduação em Redes de Computadores na UTFPR.",
  ],
};
