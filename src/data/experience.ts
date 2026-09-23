import type { Localized } from "@/i18n/config";

export type Role = {
  title: Localized;
  period: Localized;
  highlights: Localized<string[]>;
};

export type Experience = {
  company: string;
  url?: string;
  location: Localized;
  /** Most recent first. */
  roles: Role[];
  technologies: string[];
};

export type Education = {
  course: Localized;
  school: string;
  period: Localized;
};

/** Most recent first. */
export const experience: Experience[] = [
  {
    company: "Twygo",
    location: { en: "Brazil (remote)", pt: "Brasil (remoto)" },
    roles: [
      {
        title: { en: "Mid-level Software Engineer", pt: "Engenheiro de Software Pleno" },
        period: { en: "Aug 2024 to present", pt: "Ago 2024 até hoje" },
        highlights: {
          en: [
            "Cut SQL-related operational costs by 30% and helped reduce the application's bug backlog by 80%.",
            "Build and maintain full-stack features with Ruby on Rails, TypeScript and React for a B2B corporate learning SaaS.",
            "Design, build and maintain REST APIs, system integrations and microservices with Rails and NestJS.",
            "Lead technical initiatives on product features and internal improvements, from planning to production.",
            "Write technical docs and POCs to validate new features, technical approaches and architectural decisions.",
            "Take part in architecture evolution and legacy refactoring, improving stability, security and delivery predictability.",
            "Support production deploys, incident response and complex troubleshooting, and improve observability with Datadog, Grafana, New Relic and CloudWatch.",
            "Review code, support less experienced developers and fix vulnerabilities found in pentests.",
            "Integrate payment gateways such as Asaas, eRede and PagSeguro.",
          ],
          pt: [
            "Reduzi em 30% os custos operacionais ligados a SQL e contribuí para reduzir em 80% o backlog de bugs da aplicação.",
            "Desenvolvo e mantenho funcionalidades full stack com Ruby on Rails, TypeScript e React em uma plataforma SaaS B2B de educação corporativa.",
            "Projeto, construo e mantenho APIs REST, integrações de sistemas e microsserviços com Rails e NestJS.",
            "Lidero iniciativas técnicas em funcionalidades de produto e melhorias internas, do planejamento à produção.",
            "Escrevo documentação técnica e POCs para validar novas funcionalidades, abordagens técnicas e decisões de arquitetura.",
            "Participo da evolução da arquitetura e da refatoração de sistemas legados, melhorando estabilidade, segurança e previsibilidade das entregas.",
            "Apoio deploys em produção, resolução de incidentes e troubleshooting complexo, e melhoro a observabilidade com Datadog, Grafana, New Relic e CloudWatch.",
            "Faço code reviews, apoio devs menos experientes e corrijo vulnerabilidades encontradas em pentests.",
            "Participo da integração de gateways de pagamento como Asaas, eRede e PagSeguro.",
          ],
        },
      },
      {
        title: { en: "Junior Software Engineer", pt: "Engenheiro de Software Júnior" },
        period: { en: "Oct 2022 to Aug 2024", pt: "Out 2022 até Ago 2024" },
        highlights: {
          en: [
            "Built and maintained full-stack features with Ruby on Rails, React and TypeScript.",
            "Built and evolved REST APIs and integrations that supported the platform's growth.",
            "Investigated and fixed production issues, keeping the application stable.",
            "Handled routine deploys and several projects at once in an agile product team.",
          ],
          pt: [
            "Desenvolvi e mantive funcionalidades full stack com Ruby on Rails, React e TypeScript.",
            "Construí e evoluí APIs REST e integrações que sustentaram o crescimento da plataforma.",
            "Investiguei e corrigi problemas em produção, mantendo a aplicação estável.",
            "Cuidei de deploys de rotina e de várias demandas simultâneas em um time ágil de produto.",
          ],
        },
      },
    ],
    technologies: [
      "Ruby on Rails",
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Sidekiq",
      "Amazon SQS",
      "Shoryuken",
      "AWS",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Grafana",
      "New Relic",
      "CloudWatch",
    ],
  },
  {
    company: "Grupo Euax",
    location: { en: "Joinville, Brazil", pt: "Joinville, SC" },
    roles: [
      {
        title: { en: "Full Stack Developer Intern", pt: "Estagiário Full Stack" },
        period: { en: "Sep 2021 to Oct 2022", pt: "Set 2021 até Out 2022" },
        highlights: {
          en: [
            "Fixed bugs and maintained core platform features.",
            "Provided technical support, resolving tickets and helping customers directly.",
            "Helped build new features with Ruby on Rails.",
            "Got hands-on with Linux, shell scripting and web application maintenance.",
          ],
          pt: [
            "Corrigi bugs e mantive funcionalidades centrais da plataforma.",
            "Prestei suporte técnico, resolvendo tickets e atendendo clientes diretamente.",
            "Apoiei o desenvolvimento de novas funcionalidades com Ruby on Rails.",
            "Ganhei prática com Linux, shell scripting e manutenção de aplicações web.",
          ],
        },
      },
    ],
    technologies: ["Ruby on Rails", "Linux", "Shell"],
  },
];

export const education: Education[] = [
  {
    course: { en: "Postgraduate degree in Computer Networks", pt: "Pós-graduação em Redes de Computadores" },
    school: "UTFPR",
    period: { en: "2025, in progress", pt: "2025, em andamento" },
  },
  {
    course: {
      en: "Technology degree in Systems Analysis and Development",
      pt: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    },
    school: "UDESC",
    period: { en: "2023", pt: "2023" },
  },
];
