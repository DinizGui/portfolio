"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export function GitHubActivity() {
  return (
    <section id="github" className="relative px-6 py-24 md:py-32">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-300">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/40">
              <Github size={10} />
            </span>
            Live GitHub Contributions
          </span>

          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            GitHub Activity
          </h2>
          <p className="mx-auto max-w-xl text-sm text-zinc-400 md:text-base">
            This graph highlights my recent coding activity and contributions
            across open source and personal projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group w-full max-w-5xl rounded-[28px] border border-slate-700/60 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-black/90 p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.85)]"
        >
          <div className="relative rounded-[26px] bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950/95 p-5 md:p-7">
            {/* subtle inner shine */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-16 bg-gradient-to-b from-white/5 to-transparent blur-md" />

            <div className="overflow-x-auto rounded-2xl border border-slate-700/70 bg-slate-950/80 p-3 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-all duration-300 group-hover:border-indigo-400/70 group-hover:shadow-[0_0_60px_rgba(79,70,229,0.4)]">
              <div className="min-w-full flex justify-center">
                <img
                  src="https://ghchart.rshah.org/DinizGui"
                  alt="GitHub contribution graph for user DinizGui"
                  className="h-auto max-w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-3 md:p-4">
                <p className="mb-2 text-left text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  GitHub Stats
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=DinizGui&show_icons=true&theme=transparent&hide_border=true"
                    alt="GitHub stats for user DinizGui"
                    className="h-auto max-w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-3 md:p-4">
                <p className="mb-2 text-left text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Top Languages
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=DinizGui&layout=compact&theme=transparent&hide_border=true"
                    alt="Top languages for user DinizGui"
                    className="h-auto max-w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Profile button + footer text */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => window.open("https://github.com/DinizGui", "_blank")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(79,70,229,0.55)] transition-all hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(79,70,229,0.7)]"
              >
                <Github size={16} />
                View my GitHub Profile
              </button>
              <p className="text-xs text-zinc-500 md:text-sm">
                Consistent coding and contribution history on GitHub.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

