import Image from "next/image";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  Goal,
  GraduationCap,
  LineChart,
  Rocket,
} from "lucide-react";
import { HeroSection } from "@/components/blocks/hero-section-5";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <HeroSection />

      <section
        id="who-i-am"
        className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionCopy
            eyebrow="Who I Am"
            icon={<GraduationCap className="size-5" aria-hidden="true" />}
            title="A Computer Engineering student building practical technical depth."
            body="I am interested in Artificial Intelligence, Data Engineering, LLM/RAG systems, and software development. My personal brand is centered on learning deeply, building consistently, and connecting software ideas with real-world value."
          />
          <ShowcaseImage
            src="/images/who-i-am.png"
            alt="Computer engineering student working with AI, data science, cloud, and software systems visuals."
          />
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <ShowcaseImage
            src="/images/my-skills.png"
            alt="Technical skills visual showing code, machine learning, SQL database, automation, and dashboards."
          />
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100">
              <BrainCircuit className="size-5" aria-hidden="true" />
              My Skills
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-normal sm:text-5xl">
              Skills for AI, data, and reliable software delivery.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I have experience with Python, SQL, Java, Power BI, test
              automation, data processing, and AI-based projects.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <Icon className="mb-4 size-6 text-sky-300" aria-hidden="true" />
                    <h3 className="font-semibold text-white">{skill.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="future-goal"
        className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCopy
            eyebrow="My Future Goal"
            icon={<Goal className="size-5" aria-hidden="true" />}
            title="I want to build useful AI and data systems for real business problems."
            body="My goal is to work in AI and Data Engineering roles where I can design data pipelines, develop intelligent applications, improve automation, and turn information into systems that help teams make better decisions."
          />
          <ShowcaseImage
            src="/images/future-goal.png"
            alt="AI-powered systems visual with data pipelines, model operations, automation workflows, APIs, and dashboards."
          />
        </div>
      </section>

      <section
        id="reflection"
        className="scroll-mt-24 bg-slate-100 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <Rocket className="size-5 text-sky-600" aria-hidden="true" />
            Final Reflection
          </div>
          <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            A personal brand built around curiosity, execution, and impact.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I aimed for an AI and Data Engineering role, and I wanted my
            website to feel clean, professional, and technology-focused. I used
            AI to organize my personal profile, generate visual ideas, and
            improve the website design. This lab helped me understand how
            Generative AI can support not only content creation but also coding,
            design, and personal branding.
          </p>
        </div>
      </section>
    </main>
  );
}

const skills = [
  {
    title: "Programming",
    description: "Python and Java for software development, data workflows, and AI projects.",
    icon: Code2,
  },
  {
    title: "Data Engineering",
    description: "SQL, data processing, structured analysis, and pipeline-oriented thinking.",
    icon: Database,
  },
  {
    title: "AI Projects",
    description: "Applied work with AI-based systems, LLM/RAG concepts, and model-driven features.",
    icon: BrainCircuit,
  },
  {
    title: "Analytics & Quality",
    description: "Power BI dashboards, test automation, validation, and detail-focused delivery.",
    icon: LineChart,
  },
];

function SectionCopy({
  eyebrow,
  icon,
  title,
  body,
}: {
  eyebrow: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
        {icon}
        {eyebrow}
      </div>
      <h2 className="max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{body}</p>
      <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-700">
        <BadgeCheck className="size-5 text-sky-600" aria-hidden="true" />
        Student portfolio focused on practical AI and data systems
      </div>
    </div>
  );
}

function ShowcaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/10">
      <Image
        src={src}
        alt={alt}
        width={1672}
        height={941}
        unoptimized
        className="aspect-[1672/941] w-full rounded-[1.35rem] object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
