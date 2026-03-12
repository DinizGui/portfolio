"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce de alto desempenho",
    description:
      "Plataforma de vendas com carrinho inteligente, pagamentos integrados e dashboard analytics em tempo real.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
    href: "#",
    github: "#",
  },
  {
    title: "SaaS B2B multi-tenant",
    description:
      "Sistema completo com autenticação, gestão de equipes, billing e webhooks para integrações.",
    tags: ["React", "Node.js", "AWS"],
    image: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
    href: "#",
    github: "#",
  },
  {
    title: "Dashboard de analytics",
    description:
      "Visualização de dados em tempo real com gráficos interativos, exportação e alertas customizados.",
    tags: ["Next.js", "D3.js", "Supabase"],
    image: "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
    href: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Projetos em destaque
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trabalho que{" "}
            <span className="text-gradient-accent">entreguei</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl glass transition-all hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div
                className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: project.image,
                  opacity: 0.9,
                }}
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-zinc-400">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    <ExternalLink size={16} />
                    Ver projeto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

