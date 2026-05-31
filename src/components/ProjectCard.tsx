/**
 * A single project card: title, problem/role description, tech-stack tags, and
 * links to the live demo and source. Server Component; hover/focus states are
 * pure CSS. Featured projects span two columns on large screens.
 */
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

/**
 * Brand-ish accent colour per technology, shown as a small dot on each tag so
 * stacks are recognisable at a glance. Unknown techs fall back to the theme
 * blue. Add new entries here as you add projects.
 */
const TECH_COLORS: Record<string, string> = {
  PHP: "#787CB5",
  Laravel: "#FF2D20",
  Blade: "#F7523F",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  "Next.js": "#9CA3FF",
  "Node.js": "#5FA04E",
  Node: "#5FA04E",
  "Tailwind CSS": "#38BDF8",
};

const DEFAULT_TECH_COLOR = "var(--blue)";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, demoUrl, sourceUrl, featured } = project;

  return (
    <article
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-bg-elevated hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
    >
      {/* Accent hairline that lights up on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <h2 className="font-display text-xl font-semibold tracking-tight text-fg">
          {title}
        </h2>
        {featured && (
          <span className="shrink-0 rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-xs text-accent-bright">
            featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
        {description}
      </p>

      {/* Tech stack */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/50 px-2.5 py-1 font-mono text-xs text-fg-muted"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: TECH_COLORS[tech] ?? DEFAULT_TECH_COLOR,
              }}
            />
            {tech}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm font-medium">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
          >
            Live demo
            <ArrowUpRightIcon className="text-fg-subtle transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent" />
          </a>
        )}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
          >
            <GitHubIcon className="text-base" />
            Source
          </a>
        )}
      </div>
    </article>
  );
}
