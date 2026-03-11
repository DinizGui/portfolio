"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código limpo",
    description: "Arquitetura escalável, padrões sólidos e manutenção facilitada.",
  },
  {
    icon: Globe,
    title: "Experiência internacional",
    description: "Projetos para clientes em diversos mercados e fusos horários.",
  },
  {
    icon: Zap,
    title: "Alta performance",
    description: "Foco em otimização, Core Web Vitals e experiência fluida.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-16 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Sobre mim
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Desenvolvedor com visão de{" "}
              <span className="text-gradient-accent">produto</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-400">
              Com anos de experiência em desenvolvimento full stack, trabalho na
              interseção entre design e engenharia. Minha abordagem combina
              pensamento estratégico com execução técnica impecável.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              Especializado em React, Next.js, Node.js e sistemas em nuvem,
              entrego soluções que não apenas funcionam — mas encantam usuários
              e impulsionam resultados de negócio.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 transition-all hover:border-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-400 transition-colors group-hover:from-indigo-500/30 group-hover:to-cyan-500/30">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
