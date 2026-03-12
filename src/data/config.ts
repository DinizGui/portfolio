/**
 * Configuração centralizada para personalização do portfólio.
 * Edite os valores abaixo para customizar seu portfólio.
 */

export const config = {
  // Informações pessoais
  name: "Guilherme Diniz",
  role: "Full Stack Developer",
  tagline: "Transformo ideias em produtos digitais de alto impacto",
  bio: `Com anos de experiência em desenvolvimento full stack, trabalho na
  interseção entre design e engenharia. Minha abordagem combina
  pensamento estratégico com execução técnica impecável.`,

  // Contato
  email: "guicdiniz.gui@gmail.com",
  whatsapp: "5541998971961",

  // Redes sociais
  social: {
    github: "https://github.com/DinizGui",
    linkedin: "https://www.linkedin.com/in/guilherme-diniz-93b090248/",
  },

  // Projetos (adicione, remova ou edite)
  projects: [
    {
      title: "FlowFinance — Gestão financeira inteligente",
      description:
        "Plataforma para gestão financeira de renda variável: projete sua renda, calcule o gasto seguro e simule cenários em tempo real.",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      gradient: "from-indigo-500 to-cyan-500",
      href: "https://financias-mrby.vercel.app",
      github: "https://github.com/DinizGui/financias",
    },
    {
      title: "WhatsApp IA — Automação de atendimento",
      description:
        "Servidor Node.js que integra WhatsApp com IA para respostas automatizadas e fluxos inteligentes.",
      tags: ["Node.js", "Express", "WhatsApp", "AI"],
      gradient: "from-slate-900 to-slate-800",
      href: "https://github.com/DinizGui/whatsapp-IA",
      github: "https://github.com/DinizGui/whatsapp-IA",
    },
  ],
} as const;

