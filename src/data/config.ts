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
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },

  // Projetos (adicione, remova ou edite)
  projects: [
    {
      title: "E-commerce de alto desempenho",
      description:
        "Plataforma de vendas com carrinho inteligente, pagamentos integrados e dashboard analytics em tempo real.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      gradient: "from-indigo-500 to-cyan-500",
      href: "#",
      github: "#",
    },
    {
      title: "SaaS B2B multi-tenant",
      description:
        "Sistema completo com autenticação, gestão de equipes, billing e webhooks para integrações.",
      tags: ["React", "Node.js", "AWS"],
      gradient: "from-violet-500 to-indigo-500",
      href: "#",
      github: "#",
    },
    {
      title: "Dashboard de analytics",
      description:
        "Visualização de dados em tempo real com gráficos interativos, exportação e alertas customizados.",
      tags: ["Next.js", "D3.js", "Supabase"],
      gradient: "from-cyan-500 to-indigo-500",
      href: "#",
      github: "#",
    },
  ],
} as const;

