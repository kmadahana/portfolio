import type { Metadata } from "next";
import { Portrait } from "@/components/Portrait";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected work by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <header className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-mono text-sm text-fg-muted">
            Selected work
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl"
          >
            Projects
            <span className="text-accent">.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-4 text-lg leading-relaxed text-fg-muted"
          >
            A handful of things I&rsquo;ve designed and built. Each entry notes
            the problem, my role, and the stack involved.
          </Reveal>
        </div>

        {/* Circular avatar — a third distinct treatment of the photo. */}
        <Reveal delay={120} className="shrink-0">
          <Portrait
            sizes="96px"
            overlay={false}
            className="h-20 w-20 rounded-full border border-border-strong shadow-lg sm:h-24 sm:w-24"
          />
        </Reveal>
      </header>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={220 + i * 70}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </main>
  );
}
