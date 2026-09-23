import type { Localized, Text } from "@/i18n/config";

export type StackGroup = {
  label: Localized;
  items: Text[];
};

export const stack: StackGroup[] = [
  {
    label: { en: "Backend", pt: "Backend" },
    items: ["Ruby", "Ruby on Rails", "Node.js", "NestJS", { en: "REST APIs", pt: "APIs REST" }, { en: "Microservices", pt: "Microsserviços" }],
  },
  {
    label: { en: "Frontend", pt: "Frontend" },
    items: ["React", "TypeScript", "JavaScript"],
  },
  {
    label: { en: "Async", pt: "Assíncrono" },
    items: ["Sidekiq", "Amazon SQS", "Shoryuken", { en: "Queues", pt: "Filas" }],
  },
  {
    label: { en: "Data", pt: "Dados" },
    items: ["PostgreSQL", "MySQL", "Redis", "SQL"],
  },
  {
    label: { en: "Cloud & DevOps", pt: "Cloud e DevOps" },
    items: ["AWS", "Docker", "Kubernetes", "GitLab CI", "Jenkins", "Linux"],
  },
  {
    label: { en: "Observability", pt: "Observabilidade" },
    items: ["Datadog", "Grafana", "New Relic", "CloudWatch"],
  },
  {
    label: { en: "Quality", pt: "Qualidade" },
    items: ["RSpec", "TDD", "Code Review", { en: "Technical docs", pt: "Documentação técnica" }],
  },
];
