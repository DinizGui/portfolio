 "use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiVercel,
  SiDocker,
  SiGithubactions,
  SiRailway,
} from "react-icons/si";
import { Webhook, Workflow } from "lucide-react";

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    count: 5,
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiReact, color: "#BB4B96" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    count: 4,
    techs: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", Icon: Webhook, color: "#22D3EE" },
      { name: "Puppeteer", Icon: Workflow, color: "#40B5A4" },
    ],
  },
  {
    id: "database",
    title: "Banco de Dados",
    count: 2,
    techs: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Prisma ORM", Icon: SiPrisma, color: "#0EA5E9" },
    ],
  },
  {
    id: "automation",
    title: "Automacao & Trading",
    count: 2,
    techs: [
      { name: "MetaTrader 5", Icon: Workflow, color: "#22C55E" },
      { name: "MQL5", Icon: Workflow, color: "#3B82F6" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deploy",
    count: 4,
    techs: [
      { name: "Railway", Icon: SiRailway, color: "#0B0D0E" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions (CI/CD)", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tech Stack que utilizo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Ferramentas e tecnologias que utilizo para construir aplicacoes
            escalaveis
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass h-full overflow-hidden rounded-2xl border border-zinc-800/50 p-6 transition-all duration-300 hover:border-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <TechBadge
                      key={tech.name}
                      name={tech.name}
                      icon={tech.Icon}
                      color={tech.color}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs font-medium text-zinc-500">
                  {category.count} {category.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-full border border-zinc-700/50 bg-white/[0.02] px-5 py-2.5 text-sm text-zinc-400 backdrop-blur-sm transition-colors hover:border-indigo-500/30 hover:text-zinc-300"
            >
              <span className="font-semibold text-indigo-400">
                {category.count}
              </span>{" "}
              {category.title}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type TechIcon = React.ComponentType<{ size?: number; className?: string }>;

interface TechBadgeProps {
  name: string;
  icon: TechIcon;
  color: string;
}

function TechBadge({ name, icon: Icon, color }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group/badge flex cursor-default items-center gap-2 rounded-full border border-zinc-700/50 bg-white/[0.03] px-3 py-2 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
    >
      <span className="flex shrink-0 [&>svg]:size-4" style={{ color }}>
        <Icon size={16} />
      </span>
      <span>{name}</span>
    </motion.span>
  );
}

