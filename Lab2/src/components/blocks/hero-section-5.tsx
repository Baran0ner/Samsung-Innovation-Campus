"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

const strengths = [
  { label: "AI & ML", icon: BrainCircuit },
  { label: "Data Engineering", icon: Database },
  { label: "Software Systems", icon: Code2 },
  { label: "LLM/RAG", icon: Sparkles },
];

const navItems = [
  { label: "Who I Am", href: "#who-i-am" },
  { label: "Skills", href: "#skills" },
  { label: "Goal", href: "#future-goal" },
  { label: "Reflection", href: "#reflection" },
];

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const headerPadding = useTransform(scrollYProgress, [0, 0.05], [24, 12]);
  const headerBackground = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(2,6,23,0)", "rgba(2,6,23,0.82)"],
  );

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 px-4 pb-16 pt-4 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.26),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)]" />

      <motion.header
        style={{
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
          backgroundColor: headerBackground,
        }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/0 px-4 backdrop-blur-2xl transition-colors sm:px-6 lg:px-8"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm shadow-2xl shadow-sky-950/20">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="grid size-9 place-items-center rounded-full bg-sky-400 text-slate-950">
              <Layers3 className="size-4" aria-hidden="true" />
            </span>
            <span>AI Data Portfolio</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      <div className="mx-auto max-w-7xl pt-24 sm:pt-28">
        <div className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/30 lg:min-h-[760px] lg:rounded-[3rem]">
          <video
            className="absolute inset-0 size-full object-cover opacity-60 saturate-150"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/who-i-am.png"
            aria-hidden="true"
          >
            <source
              src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(15,23,42,0.72)_42%,rgba(15,23,42,0.24)_100%)]" />
          <div className="absolute inset-1 rounded-[1.7rem] ring-1 ring-inset ring-white/10 lg:rounded-[2.7rem]" />

          <div className="relative flex min-h-[680px] flex-col justify-end p-6 sm:p-10 lg:min-h-[760px] lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
                <Sparkles className="size-4" aria-hidden="true" />
                Computer Engineering Student
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Building AI & Data-Driven Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                I am a Computer Engineering student focused on Artificial
                Intelligence, Data Engineering, and modern software systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#skills"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-sky-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View My Skills
                </a>
                <a
                  href="#future-goal"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  My Future Goal
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/10"
              >
                <span className="grid size-10 place-items-center rounded-full border border-sky-300/25 bg-sky-300/10 text-sky-200">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
