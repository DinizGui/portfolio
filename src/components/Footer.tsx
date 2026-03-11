"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { config } from "@/data/config";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const social = [
  { icon: Github, href: config.social.github, label: "GitHub" },
  { icon: Linkedin, href: config.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${config.email}`, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a
              href="#hero"
              className="text-2xl font-semibold tracking-tight text-white"
            >
              &lt;{config.name.split(" ")[0]}<span className="text-indigo-400">/</span>&gt;
            </a>
            <p className="mt-2 text-sm text-zinc-500">
              {config.role}
            </p>
          </motion.div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-6">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-indigo-400"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-zinc-800/50 pt-8 text-center"
        >
          <p className="text-sm text-zinc-600">
            © {currentYear} Todos os direitos reservados. Feito com cuidado.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
