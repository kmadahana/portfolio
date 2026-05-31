import type { Metadata } from "next";
import Link from "next/link";
import { CurrentlyInto } from "@/components/CurrentlyInto";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role} at Finsprint.`,
};

// Quick-glance facts shown as chips under the heading.
const tags = ["Kabarak University", "Finsprint", "React", "TypeScript"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16">
        {/* Bio */}
        <div className="order-2 md:order-1">
          <Reveal as="p" className="font-mono text-sm text-fg-muted">
            About me
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl"
          >
            Hi, I&rsquo;m Kevin
            <span className="text-accent">.</span>
          </Reveal>

          {/* Fact chips */}
          <Reveal delay={140} className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent-bright"
              >
                {tag}
              </span>
            ))}
          </Reveal>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-fg-muted">
            {site.bio.map((paragraph, i) => (
              <Reveal as="p" key={i} delay={200 + i * 70}>
                {paragraph}
              </Reveal>
            ))}
          </div>

          {/* Interactive focus panel */}
          <Reveal delay={200 + site.bio.length * 70} className="mt-8">
            <CurrentlyInto />
          </Reveal>

          {/* Closing call-to-action */}
          <Reveal
            as="p"
            delay={260 + site.bio.length * 70}
            className="mt-8 text-lg leading-relaxed text-fg"
          >
            I&rsquo;m open to opportunities in full-stack development. Feel free
            to{" "}
            <Link
              href="/contact"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              reach out via my contact page
            </Link>{" "}
            — I&rsquo;d be glad to connect.
          </Reveal>
        </div>

        {/* Photo — a clean framed portrait with an offset accent border. */}
        <Reveal delay={120} className="order-1 md:order-2 md:sticky md:top-28">
          <div className="relative mx-auto w-60 sm:w-72 md:w-full">
            {/* Offset accent frame sitting behind the photo. */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-accent/40"
            />
            <TiltCard max={6}>
              <Portrait
                priority
                sizes="(max-width: 768px) 75vw, 300px"
                className="aspect-[4/5] rounded-2xl border border-border-strong shadow-2xl"
                objectPosition="object-center"
              />
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
