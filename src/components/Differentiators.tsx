"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield, Sparkles } from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "Entrega no prazo",
    description:
      "Respeito a cronogramas. Comunicação clara e sprints organizados para previsibilidade total.",
  },
  {
    icon: Shield,
    title: "Segurança first",
    description:
      "Código revisado, boas práticas de segurança e conformidade com padrões da indústria.",
  },
  {
    icon: Sparkles,
    title: "UX excepcional",
    description:
      "Cada pixel pensado. Interfaces intuitivas que convertem visitantes em usuários engajados.",
  },
  {
    icon: Award,
    title: "Qualidade premium",
    description:
      "Arquitetura sólida, testes automatizados e documentação para manutenção futura.",
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Diferenciais
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Por que trabalhar{" "}
            <span className="text-gradient-accent">comigo</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-indigo-500/20"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-400">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
