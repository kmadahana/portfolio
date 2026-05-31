import { ButtonLink } from "@/components/ButtonLink";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
      {/* Text column */}
      <div>
        {/* Eyebrow */}
        <Reveal
          as="p"
          className="mb-6 flex items-center gap-2 font-mono text-sm text-fg-muted"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden
          />
          {site.role} · Finsprint
        </Reveal>

        {/* Name */}
        <Reveal
          as="h1"
          delay={80}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Reveal>

        {/* Positioning statement */}
        <Reveal
          as="p"
          delay={160}
          className="mt-6 max-w-xl text-balance text-2xl font-medium leading-snug text-fg sm:text-3xl"
        >
          {site.tagline}
        </Reveal>

        {/* Supporting intro */}
        <Reveal
          as="p"
          delay={240}
          className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          {site.intro}
        </Reveal>

        {/* Primary links: GitHub, LinkedIn */}
        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href={site.socials.github} variant="primary">
            <GitHubIcon className="text-base" />
            GitHub
          </ButtonLink>
          <ButtonLink href={site.socials.linkedin} variant="secondary">
            <LinkedInIcon className="text-base" />
            LinkedIn
          </ButtonLink>
        </Reveal>

        {/* In-site navigation cues */}
        <Reveal
          delay={400}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-1.5 font-medium text-fg-muted transition-colors hover:text-fg"
          >
            See my work
            <ArrowUpRightIcon className="text-fg-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-medium text-fg-muted transition-colors hover:text-fg"
          >
            Get in touch
            <ArrowUpRightIcon className="text-fg-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
        </Reveal>
      </div>

      {/* Photo column — a softly rotated squircle with a glow behind it. */}
      <Reveal
        delay={260}
        className="relative mx-auto w-56 shrink-0 sm:w-72 md:w-[300px]"
      >
        {/* Decorative glow blob */}
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-accent/30 to-blue/30 opacity-60 blur-2xl"
        />
        <TiltCard className="rotate-2">
          <Portrait
            priority
            sizes="(max-width: 768px) 70vw, 300px"
            className="aspect-[4/5] rounded-[2.5rem] border border-border-strong shadow-2xl"
            objectPosition="object-center"
          />
        </TiltCard>
      </Reveal>
    </main>
  );
}
