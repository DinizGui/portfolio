"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { config } from "@/data/config";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl glass p-8 md:p-12 lg:p-16"
        >
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Contato
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Vamos criar algo{" "}
              <span className="text-gradient-accent">incrível</span> juntos
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-zinc-400">
              Pronto para levar seu próximo projeto ao próximo nível? Entre em
              contato e vamos conversar sobre suas ideias.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href={`mailto:${config.email}`}
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-600/50 bg-white/5 px-8 py-4 text-lg font-medium text-white transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 sm:w-auto"
              >
                <Mail size={22} className="text-indigo-400" />
                {config.email}
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}`}
                aria-label="Contato via WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-sm text-zinc-500"
            >
              Resposta em até 24 horas
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
